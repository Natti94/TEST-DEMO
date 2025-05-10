import Login from "./components/Login";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>JWT Authentication Example</h1>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          {/* Add more routes here if needed */}
        </Routes>
      </Router>
    </div>
  );
}
export default App;
