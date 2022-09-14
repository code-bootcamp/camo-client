import { useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { MouseEvent, useState } from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../commons/hooks";
import CafeWriteUI from "./CafeWrite.presenter";
import { CREATE_CAFE_LIST } from "./CafeWrite.queries";

export default function CafeWrite(props: any) {
  useAuth();
  const router = useRouter();

  const [isAddressOpen, setIsAddressOpen] = useState(false);
  const [fileUrls, setFileUrls] = useState(["", "", ""]);

  const [createCafeList] = useMutation(CREATE_CAFE_LIST);

  const { register, handleSubmit, setValue, getValues, trigger, formState } = useForm({
    mode: "onChange",
  });

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
            // deposit: Number(data.deposit),
            contents: data.contents,
            images: [...fileUrls],
            tags: data.tags,
          },
        },
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
        data={props.data}
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
