import { useMutation } from "@apollo/client";
import { message, Modal } from "antd";
import { useRouter } from "next/router";
import { createRef, MouseEvent, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../commons/hooks";
import { FETCH_CAFE_LISTS_CREATED_AT } from "../list/CafeList.queries";
import CafeWriteUI from "./CafeWrite.presenter";
import { CREATE_CAFE_BOARD, UPDATE_CAFE_BOARD } from "./CafeWrite.queries";
import { Editor } from "@toast-ui/react-editor";
import { FETCH_CAFE_BOARD } from "../detail/CafeDetail.queries";
import { IQuery } from "../../../../commons/types/generated/types";
// import * as yup from "yup";
// import { yupResolver } from "@hookform/resolvers/yup";

// const schema = yup.object({
//    title: yup.string().required("카페 이름을 입력해주세요."),
//    contents: yup.string().required("내용을 입력해주세요."),
// });

// interface ICafeProps {
//   data: Pick<IQuery, "fetchCafe">;
// }

export default function CafeWrite(props: any) {
  useAuth();
  const router = useRouter();

  const [isAddressOpen, setIsAddressOpen] = useState(false);
  const [fileUrls, setFileUrls] = useState(["", "", ""]);

  const [createCafeBoard] = useMutation(CREATE_CAFE_BOARD);
  const [updateCafeBoard] = useMutation(UPDATE_CAFE_BOARD);

  const { register, handleSubmit, setValue, trigger, formState } = useForm({
    // resolver: yupResolver(schema),
    mode: "onChange",
  });

  // toastUI
  const editorRef = createRef<Editor>();
  const onChangeContents = (value: string) => {
    const htmlData = editorRef.current?.getInstance()?.getHTML();
    setValue("contents", htmlData);
    trigger("contents");
  };

  // toastUI edit
  useEffect(() => {
    const htmlString = props.data?.fetchCafeBoard.contents;
    editorRef.current?.getInstance().setHTML(htmlString);
  }, [props?.data]);

  // console.log(props.data?.fetchCafe.cafeListImage);
  // console.log(props.data?.fetchCafe?.cafeListImage[0]?.url);
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

  const onCompleteAddressSearch = (data: any) => {
    setValue("zipcode", data.zonecode || "");
    setValue("address", data.address || "");

    trigger("zipcode");
    trigger("address");
    setIsAddressOpen(false);
  };

  const onChangeFileUrls = (fileUrl: string, index: number) => {
    const newFileUrls = [...fileUrls];
    newFileUrls[index] = fileUrl;
    setFileUrls(newFileUrls);

    // setValue("fileURLs", newFileUrls);
    // trigger("fileURLs");
  };

  useEffect(() => {
    if (props.data !== undefined || null) {
      // reset({
      // contents: props.data.fetchCafe.contents,
      // tags: props.data.fetchCafe.tags?.join(),
      // });
      // if (props.data.fetchCafe.cafeListImage?.url) {
      //   setFileUrls([...props.data.fetchCafe.cafeListImage.url]);
      // }
      if (props.data?.fetchCafeBoard.images?.length) {
        setFileUrls([...props.data?.fetchCafeBoard?.images.map((el: any) => el.url)]);
      }
    }
  }, [props.data]);

  const onClickCreate = async (data: any) => {
    try {
      const result = await createCafeBoard({
        variables: {
          createCafeBoardInput: {
            title: data.title || "",
            zipcode: data.zipcode || "",
            address: data.address || "",
            addressDetail: data.addressDetail || "",
            phone: data.phone || "",
            startTime: data.startTime || "",
            endTime: data.endTime || "",
            homepage: data.homepage || "",
            remarks: data.remarks || "",
            deposit: Number(data.deposit || ""),
            contents: data.contents || "",
            // fileURLs: data.fileURLs,
            images: [...fileUrls] || "",
            // tags: data.cafeListTag?.split(",") || "",
            tags: data.tags?.split(" ") || "",
          },
        },
        refetchQueries: [
          {
            query: FETCH_CAFE_LISTS_CREATED_AT,
          },
        ],
      });

      console.log("등록결과", result);
      message.success("등록 성공");
      router.push(`/cafe/${result.data?.createCafeBoard.id}`);
    } catch (error: any) {
      console.log("등록실패", error);
      Modal.error({ content: error.message });
    }
  };
  console.log("파일url", fileUrls);

  const onClickUpdate = async (data: any) => {
    console.log("업데이트 클릭");
    // const currentFiles = JSON.stringify(fileUrls);
    // const defaultFiles = JSON.stringify(props.data?.fetchCafe.cafeListImage);
    // const isChangeFiles = currentFiles !== defaultFiles;

    // const updateCafeBoard: IUpdateCafeListInput = {};
    // if (isChangeFiles) IUpdateCafeListInput.images = fileUrls;
    // if (data.title) updateCafeBoard.title = data.title;
    // if (data.contents) updateCafeBoard.title = data.contents;
    // if (data.tags) updateCafeBoard.title = data.tags;
    // if (data.remarks) updateCafeBoard.title = data.remarks;

    try {
      const result = await updateCafeBoard({
        variables: {
          cafeBoardId: router.query.cafeId as string,
          updateCafeBoardInput: {
            title: data.title || "",
            zipcode: data.zipcode || "",
            address: data.address || "",
            addressDetail: data.addressDetail || "",
            phone: data.phone || "",
            startTime: data.startTime || "",
            endTime: data.endTime || "",
            homepage: data.homepage || "",
            deposit: Number(data.deposit) || "",
            remarks: data.remarks || "",
            contents: data.contents || "",
            // tags: data.tags?.split(" ") || "",
            // tags: data.cafeListTag?.split(",") || "",
            images: [...fileUrls] || "",
            // fileURLs: data.fileURLs,
          },
        },
        refetchQueries: [
          {
            query: FETCH_CAFE_BOARD,
            variables: {
              cafeBoardId: String(router.query.cafeId),
            },
          },
        ],
      });
      router.push(`/cafe/${result.data?.updateCafeBoard.id}`);
      // router.push(`/cafe/`);
      // message.success("수정 성공!");
      // console.log(result);
    } catch (error: any) {
      console.log("실패", error.message);
      Modal.error({ content: "수정 실패" });
      // alert("수정 실패");
    }
  };

  const onClickCancel = () => {
    router.push("/cafe/");
  };
  return (
    <>
      <CafeWriteUI
        data={props.data}
        isEdit={props.isEdit}
        isAddressOpen={isAddressOpen}
        onClickAddressModal={onClickAddressModal}
        onCompleteAddressSearch={onCompleteAddressSearch}
        register={register}
        handleSubmit={handleSubmit}
        onClickCreate={onClickCreate}
        onClickUpdate={onClickUpdate}
        onChangeContents={onChangeContents}
        onClickCancel={onClickCancel}
        formState={formState}
        fileUrls={fileUrls}
        onChangeFileUrls={onChangeFileUrls}
        // toastUI
        editorRef={editorRef}
      />
    </>
  );
}
