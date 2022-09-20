import { Wrapper, UploadButton, UploadFileHidden, UploadImage } from "./Upload.styles";
import { IUploadUIProps } from "./Upload.types";

export default function UploadUI(props: IUploadUIProps) {
  return (
    <Wrapper>
      {props.fileUrl ? (
        <UploadImage
          onClick={props.onClickUpload}
          src={`https://storage.googleapis.com/team04-storage/${props.fileUrl}`}
        />
      ) : (
        <UploadButton onClick={props.onClickUpload}>
          <>+</>
        </UploadButton>
      )}
      <UploadFileHidden type="file" ref={props.fileRef} onChange={props.onChangeFile} />
    </Wrapper>
  );
}
