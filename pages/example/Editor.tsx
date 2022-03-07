import dynamic from "next/dynamic";
import React, { useState, useMemo } from "react";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";

const Editor = () => {
  const [contents, setContents] = useState("");

  const imageHandler = () => {
    const input = document.createElement("input");

    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.click();
  };

  const modules = useMemo(
    () => ({
      toolbar: {
        container: [
          ["bold", "italic", "underline", "strike"], // toggled buttons
          [{ size: ["small", false, "large", "huge"] }], // custom dropdown
          [{ header: [1, 2, 3, 4, 5, 6, false] }],
          [{ font: [] }],
          [{ align: [] }],
          [{ color: [] }, { background: [] }], // dropdown with defaults from theme
          [{ header: 1 }, { header: 2 }], // custom button values
          [{ list: "ordered" }, { list: "bullet" }],
          [{ script: "sub" }, { script: "super" }], // superscript/subscript
          [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
          [{ direction: "rtl" }], // text direction
          ["clean"], // remove formatting button
          ["blockquote", "link", "code-block", "formula", "image", "video"], // media
        ],
        handlers: {
          image: imageHandler,
        },
      },
    }),
    []
  );

  return (
    <div>
      <ReactQuill
        id="editor"
        value={contents}
        onChange={setContents}
        modules={modules}
        theme="bubble"
        placeholder="내용을 입력해주세요."
      />
      {contents}
    </div>
  );
};

export default Editor;
