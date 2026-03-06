import { useRef, useState } from "react";
import styles from "./FileUpload.module.css";
import { Upload, Trash2 } from "lucide-react";

const FileUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const inputRef = useRef();

  const handleOnChange = (event) => {
    const file = event.target.files;

    if (file && file.length > 0) {
      setSelectedFile(file[0]);
    }
  };

  const onChooseFile = () => {
    inputRef.current.click();
  };

  const removeFile = () => {
    setSelectedFile(null);
  };

  return (
    <div>
      <input
        type="file"
        ref={inputRef}
        style={{ display: "none" }}
        onChange={handleOnChange}
      />

      <button className={styles.btn} onClick={onChooseFile}>
        <Upload /> Upload File
      </button>

      {selectedFile && (
        <div className={styles.file}>
          <span>{selectedFile.name}</span>

          <button onClick={removeFile}>
            <Trash2 />
          </button>
        </div>
      )}
    </div>
  );
};

export default FileUpload;
