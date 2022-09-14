import { PreviewImg, UploadBox, UploadFileHidden } from "./Upload.styles";

export default function UploadUI02(props: any) {
  return (
    <>
      {props.fileUrl ? (
        <PreviewImg
          onClick={props.onClickUpload}
          src={`https://storage.googleapis.com/${props?.fileUrl}`}
        />
      ) : (
        <UploadBox onClick={props.onClickUpload}>
          <>+</>
        </UploadBox>
      )}
      <UploadFileHidden type="file" ref={props.fileRef} onChange={props.onChangeFile} />
    </>
  );
}
