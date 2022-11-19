import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import TimerPage from "./pages/TimerPage";
import TimerSetting from "./pages/TimerSetting";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/timer" element={<TimerPage />}></Route>
        <Route path="/setting" element={<TimerSetting />}></Route>
      </Routes>
    </>
  );
}

export default App;
