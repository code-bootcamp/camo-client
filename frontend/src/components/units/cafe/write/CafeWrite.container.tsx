import { useMutation } from "@apollo/client";
import { message, Modal } from "antd";
import { useRouter } from "next/router";
import { createRef, MouseEvent, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../commons/hooks";
import { FETCH_CAFE_LISTS_CREATED_AT } from "../list/CafeList.queries";
import CafeWriteUI from "./CafeWrite.presenter";
import { CREATE_CAFE_LIST, UPDATE_CAFE_LIST } from "./CafeWrite.queries";
import { Editor } from "@toast-ui/react-editor";

// import * as yup from "yup";
// import { yupResolver } from "@hookform/resolvers/yup";

// const schema = yup.object({
//   title: yup.string().required("제목을 입력해주세요."),
//   contents: yup.string().required("내용을 입력해주세요."),
// });

export default function CafeWrite(props: any) {
  useAuth();
  const router = useRouter();

  const [isAddressOpen, setIsAddressOpen] = useState(false);
  const [fileUrls, setFileUrls] = useState(["", "", ""]);

  const { register, handleSubmit, setValue, trigger, reset, formState } = useForm({
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
    const htmlString = props.editData?.fetchEpisodeDetail.contents;
    editorRef.current?.getInstance().setHTML(htmlString);
  }, [props?.editData]);

  // const onChangeContents = (value: string) => {
  //   console.log(value);
  //   setValue("contents", value === "<p><br></p>" ? "" : value);
  //   trigger("contents");
  // };

  useEffect(() => {
    if (props.data !== undefined) {
      reset({
        title: props.data.fetchCafeList.title,
        // zipcode: props.data.fetchCafeList.zipcode,
        // address: props.data.fetchCafeList.address,
        // addressDetail: props.data.fetchCafeList.addressDetail,
        // phone: props.data.fetchCafeList.phone,
        // startTime: props.data.fetchCafeList.startTime,
        // endTime: props.data.fetchCafeList.endTime,
        // homepage: props.data.fetchCafeList.homepage,
        // remarks: props.data.fetchCafeList.remarks,
        // deposit: props.data.fetchCafeList.deposit,
        // contents: props.data.fetchCafeList.contents,
        // tags: props.data.fetchCafeList.tags?.join(),
      });
      if (props.data.fetchCafeList.cafeListImage?.length) {
        setFileUrls([...props.data.fetchCafeList.cafeListImage]);
      }
    }
  }, [props.data]);

  const [createCafeList] = useMutation(CREATE_CAFE_LIST);
  const [updateCafeList] = useMutation(UPDATE_CAFE_LIST);

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

  const onClickCreate = async (data: any) => {
    console.log("데이타", data);

    try {
      const result = await createCafeList({
        variables: {
          createCafeListInput: {
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
            images: [...fileUrls] || "",
            tags: data.tags || "",
          },
        },
        refetchQueries: [
          {
            query: FETCH_CAFE_LISTS_CREATED_AT,
          },
        ],
      });

      console.log("result", result);
      message.success("등록 성공");
      router.push(`/cafe/${result.data?.createCafeList.id}`);
    } catch (error: any) {
      console.log(error.message);
      Modal.error({ content: error.message });
    }
  };

  const onClickUpdate = async (data: any) => {
    // const currentFiles = JSON.stringify(fileUrls);
    // const defaultFiles = JSON.stringify(props.data?.fetchCafeList.cafeListImage);
    // const isChangeFiles = currentFiles !== defaultFiles;

    // const updateCafeList: IUpdateCafeListInput = {};
    // if (isChangeFiles) IUpdateCafeListInput.images = fileUrls;
    // if (data.title) updateCafeList.title = data.title;
    // if (data.contents) updateCafeList.title = data.contents;
    // if (data.tags) updateCafeList.title = data.tags;
    // if (data.remarks) updateCafeList.title = data.remarks;

    try {
      const result = await updateCafeList({
        variables: {
          cafeListId: router.query.cafeId as string,
          updateCafeListInput: {
            title: data.title || "",
            zipcode: data.zipcode || "",
            address: data.address || "",
            addressDetail: data.addressDetail || "",
            phone: data.phone || "",
            startTime: data.startTime || "",
            endTime: data.endTime || "",
            homepage: data.homepage || "",
            deposit: Number(data.deposit) || "",
            contents: data.contents || "",
            images: [...fileUrls] || "",
            // tags: data.cafeListTag.split(",") || "",
            tags: data.cafeListTag,
            remarks: data.remarks || "",
          },
        },
      });
      router.push(`/cafe/${result.data?.updateCafeList.cafeListId}`);
      // router.push(`/cafe/`);
      message.success("수정 성공!");
      console.log(result);
    } catch (error) {
      console.log("수정 실패", error);
      alert("수정 실패");
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
