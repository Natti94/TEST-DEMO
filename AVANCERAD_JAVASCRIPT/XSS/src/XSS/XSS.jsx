import { useState } from "react";

function XSS() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setOutput(input);
  };

  return (
    <div>
      <h1>XSS Example</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Input:
          <input type="text" value={input} onChange={handleInputChange} />
        </label>
        <button type="submit">Submit</button>
      </form>
      <div>
        <h2>Output:</h2>
        <div dangerouslySetInnerHTML={{ __html: output }} />
      </div>
    </div>
  );
}

export default XSS;
