import { useMutation } from "@apollo/client";
import * as yup from "yup";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { MouseEvent, useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../commons/hooks";
import CommunityWriteUI from "./CommunityWrite.presenter";
import {
  CREATE_BOARD,
  FETCH_BOARD,
  // FETCH_BOARD,
  UPDATE_BOARD,
} from "./CommunityWrite.queries";
import { yupResolver } from "@hookform/resolvers/yup";
import { Editor } from "@toast-ui/react-editor";
import { ICommunityNewProps } from "./CommunityWrite.types";
import { IUpdateBoardInput } from "../../../../commons/types/generated/types";

const schema = yup.object({
  title: yup.string().required("제목을 입력해주세요."),
  contents: yup.string().required("내용을 입력해주세요."),
});

export default function CommunityWrite(props: ICommunityNewProps) {
  useAuth();

  const router = useRouter();

  const [isAddressOpen, setIsAddressOpen] = useState(false);
  const [fileUrls, setFileUrls] = useState(["", "", ""]);

  const [createBoard] = useMutation(CREATE_BOARD);
  const [updateBoard] = useMutation(UPDATE_BOARD);

  const { register, handleSubmit, setValue, trigger, formState, getValues } = useForm({
    resolver: yupResolver(schema),
    mode: "onSubmit",
  });

  // toastUI
  const editorRef = useRef<Editor>(null);
  const onChangeContents = (value: string) => {
    const htmlData = editorRef.current?.getInstance()?.getHTML();
    setValue("contents", htmlData);
    trigger("contents");
  };

  // toastUI edit
  useEffect(() => {
    if (props.data?.fetchBoard.contents) {
      const htmlString = props.data?.fetchBoard.contents;
      editorRef.current?.getInstance().setHTML(String(htmlString));
    }
  }, [props?.data]);

  const onCompleteAddressSearch = (data: any) => {
    setValue("zipcode", data.zonecode);
    setValue("address", data.address);
    // setValue("addressDetail", data.addressDetail);

    trigger("zipcode");
    trigger("address");
    // trigger("addressDetail");
    setIsAddressOpen(false);
  };

  const onClickAddressModal = (event: MouseEvent<HTMLButtonElement>) => {
    if (event.currentTarget instanceof HTMLButtonElement) {
      switch (event.currentTarget.id) {
        case "modalClose":
          setIsAddressOpen(false);
          break;
        case "modalOpen":
          setIsAddressOpen(true);
          break;
      }
    }
  };

  const onChangeFileUrls = (fileUrl: string, index: number) => {
    const newFileUrls = [...fileUrls];
    newFileUrls[index] = fileUrl;
    setFileUrls(newFileUrls);
  };

  useEffect(() => {
    if (props.data !== undefined || null) {
      // if (props.data.fetchBoard.tags?.length) {
      //   setTagList(props.data.fetchBoard.tags?.map((el: any) => el.name));
      // }
      if (props.data?.fetchBoard.images?.length) {
        setFileUrls([...props.data?.fetchBoard.images.map((el: any) => el.url)]);
      }
    }
  }, [props.data]);

  // // image Edit
  // useEffect(() => {
  //   if (props.data?.fetchBoard.images) {
  //     setFileUrls([...props.data?.fetchBoard.images]);
  //   }
  // }, [props.data]);

  const onClickCreate = async (data: any) => {
    console.log("fileUrls Check", fileUrls);

    try {
      if (!fileUrls) {
        Modal.error({ content: "이미지 3장을 등록해주세요🖼" });
      } else if (fileUrls) {
        const result = await createBoard({
          variables: {
            createBoardInput: {
              title: data.title,
              contents: data.contents,
              zipcode: data.zipcode || "",
              address: data.address || "",
              addressDetail: data.addressDetail || "",
              tags: data.tags?.split(" ") || "",
              image: [...fileUrls] || "",
            },
          },
        });
        router.push(`/community/${result.data?.createBoard.id}`);
      }
    } catch (error: any) {
      console.log("등록실패", error);
      console.log(error.message);
      if (error instanceof Error) {
        Modal.error({ content: "등록되지 않았습니다😭" });
      }
    }
  };

  const onClickCancel = () => {
    router.push("/community/");
  };

  const onClickEdit = async (data: any) => {
    console.log(String(router.query.communityId));
    const updateBoardInput: IUpdateBoardInput = {};
    if (data.title) updateBoardInput.title = data.title;
    if (data.content) updateBoardInput.contents = data.content;
    if (data.tags) updateBoardInput.tags = data.tags;
    if (fileUrls) updateBoardInput.image = fileUrls;
    try {
      const result = await updateBoard({
        variables: {
          boardId: router.query.communityId,
          nickName: props.data?.fetchBoard.user.nickName,
          updateBoardInput: {
            title: data.title,
            zipcode: data.zipcode,
            address: data.address,
            addressDetail: data.addressDetail,
            contents: data.contents,
            // tags: data.tags?.split(" ") || "",
            image: [...fileUrls],
          },
        },
        refetchQueries: [
          {
            query: FETCH_BOARD,
            variables: {
              boardId: String(router.query.communityId),
            },
          },
        ],
      });
      router.push(`/community/${result.data?.updateBoard.id}`);
    } catch (error: any) {
      console.log("수정실패", error);
      console.log(error instanceof Error);
      if (error instanceof Error) {
        Modal.error({ content: "수정되지 않았습니다😭" });
      }
    }
  };

  return (
    <CommunityWriteUI
      isAddressOpen={isAddressOpen}
      onClickAddressModal={onClickAddressModal}
      onCompleteAddressSearch={onCompleteAddressSearch}
      register={register}
      handleSubmit={handleSubmit}
      onClickCreate={onClickCreate}
      onChangeContents={onChangeContents}
      onClickCancel={onClickCancel}
      formState={formState}
      fileUrls={fileUrls}
      onChangeFileUrls={onChangeFileUrls}
      onClickEdit={onClickEdit}
      data={props.data}
      isEdit={props.isEdit}
      editorRef={editorRef}
      address={getValues("address")}
    />
  );
}
