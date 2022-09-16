import { EditorType } from "@toast-ui/editor";
import { Editor } from "@toast-ui/react-editor";
import { LegacyRef } from "react";
import { IBoard } from "../../../../commons/types/generated/types";

export interface ICommunityNewProps {
  isEdit: boolean;
  el: IBoard;
  editData?: {
    fetchBoard: {
      title: string;
      contents: string;
      images: any;
      tags: any;
    };
  };
}

export interface ICommunityUIProps {
  isEdit: boolean;
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
