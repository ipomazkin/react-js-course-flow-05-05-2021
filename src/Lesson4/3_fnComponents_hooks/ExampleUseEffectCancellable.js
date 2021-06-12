import React, { useState, useEffect } from "react";
import { useLogger } from "../../utils/logger";

export function ExampleUseEffectCancellable() {
  const log = useLogger("ExampleUseEffectCancellable",{ level: 2, color: "blue" });
  log("render started");

  const [isShow, setIsShow] = useState(false);
  log("render progress", { isShow });

  useEffect(() => {
    log("useEffect: run some effect");

    return () => {
      log("useEffect: cancel some effect");
    };
  });

  return (
    <div style={{ border: "2px solid black", padding: "10px", margin: "10px" }} className="example-renderer">
      <div className="example-renderer__cont">

        <button onClick={() => setIsShow(!isShow)}>{isShow ? "Open" : "Close"}</button>

      </div>
    </div>
  );
}
