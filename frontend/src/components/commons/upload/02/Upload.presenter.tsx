import { UploadButton, UploadFileHidden, UploadImage } from "./Upload.styles";

export default function UploadUI02(props: any) {
  console.log(props.fileUrl);
  return (
    <>
      {props.fileUrl ? (
        <UploadButton
          onClick={props.onClickUpload}
          src={`https://storage.googleapis.com/${props?.fileUrl}`}
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
