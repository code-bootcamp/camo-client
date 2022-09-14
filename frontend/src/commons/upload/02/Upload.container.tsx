import { useMutation } from "@apollo/client";
import { Modal } from "antd";
import { ChangeEvent, useRef } from "react";
import UploadUI02 from "./Upload.presenter";
import { UPLOAD_FILE } from "./Upload.queries";
import { checkFileValidation } from "./Upload.validation";

export default function Upload02(props: any) {
  const fileRef = useRef<HTMLInputElement>(null);
  const [uploadFile] = useMutation(UPLOAD_FILE);

  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = checkFileValidation(event.target.files?.[0]);
    console.log(file);

    try {
      const result = await uploadFile({
        variables: { files: [file] },
      });
      props.onChangeFileUrls(result.data.uploadFile, props.index);
    } catch (error) {
      console.log(error);
      Modal.error({ content: "실패!" });
    }
  };

  const onClickUpload = () => {
    fileRef.current?.click();
  };

  return (
    <UploadUI02
      fileRef={fileRef}
      fileUrl={props.fileUrl}
      defaultFileUrl={props.defaultFileUrl}
      onChangeFile={onChangeFile}
      onClickUpload={onClickUpload}
    />
  );
}
