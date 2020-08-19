import React from "react";
import styled from "styled-components";
import DocViewer from "./doc-viewer";

function App() {
  return (
    <div id="outer-app" style={{ margin: 50 }}>
      <DocumentViewer
        style={{ boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.5)" }}
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
          { uri: "https://dummyimage.com/300" },
          { uri: "https://upload.wikimedia.org/wikipedia/en/a/a9/Example.jpg" },
          {
            uri: require("./example-files/gif.gif"),
          },
        ]}
        theme={{
          primary: "#5296d8",
          secondary: "#ffffff",
          tertiary: "#5296d899",
          text_primary: "#ffffff",
          text_secondary: "#5296d8",
          text_tertiary: "#00000099",
          disableThemeScrollbar: false,
        }}
        config={{
          header: { disableHeader: false, disableFileName: false },
        }}
      />
    </div>
  );
}

export default App;

const DocumentViewer = styled(DocViewer)`
  border-radius: 5px;
`;
