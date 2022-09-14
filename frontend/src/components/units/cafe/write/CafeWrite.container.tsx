import { useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { MouseEvent, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../commons/hooks";
import { FETCH_CAFE_LISTS_CREATED_AT } from "../list/CafeList.queries";
import CafeWriteUI from "./CafeWrite.presenter";
import { CREATE_CAFE_LIST } from "./CafeWrite.queries";

export default function CafeWrite(props) {
  useAuth();
  const router = useRouter();

  const [isAddressOpen, setIsAddressOpen] = useState(false);
  const [fileUrls, setFileUrls] = useState(["", "", ""]);

  const [createCafeList] = useMutation(CREATE_CAFE_LIST);

  const { register, handleSubmit, setValue, getValues, trigger, formState } = useForm({
    mode: "onChange",
  });

  // useEffect(() => {
  //   if (props.data !== undefined) {
  //     reset({
  //       title: props.data.fetchCafeList.title,
  //       zipcode: props.data.fetchCafeList.zipcode,
  //       address: props.data.fetchCafeList.address,
  //       addressDetail: props.data.fetchCafeList.addressDetail,
  //       tags: props.data.fetchCafeList.cafeListTag?.join(),
  //       images: props.data.fetchCafeList.cafeListImage,
  //     });
  //     if (props.data.fetchCafeList.cafeListImage?.length) {
  //       setFileUrls([...props.data.fetchCafeList.cafeListImage]);
  //     }
  //   }
  // }, [props.data]);

  const onChangeContents = (value: string) => {
    setValue("contents", value === "<p><br></p>" ? "" : value);
    trigger("contents");
  };

  const onCompleteAddressSearch = (data: any) => {
    setValue("zipcode", data.zonecode);
    setValue("address", data.address);
    trigger("zipcode");
    trigger("address");
    setIsAddressOpen(false);
  };

  const onChangeFileUrls = (fileUrl: string, index: number) => {
    const newFileUrls = [...fileUrls];
    newFileUrls[index] = fileUrl;
    setFileUrls(newFileUrls);
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
  const onClickCreate = async (data: any) => {
    console.log("되니?");
    try {
      const result = await createCafeList({
        variables: {
          createCafeListInput: {
            title: data.title,
            zipcode: data.zipcode,
            address: data.address,
            addressDetail: data.addressDetail,
            phone: data.phone,
            startTime: data.startTime,
            endTime: data.endTime,
            homepage: data.homepage,
            deposit: data.deposit,
            contents: data.contents,
            images: [...fileUrls],
            // tags: data.tags.split(","),
            tags: data.tags,
          },
        },
        refetchQueries: [
          {
            query: FETCH_CAFE_LISTS_CREATED_AT,
          },
        ],
      });
      console.log(result);
      router.push(`/cafe/`);
      alert("등록에 성공하였습니다!!");
    } catch (error: any) {
      console.log("등록실패");
      console.log(error);
      Modal.error({ content: error.message });
    }
  };

  const onClickCancel = () => {
    router.push("/cafe/");
  };
  return (
    <>
      <CafeWriteUI
        address={getValues("address")}
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
      />
    </>
  );
}
