import Login from "./components/Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        {/* Add more routes here as needed */}
      </Routes>
    </Router>
  );
}
export default App;
