import { useMutation } from "@apollo/client";
import * as yup from "yup";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { createRef, MouseEvent, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../commons/hooks";
import CommunityWriteUI from "./CommunityWrite.presenter";
import { CREATE_BOARD, UPDATE_BOARD } from "./CommunityWrite.queries";
import { yupResolver } from "@hookform/resolvers/yup";
import { Editor } from "@toast-ui/react-editor";
import { IUpdateBoardInput } from "../../../../commons/types/generated/types";

const schema = yup.object({
  title: yup.string().required("제목을 입력해주세요."),
  content: yup.string().required("내용을 입력해주세요."),
});

export default function CommunityWrite(props: any) {
  useAuth();
  const router = useRouter();

  const [isAddressOpen, setIsAddressOpen] = useState(false);
  const [fileUrls, setFileUrls] = useState(["", "", ""]);

  const [createBoard] = useMutation(CREATE_BOARD);
  const [updateBoard] = useMutation(UPDATE_BOARD);

  const { register, handleSubmit, setValue, trigger, formState } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const editorRef = createRef<Editor>();

  const onChangeContents = () => {
    const inputs = editorRef.current?.getInstance().getHTML();
    setValue("contents", inputs);
    trigger("contents");
  };

  const onCompleteAddressSearch = (data: any) => {
    setValue("zipcode", data.zonecode);
    setValue("address", data.address);
    setValue("addressDetail", data.addressDetail);

    trigger("zipcode");
    trigger("address");
    trigger("addressDetail");
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

  const onClickCreate = async (data: any) => {
    console.log("data", data);
    try {
      const result = await createBoard({
        variables: {
          createBoardInput: {
            title: data.title,
            contents: data.contents,
            zipcode: data.zipcode,
            address: data.address,
            addressDetail: data.addressDetail,
            tags: data.tags.split(" "),
            images: [...fileUrls],
          },
        },
      });
      console.log("result", result);
      router.push(`/community/${result.data?.createBoard.id}`);
    } catch (error: any) {
      console.log("등록실패", error);
      console.log(error.message);
      if (error instanceof Error) {
        Modal.error({ content: "등록되지 않았습니다😭" });
      }
    }
  };

  const onClickCancel = () => {
    router.push("/community");
  };

  useEffect(() => {
    if (props.data?.fetchBoard.images?.length) {
      setFileUrls([...props.data?.fetchBoard.images]);
    }
  }, [props.data]);

  const onClickEdit = async (data: any) => {
    const updateBoardInput: IUpdateBoardInput = {};
    if (data.title) updateBoardInput.title = data.title;
    if (data.contents) updateBoardInput.contents = data.contents;
    if (data.tags.split(" ")) updateBoardInput.tags = data.tags.split(" ");
    // if (data.fileUrl) updateBoardInput.images = data.fileUrl;
    if (data.zipcode) updateBoardInput.zipcode = data.zipcode;
    if (data.address) updateBoardInput.address = data.address;
    if (data.addressDetail) updateBoardInput.addressDetail = data.addressDetail;

    if (updateBoardInput) {
      try {
        const result = await updateBoard({
          variables: {
            boardId: router.query.communityId,
            nickName: props.el?.User.nickName,
            updateBoardInput,
          },
        });
        console.log(result);
        await router.push(`/community/${result.data?.updateBoard.id}`);
        location.reload();
      } catch (error: any) {
        console.log("수정실패", error);
        console.log(error.message);
        if (error instanceof Error) {
          Modal.error({ content: "수정되지 않았습니다😭" });
        }
      }
    }
  };

  // // 태그 수정시 defaultValue
  // useEffect(() => {
  //   if (props.editData?.fetchBoard.tags.length)
  //     setTagList(props.editData?.fetchBoard.tags.map((el: any) => el.title));
  // }, [props.editData]);

  // // 이미지 수정시 defaultValue
  // useEffect(() => {
  //   if (props.editData?.fetchBoard.images) {
  //     setImageUrl(props.editData?.fetchBoard.images);
  //   }
  // }, [props.editData]);

  // toastUI defaultValue
  useEffect(() => {
    const html: any = props.editData?.fetchBoard.content;
    editorRef.current?.getInstance().setHTML(html);
  }, [props.editData]);

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
    />
  );
}
