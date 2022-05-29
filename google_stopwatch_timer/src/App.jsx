import "./App.css";
import Stopwatch from "./components/Stopwatch";
import Timer from "./components/Timer";
import { useState } from "react";
import { flushSync } from "react-dom";

function App() {
  const [show, setShow] = useState(true);
  const [stopwatch, setStopwatch] = useState(false);

  const HandleTimer = () => {
    setShow(true);
    setStopwatch(false);
  };

  const HandleStopWatch = () => {
    setStopwatch(!stopwatch);
    setShow(false);
  };
  return (
    <div className="App">
      <div className="buttonDiv">
        <div>
          <span className="timerIcon">
            <img
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzNnB4IiBoZWlnaHQ9IjM2cHgiIHZpZXdCb3g9IjAgMCA0OCA0OCIgZmlsbD0iIzAwMDAwMCI+CiAgICA8cGF0aCBkPSJNMTIgNXYxMGw5IDktOSA5djEwaDI0VjMzbC05LTkgOS05VjVIMTJ6bTIwIDI5djVIMTZ2LTVsOC04IDggOHptLTgtMTJsLTgtOFY5aDE2djVsLTggOHoiLz4KICAgIDxwYXRoIGZpbGw9Im5vbmUiIGQ9Ik0wIDBoNDh2NDhIMFYweiIvPgo8L3N2Zz4K"
            />
          </span>
          <button onClick={HandleTimer}>Timer</button>
        </div>

        <div>
          <span className="stopwatchIcon">
            <img
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzNnB4IiBoZWlnaHQ9IjM2cHgiIHZpZXdCb3g9IjAgMCA0OCA0OCIgZmlsbD0iIzAwMDAwMCI+CiAgICA8cGF0aCBkPSJNMCAwaDQ4djQ4SDB6IiBmaWxsPSJub25lIi8+CiAgICA8cGF0aCBkPSJNMzAgMkgxOHY0aDEyVjJ6bS04IDI2aDRWMTZoLTR2MTJ6bTE2LjA1LTEzLjIzbDIuODUtMi44NWMtLjg2LTEuMDMtMS44LTEuOTctMi44My0yLjgzbC0yLjg1IDIuODVDMzIuMTUgOS40OCAyOC4yNCA4IDIzLjk5IDggMTQuMDQgOCA2IDE2LjA2IDYgMjZzOC4wNCAxOCAxNy45OSAxOFM0MiAzNS45NCA0MiAyNmMwLTQuMjUtMS40OC04LjE1LTMuOTUtMTEuMjN6TTI0IDQwYy03LjczIDAtMTQtNi4yNy0xNC0xNHM2LjI3LTE0IDE0LTE0IDE0IDYuMjcgMTQgMTQtNi4yNyAxNC0xNCAxNHoiLz4KPC9zdmc+Cg=="
            />
          </span>
          <button onClick={HandleStopWatch}>Stopwatch</button>
        </div>
      </div>

      <div className="App1">
        {show ? <Timer /> : null}
        {stopwatch ? <Stopwatch /> : null}
      </div>
    </div>
  );
}

export default App;
