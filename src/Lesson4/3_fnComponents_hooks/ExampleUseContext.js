import React, { useState, useContext } from "react";
import { useLogger } from "../../utils/logger";
import { ThemeContext } from "../2_context_theme/theme";

export function ExampleUseContext() {
  const log = useLogger("ExampleUseContext",{ level: 2, color: "blue" });
  log("render started");

  const [isShow, setIsShow] = useState(false);
  log("render progress", { isShow });

  const theme = useContext(ThemeContext);
  log("theme context", { theme });

  return (
    <div style={{ border: "2px solid black", padding: "10px", margin: "10px" }} className="example-renderer">
      <div className="example-renderer__cont">

        <button style={{
          padding: `${theme.padding.small}px`,
          margin: `${theme.padding.small}px`,
        }} onClick={() => setIsShow(!isShow)}>{isShow ? "Open" : "Close"}</button>

      </div>
    </div>
  );
}
