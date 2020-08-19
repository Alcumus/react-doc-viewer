# al-react-doc-viewer

## Installing

```bash
 npm i git+https://github.com/Alcumus/al-react-doc-viewer.git
 # or
 yarn add git+https://github.com/Alcumus/al-react-doc-viewer.git
```

<br />
<br />

## Current Renderable File Types

| MIME Type             | Available |
| --------------------- | --------- |
| application/pdf       | `✓`       |
| image/png             | `✓`       |
| image/jpg, image/jpeg | `✓`       |

<br />
<br />

## Usage

- **Warning** - _By default the component height will expand and contract to the current loaded file. The width will expand to fill the parent._

### Basic

DocViewer requires at least an array of document objects to function.
Each document object must have a uri to a file, either a url that returns a file or a local file.

```tsx
import DocViewer from "al-react-doc-viewer";

function App() {
  const docs = [
    { uri: "https://url-to-my-pdf.pdf" },
    { uri: require("./example-files/pdf.pdf") }, // Local File
  ];

  return <DocViewer documents={docs} />;
}
```

### Themed

You can provide a theme object with one or all of the available properties.

```xml
<DocViewer
  documents={docs}
  theme={{
    primary: "#5296d8",
    secondary: "#ffffff",
    tertiary: "#5296d899",
    text_primary: "#ffffff",
    text_secondary: "#5296d8",
    text_tertiary: "#00000099",
    disableThemeScrollbar: false,
  }}
/>
```

### Styling

Any styling applied to the `<DocViewer>` component, is directly applied to the main `div` container.

**`//TODO - Add css classes throughout component for full customisability.`**

### Styling - CSS Class

```xml
<DocViewer documents={docs} className="my-doc-viewer-style" />
```

### Styling - React Inline

```xml
<DocViewer documents={docs} style={{width: 500, height: 500}} />
```

### Styling - StyledComponent

```tsx
import styled from "styled-components";
//...
<MyDocViewer documents={docs}/>
//...
const MyDocViewer = styled(DocViewer`
 border-radius: 10px;
`
```

### Config

You can provide a config object, which configures parts of the component as required.

```xml
<DocViewer documents={docs} config={{ disableHeader: false }} />
```

<br />
<br />

## Contributing

### Creating a Renderer Plugin

Create a new folder inside `src/plugins`.

> e.g. `src/plugins/jpg`

Inside this folder, create a Renderer React Typescript file.

> e.g. `JPGRenderer.tsx`

Inside JPGRenderer, export a functional component of type `DocRenderer`

```tsx
import React, { useContext } from "react";
import styled from "styled-components";
import { MainContext } from "../../state/Context";
import { DocRenderer } from "../../types";
import linkRenderResponder from "../../utils/linkRenderResponder";

const JPGRenderer: DocRenderer = () => {
  // Fetch the currentDocument loaded from MainContext state
  const {
    state: { currentDocument },
  } = useContext(MainContext);

  if (!currentDocument) return null;

  return <img src={currentDocument.base64Data} />;
};

export default JPGRenderer;

// List the MIME types that this renderer will respond to
JPGRenderer.fileTypes = ["image/jpg", "image/jpeg"];

// If you have more than one renderer for the same MIME type, use priority. 1 is more preferable.
JPGRenderer.priority = 1;

// Add the renderer to an event listener for 'request-document-renderer' from "alcumus-local-events"
linkRenderResponder(JPGRenderer);
```

##

<br />
<br />

## Setup and Run Demo

`cd demo && npm i && npm run setup-demo`
