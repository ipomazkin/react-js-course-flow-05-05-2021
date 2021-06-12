import React, { useState, useEffect } from "react";
import { useLogger } from "../../utils/logger";

export function ExampleUseEffectDependencies() {
  const log = useLogger("ExampleUseEffectDependencies",{ level: 2, color: "blue" });
  log("render started");

  const [isShow, setIsShow] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  log("render progress", { isShow, isVisible });

  useEffect(() => {
    log("useEffect 1: run effect once");

    return () => {
      log("useEffect 1: cancel effect");
    };
  }, []);

  useEffect(() => {
    log("useEffect 2: run effect every time");

    return () => {
      log("useEffect 2: cancel effect every time");
    };
  });

  useEffect(() => {
    log("useEffect 3: run effect only if isShow has changed");

    return () => {
      log("useEffect 3: cancel effect only if isShow has changed");
    };
  }, [isShow]);

  return (
    <div style={{ border: "2px solid black", padding: "10px", margin: "10px" }} className="example-renderer">
      <div className="example-renderer__cont">

        <button onClick={() => setIsShow(!isShow)}>{isShow ? "Open" : "Close"}</button>
        <button onClick={() => setIsVisible(!isVisible)}>{isVisible ? "Set visible to false" : "Set visible to true"}</button>

      </div>
    </div>
  );
}
