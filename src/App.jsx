import HomePage from "./components/HomePage";
import LoginPage from "./components/LoginPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import '../public/fonts/style.css';
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
