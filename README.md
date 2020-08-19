# al-react-doc-viewer

## Installing

```bash
 npm i git+https://github.com/Alcumus/al-react-doc-viewer.git
 # or
 yarn add git+https://github.com/Alcumus/al-react-doc-viewer.git
```

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

`//TODO - Add css classes throughout component for full customisability.`

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

## Contributing

##

##

##

##

## Setup and Run Demo

`cd demo && npm i && npm run setup-demo`
