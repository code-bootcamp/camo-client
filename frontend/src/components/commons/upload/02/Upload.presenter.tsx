import { UploadButton, UploadFileHidden, UploadImage } from "./Upload.styles";

export default function UploadUI02(props: any) {
  return (
    <>
      {props.fileUrls ? (
        <UploadButton
          onClick={props.onClickUpload}
          src={`https://storage.googleapis.com/${props?.fileUrls}`}
        />
      ) : (
        <UploadImage onClick={props.onClickUpload}>
          <>+</>
        </UploadImage>
      )}
      <UploadFileHidden type="file" ref={props.fileRef} onChange={props.onChangeFile} />
    </>
  );
}
