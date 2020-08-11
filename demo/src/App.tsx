import React from "react";
import { DocViewer } from "doc-viewer";

function App() {
  return (
    <DocViewer
      filePaths={[
        "https://file-examples-com.github.io/uploads/2017/10/file-sample_150kB.pdf",
        require("example-files/pdf.pdf"),
      ]}
      // fileType="pdf"
    />
  );
}

export default App;
