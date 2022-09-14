import { Wrapper, UploadButton, UploadFileHidden, UploadImage, Div } from "./Upload.styles";
import { IUploadUIProps } from "./Upload.types";

export default function UploadNewUI(props: IUploadUIProps) {
  return (
    <Wrapper>
      {props.fileUrl ? (
        <UploadImage
          onClick={props.onClickUpload}
          src={`https://storage.googleapis.com/${props.fileUrl}`}
        />
      ) : (
        <UploadButton onClick={props.onClickUpload}>
          <Div>+</Div>
          {/* <Div>Upload</Div> */}
        </UploadButton>
      )}
      <UploadFileHidden type="file" ref={props.fileRef} onChange={props.onChangeFile} />
    </Wrapper>
  );
}
