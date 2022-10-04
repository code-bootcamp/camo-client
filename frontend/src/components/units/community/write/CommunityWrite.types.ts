import { EditorType } from "@toast-ui/editor";
import { Editor } from "@toast-ui/react-editor";
import { LegacyRef } from "react";
import { IQuery } from "../../../../commons/types/generated/types";

export interface ICommunityNewProps {
  isEdit: boolean;
  data?: Pick<IQuery, "fetchFreeBoard">;
}

export interface ICommunityUIProps {
  isEdit: boolean;
  data?: Pick<IQuery, "fetchFreeBoard">;
  editorRef: LegacyRef<Editor>;
  onChangeContents: (editorType: EditorType) => void;
  isAddressOpen: boolean;
  onClickAddressModal: any;
  onCompleteAddressSearch: any;
  handleSubmit: any;
  onClickCreate: any;
  onClickEdit: any;
  register: any;
  formState: any;
  fileUrls: any;
  onChangeFileUrls: any;
  address: string;
  onClickCancel: any;
}
