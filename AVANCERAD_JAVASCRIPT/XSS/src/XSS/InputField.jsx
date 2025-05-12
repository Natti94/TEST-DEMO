import { useState } from "react";
import DOMpurify from "dompurify";

function InputField() {
  const [inputValue, setInputValue] = useState("");
  const [sanitizedValue, setSanitizedValue] = useState("");
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleSanitize = () => {
    const sanitized = DOMpurify.sanitize(inputValue);
    setSanitizedValue(sanitized);
  };

  return (
    <div>
      <h1>Input Field with XSS Protection</h1>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Type something..."
      />
      <button onClick={handleSanitize}>Sanitize Input</button>
      <div>
        <h2>Sanitized Output:</h2>
        <div dangerouslySetInnerHTML={{ __html: sanitizedValue }} />
      </div>
    </div>
  );
}

export default InputField;
