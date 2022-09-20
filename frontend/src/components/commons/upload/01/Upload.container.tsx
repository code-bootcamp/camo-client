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

export default function Upload(props: IUploadProps) {
  // const [files, setFiles] = useState([]);
  const fileRef = useRef<HTMLInputElement>(null);
  const [uploadFile] = useMutation(UPLOAD_FILE);

  const onClickUpload = () => {
    fileRef.current?.click();
  };

  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = checkValidationImage(event.target.files?.[0]);
    if (!file) return;

    try {
      // const result = await uploadFile({ variables: { files: [file] } });
      const result = await uploadFile({ variables: { files: [file] } });
      // props.onChangeFileUrls(result.data.uploadFile, props.index);
      props.onChangeFileUrls(result.data.uploadFile[0], props.index);
      console.log(result.data);
    } catch (error: any) {
      if (error instanceof Error) Modal.error({ content: error.message });
      console.log("실패");
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
