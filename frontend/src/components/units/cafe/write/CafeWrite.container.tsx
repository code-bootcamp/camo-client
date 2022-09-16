import { useMutation } from "@apollo/client";
import { message, Modal } from "antd";
import { useRouter } from "next/router";
import { ChangeEvent, MouseEvent, useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../commons/hooks";
import { FETCH_CAFE_LISTS_CREATED_AT } from "../list/CafeList.queries";
import CafeWriteUI from "./CafeWrite.presenter";
import { CREATE_CAFE_LIST, UPDATE_CAFE_LIST, UPLOAD_FILE } from "./CafeWrite.queries";

export default function CafeWrite(props: any) {
  useAuth();
  const router = useRouter();

  const [isAddressOpen, setIsAddressOpen] = useState(false);
  const [fileUrls, setFileUrls] = useState(["", "", ""]);

  const { register, handleSubmit, setValue, trigger, reset, formState } = useForm({
    mode: "onChange",
  });

  useEffect(() => {
    if (props.data !== undefined) {
      reset({
        title: props.data.fetchCafeList.title,
        zipcode: props.data.fetchCafeList.zipcode,
        address: props.data.fetchCafeList.address,
        addressDetail: props.data.fetchCafeList.addressDetail,
        phone: props.data.fetchCafeList.phone,
        startTime: props.data.fetchCafeList.startTime,
        endTime: props.data.fetchCafeList.endTime,
        homepage: props.data.fetchCafeList.homepage,
        remarks: props.data.fetchCafeList.remarks,
        deposit: props.data.fetchCafeList.deposit,
        contents: props.data.fetchCafeList.contents,
        tags: props.data.fetchCafeList.tags?.join(),
      });
      if (props.data.fetchCafeList.cafeListImage?.length) {
        setFileUrls([...props.data.fetchCafeList.cafeListImage]);
      }
    }
  }, [props.data]);

  const [createCafeList] = useMutation(CREATE_CAFE_LIST);
  const [updateCafeList] = useMutation(UPDATE_CAFE_LIST);

  const onChangeContents = (value: string) => {
    console.log(value);

    setValue("contents", value === "<p><br></p>" ? " " : value);
    trigger("contents");
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

  const onCompleteAddressSearch = (data: any) => {
    setValue("zipcode", data.zonecode || "");
    setValue("address", data.address || "");
    // setValue("addressDetail", data.addressDetail || "");

    trigger("zipcode");
    trigger("address");
    // trigger("addressDetail");

    setIsAddressOpen(false);
  };

  const onChangeFileUrls = (fileUrl: string, index: number) => {
    const newFileUrls = [...fileUrls];
    newFileUrls[index] = fileUrl;
    setFileUrls(newFileUrls);
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
            deposit: Number(data.deposit || ""),
            contents: data.contents || "",
            images: [...fileUrls],
            tags: data.tags.split(","),
            // tags: data.cafeListTag || "",
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
      // alert("등록에 성공하였습니다!!");
      router.push(`/cafe/${result.data?.createCafeList.id}`);
    } catch (error: any) {
      console.log("등록실패", error);
      console.log(error.message);
      Modal.error({ content: error.message });
    }
  };

  const onClickUpdate = async (data: any) => {
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
            endtTime: data.endTime || "",
            homepage: data.homepage || "",
            deposit: Number(data.deposit) || "",
            contents: data.contents || "",
            images: [...fileUrls] || "",
            tags: data.cafeListTag.split(",") || "",
            remarks: data.remarks || "",
          },
        },
      });

      router.push(`/cafe/${result.data?.updateCafeList.cafeListId}`);
      message.success("수정에 성공하였습니다!");
    } catch (error) {
      console.log("수정실패", error);
    }
  };

  const onClickCancel = () => {
    router.push("/cafe/");
  };
  return (
    <>
      <CafeWriteUI
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
        // imageUrl={imageUrl}
        fileUrls={fileUrls}
        onChangeFileUrls={onChangeFileUrls}
        // onChangeFile={onChangeFile}
        // onClickImage={onClickImage}
      />
    </>
  );
}
