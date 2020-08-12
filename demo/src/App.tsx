import { DocViewer } from "doc-viewer";
import React from "react";

function App() {
  return (
    <DocViewer
      filePaths={[
        "https://upload.wikimedia.org/wikipedia/commons/8/82/SARS-CoV-2_without_background.png",
        "https://file-examples-com.github.io/uploads/2017/10/file-sample_150kB.pdf",
        require("example-files/pdf.pdf"),
      ]}
      // config={{
      //   pdf: { paginated: true },
      // }}
    />
  );
}

export default App;
