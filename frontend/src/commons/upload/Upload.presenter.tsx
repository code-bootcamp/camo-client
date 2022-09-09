import { PreviewImg, UploadBox, UploadFileHidden } from "./Upload.styles";
import { IUploadUIProps } from "./Upload.types";

export default function UploadUI(props: IUploadUIProps) {
    return (
        <>
            { props.fileUrl ? (
                <PreviewImg onClick = { props.onClickUpload } src = { `https://storage.googleapis.com/${props.fileUrl}` } />
            ) : (
                <UploadBox onClick = { props.onClickUpload }>
                    <>+</>
                </UploadBox>
            ) }
            <UploadFileHidden type = "file" ref = { props.fileRef } onChange = { props.onChangeFile } />
        </>
    )
}