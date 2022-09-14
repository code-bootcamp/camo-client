import { EditorType } from "@toast-ui/editor";
import { Editor } from "@toast-ui/react-editor";
import { LegacyRef } from "react";

export interface ICommunityUIProps {
  editorRef: LegacyRef<Editor>;
  onChangeContent: (editorType: EditorType) => void;
  isAddressOpen: boolean;
  onClickAddressModal: any;
  onCompleteAddressSearch: any;
  handleSubmit: any;
  onClickCreate: any;
  register: any;
  editData?: {
    fetchBoard: {
      title: string;
      contents: string;
      images: any;
      tags: any;
    };
  };
  fileUrls: any;
  onChangeFileUrls: any;
  address: string;
  onClickCancel: any;
}
