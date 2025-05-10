import Login from "./components/Login/Login";
import Protected from "./components/Protected/Protected";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/protected" element={<Protected />} />
        </Routes>
      </BrowserRouter>
  );
}
export default App;
