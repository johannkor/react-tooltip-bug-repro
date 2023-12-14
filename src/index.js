import React from "react";
import ReactDOM from "react-dom";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

const TOOLTIP_ID = "tooltip";

function App() {
  return (
    <div className="App">
      <Tooltip
        disableStyleInjection="core"
        id={TOOLTIP_ID}
        render={({ content }) => <span>{content}</span>}
      />

      <div>
        {Array(50)
          .fill(0)
          .map((_, i) => (
            <div
              key={i}
              data-tooltip-id={TOOLTIP_ID}
              data-tooltip-content={TOOLTIP_ID}
            >
              row {i}
            </div>
          ))}
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
