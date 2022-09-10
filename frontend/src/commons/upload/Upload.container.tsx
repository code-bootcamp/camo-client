import { useMutation } from "@apollo/client";
import { Modal } from "antd";
import { ChangeEvent, useRef } from "react";
import UploadUI from "./Upload.presenter";
import { UPLOAD_IMAGE } from "./Upload.queries";
import { IUploadProps } from "./Upload.types";
import { checkValidationImage } from "./Upload.validation";

export default function Upload(props: IUploadProps) {
  const fileRef = useRef<HTMLInputElement>(null);
  const [uploadImage] = useMutation(UPLOAD_IMAGE);

  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = checkValidationImage(event.target.files?.[0]);
    console.log(file);
    if (!file) return;

    try {
      const result = await uploadImage({
        variables: { file: [file] },
      });
      props.onChangeFileUrls(result.data.uploadImage, props.index);
    } catch (error) {
      console.log(error);
      Modal.error({ content: "실패하였습니다!!" });
    }
  };

  const onClickUpload = () => {
    fileRef.current?.click();
  };

  return (
    <UploadUI
      fileRef={fileRef}
      fileUrl={props.fileUrl}
      defaultFileUrl={props.defaultFileUrl}
      onChangeFile={onChangeFile}
      onClickUpload={onClickUpload}
    />
  );
}
