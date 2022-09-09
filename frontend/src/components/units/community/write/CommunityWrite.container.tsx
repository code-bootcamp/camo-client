import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { MouseEvent, useState } from "react";
import { useForm } from "react-hook-form";
import { IMutationCreateBoardArgs } from "../../../../commons/types/generated/types";
import CommunityWriteUI from "./CommunityWrite.presenter";
import { CREATE_BOARD } from "./CommunityWrite.queries";

declare const window: typeof globalThis & {
  kakao: any;
};

export default function CommunityWrite() {
  const router = useRouter();

  const [isAddressOpen, setIsAddressOpen] = useState(false);
  const [fileUrls, setFileUrls] = useState(["", "", ""]);

  const [createBoard] =
    useMutation<Pick<IMutationCreateBoardArgs, "createBoardInput">>(CREATE_BOARD);

  const { register, handleSubmit, setValue, trigger, formState } = useForm({
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
    console.log("1");
    try {
      const result = await createBoard({
        variables: {
          createBoardInput: {
            title: data.title,
            contents: data.contents,
            zipcode: data.zipcode,
            address: data.address,
            // addressDetail: data.addressDetail,
            tags: data.tags?.split(","),
            images: [...fileUrls],
          },
        },
      });
      console.log(result);
      router.push("/community");
      alert("등록에 성공하였습니다!!");
    } catch (error) {
      console.log(error);
      alert("실패!");
    }
  };

  const onClickCancel = () => {
    router.push("/community");
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
    />
  );
}
