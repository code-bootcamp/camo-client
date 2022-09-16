import { useMutation } from "@apollo/client";
import {
  ChangeEvent,
  useRef,
  // useState
} from "react";
import { checkValidationImage } from "./Upload.validation";
import { UPLOAD_FILE } from "./Upload.queries";
import { Modal } from "antd";
import UploadNewUI from "./Upload.presenter";
import { IUploadProps } from "./Upload.types";

export default function UploadNew(props: IUploadProps) {
  const fileRef = useRef<HTMLInputElement>(null);
  // const [files, setFiles] = useState([]);
  const [uploadFile] = useMutation(UPLOAD_FILE);

  const onClickUpload = () => {
    fileRef.current?.click();
  };

  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = checkValidationImage(event.target.files?.[0]);
    if (!file) return;

    try {
      const result = await uploadFile({ variables: { files: [file] } });
      props.onChangeFileUrls(result.data.uploadFile, props.index);
    } catch (error: any) {
      Modal.error({ content: error.message });
    }
  };

  return (
    <UploadNewUI
      fileRef={fileRef}
      fileUrl={props.fileUrl}
      defaultFileUrl={props.defaultFileUrl}
      onClickUpload={onClickUpload}
      onChangeFile={onChangeFile}
    />
  );
}
