import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import CommunityWriteUI from "./CommunityWrite.presenter";
import { CREATE_BOARD, FETCH_BOARDS } from "./CommunityWrite.query";

export default function CommunityWrite() {
  const router = useRouter();
  const [createBoard] = useMutation(CREATE_BOARD);

  const { register, handleSubmit, setValue, trigger, formState } = useForm({
    mode: "onChange",
  });

  const onChangeContents = (value: string) => {
    setValue("contents", value === "<p><br></p>" ? "" : value);
    trigger("contents");
  };

  const onClickCreate = async (data: any) => {
    try {
      await createBoard({
        variables: {
          createBoardInput: {
            email: "",
            name: "",
            title: "",
            address: "",
            contents: data.contents,
            tags: data.tags?.split(","),
          },
        },
      });
      router.push("/");
      alert("등록에 성공하였습니다!!");
    } catch (error) {
      alert("실패!");
    }
  };

  const onClickCancel = () => {
    router.push("/community");
  };

  return (
    <CommunityWriteUI
      register={register}
      handleSubmit={handleSubmit}
      onClickCreate={onClickCreate}
      onChangeContents={onChangeContents}
      onClickCancel={onClickCancel}
      formState={formState}
    />
  );
}
