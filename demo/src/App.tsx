import { DocViewer } from "doc-viewer";
import React from "react";

function App() {
  return (
    <DocViewer
      documents={[
        {
          uri:
            "https://file-examples-com.github.io/uploads/2017/10/file-sample_150kB.pdf",
          fileType: "pdf",
        },
        {
          uri: require("example-files/pdf.pdf"),
          fileType: "pdf",
        },
        {
          uri:
            "https://upload.wikimedia.org/wikipedia/commons/8/82/SARS-CoV-2_without_background.png",
          fileType: "png",
        },
        {
          uri: "https://via.placeholder.com/150",
        },
      ]}
      // config={{
      //   pdf: { paginated: true },
      // }}
    />
  );
}

export default App;
