import "@toast-ui/editor/dist/toastui-editor.css";
import { Editor } from "@toast-ui/react-editor";
import colorSyntax from "@toast-ui/editor-plugin-color-syntax";
import { LegacyRef } from "react";
import { EditorType } from "@toast-ui/editor";

interface IToastUIProps {
  onChangeContent: (editorType: EditorType) => void;
  editorRef: LegacyRef<Editor>;
  // initialValue: any;
  defaultValue: any;
  // onChangeContent: any;
  // editorRef: any;
  // initialValue: any;
}

export default function ToastUi(props: IToastUIProps) {
  // useRef

  return (
    <Editor
      onChange={props.onChangeContent}
      previewStyle="vertical" // 미리보기 스타일 지정
      height="400px"
      initialEditType="markdown" // or wysiwyg
      useCommandShortcut={true}
      ref={props.editorRef} // DOM 선택용 useRef
      plugins={[colorSyntax]}
      // initialValue={props.initialValue}
      toolbarItems={[
        // 툴바 옵션 설정
        ["heading", "bold", "italic", "strike"],
        ["hr", "quote"],
        ["ul", "ol", "task", "indent", "outdent"],
        ["table", "image", "link"],
        ["code", "codeblock"],
      ]}
    />
  );
}
