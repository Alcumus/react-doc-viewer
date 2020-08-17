import React from "react";
import { DocViewer } from "./doc-viewer";

function App() {
  return (
    <DocViewer
      documents={[
        {
          uri:
            "https://file-examples-com.github.io/uploads/2017/10/file-sample_150kB.pdf",
        },
        { uri: require("./example-files/pdf.pdf") },
        {
          uri:
            "https://upload.wikimedia.org/wikipedia/commons/8/82/SARS-CoV-2_without_background.png",
        },
        { uri: "https://upload.wikimedia.org/wikipedia/en/a/a9/Example.jpg" },
        { uri: "https://dummyimage.com/300" },
      ]}
      // config={{
      //   pdf: { paginated: true },
      // }}
    />
  );
}

export default App;
