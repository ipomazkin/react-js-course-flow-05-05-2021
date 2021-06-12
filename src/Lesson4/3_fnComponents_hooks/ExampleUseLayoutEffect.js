import React, { useState, useEffect, useLayoutEffect } from "react";
import { useLogger } from "../../utils/logger";

function sleep(duration) {
  const start = new Date().getTime();
  let end = start;

  while(end < start + duration) {
    end = new Date().getTime();
  }
}

export function ExampleUseLayoutEffect() {
  const log = useLogger("ExampleUseLayoutEffect",{ level: 2, color: "blue" });
  log("render started");

  const [isShow, setIsShow] = useState(false);
  log("render progress", { isShow });

  useEffect(() => {
    log("useEffect: started");
    sleep(2000);
    log("useEffect: finished");
  });

  useLayoutEffect(() => {
    log("useLayoutEffect: started");
    sleep(2000);
    log("useLayoutEffect: finished");
  });

  return (
    <div style={{ border: "2px solid black", padding: "10px", margin: "10px" }} className="example-renderer">
      <div className="example-renderer__cont">

        <button onClick={() => setIsShow(!isShow)}>{isShow ? "Open" : "Close"}</button>

      </div>
    </div>
  );
}
