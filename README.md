# File Upload

This is a clean, functional React component for handling single-file selection. It uses a hidden file input pattern to provide a better user experience, allowing you to trigger the file browser using a custom-styled button.

## 🚀 Features

- **Custom UI:** Triggers the native browser file picker via a hidden `input` element using `useRef`.
- **State Management:** Tracks the selected file name and displays it dynamically.
- **Removability:** Allows users to "unselect" or remove the file before processing.
- **Icon Support:** Integrated with `lucide-react` for a modern look.

## 🛠️ Component Architecture

The component follows a simple data flow:

1. **Trigger:** User clicks the visible "Upload File" button.
2. **Reference:** `inputRef` invokes the `.click()` method on the hidden native file input.
3. **Selection:** The `handleOnChange` function captures the file and stores it in the `selectedFile` state.
4. **Display:** If a file exists, the component renders the file name and a delete action.

## 📦 Usage

Simply import the component into your desired view:

```javascript
import FileUpload from "./components/FileUpload";

function App() {
  return (
    <div className="App">
      <h1>Submit Your Documents</h1>
      <FileUpload />
    </div>
  );
}
```
