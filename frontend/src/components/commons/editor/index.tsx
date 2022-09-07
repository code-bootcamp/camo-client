import { useRef } from "react";

// Toast 에디터
import { Editor } from "@toast-ui/editor";
import "@toast-ui/editor/dist/toastui-editor.css";

export default function ToastEditor() {
  // Editor DOM 선택용
  const editorRef = useRef();

  // // 등록 버튼 핸들러
  // const handleRegisterButton = () => {
  //   // 입력창에 입력한 내용을 HTML 태그 형태로 취득
  //   console.log(editorRef.current?.getInstance().getHTML());
  //   // 입력창에 입력한 내용을 MarkDown 형태로 취득
  //   console.log(editorRef.current?.getInstance().getMarkdown());
  // };

  return (
    <Editor
      ref={editorRef} // DOM 선택용 useRef
      placeholder="당신의 이야기를 적어보세요..."
      previewStyle="vertical" // 미리보기 스타일 지정
      height="300px" // 에디터 창 높이
      initialEditType="wysiwyg" // 초기 입력모드 설정(디폴트 markdown)
      language="ko-KR"
      toolbarItems={[
        // 툴바 옵션 설정
        ["heading", "bold", "italic", "strike"],
        ["hr", "quote"],
        ["ul", "ol", "task", "indent", "outdent"],
        ["table", "image", "link"],
        ["code", "codeblock"],
      ]}
      useCommandShortcut={false} // 키보드 입력 컨트롤 방지
    />
  );
}
