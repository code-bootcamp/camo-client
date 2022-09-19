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
      console.log("업로드파일", file);
      // const result = await uploadFile({variables: { files:[file]},

      const result = await uploadFile({ variables: { files: [file] } });
      console.log("업로드결과", result);
      // props.onChangeFileUrls(result.data.uploadFile, props.index);

      props.onChangeFileUrls(result.data.uploadFile[0], props.index);
      // 왜[0]을 해야하는가
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });

      // if (error instanceof Error) Modal.error({ content: error.message });
      console.log("실패");
    }
  };

  const onClickUpload = () => {
    fileRef.current?.click();
  };

  return (
    <UploadUI02
      fileRef={fileRef}
      fileUrl={props.fileUrl}
      // fileUrl={props.fileUrls}
      defaultFileUrl={props.defaultFileUrl}
      onChangeFile={onChangeFile}
      onClickUpload={onClickUpload}
    />
  );
}
