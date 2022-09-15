import { useMutation } from "@apollo/client";
import { ChangeEvent, useRef } from "react";
import { Modal } from "antd";
import { UPLOAD_FILE } from "./Upload.queries";
import { checkValidationImage } from "./Upload.validation";
import UploadUI02 from "./Upload.presenter";

export default function Upload02(props: any) {
  const fileRef = useRef<HTMLInputElement>(null);
  const [uploadFile] = useMutation(UPLOAD_FILE);

  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = checkValidationImage(event.target.files?.[0]);
    if (!file) return;

    try {
      const result = await uploadFile({
        variables: { file },
      });
      props.onChangeFileUrls(result.data.uploadFile, props.index);
    } catch (error: any) {
      Modal.error({ content: error.message });
    }
  };

  const onClickUpload = () => {
    fileRef.current?.click();
  };

  return (
    <UploadUI02
      fileRef={fileRef}
      fileUrl={props.fileUrl}
      onChangeFile={onChangeFile}
      onClickUpload={onClickUpload}
    />
  );
}
