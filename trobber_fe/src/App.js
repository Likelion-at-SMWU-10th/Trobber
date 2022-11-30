import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import TimerSetting from "./pages/TimerSetting";
import { useEffect } from "react";

function App({ weatherService }) {
  useEffect(() => {
    weatherService.getCurrentWeather();
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        {/* <Route path="/timer" element={<TimerPage />}></Route> */}
        <Route
          path="/setting"
          element={<TimerSetting weatherService={weatherService} />}
        ></Route>
      </Routes>
    </>
  );
}

export default App;
