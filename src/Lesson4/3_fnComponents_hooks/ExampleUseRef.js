import React, { useState, useRef, useEffect } from "react";
import { useLogger } from "../../utils/logger";
import { ThemeContext } from "../2_context_theme/theme";

function CountdownWrong({ seconds = 10 }) {
  const log = useLogger("CountdownWrong",{ level: 3, color: "green" });
  log("render started");

  const timerIntervalRef = useRef(null);
  const [remain, setRemain] = useState(seconds);
  log("render progress", { timerIntervalRef, remain });

  useEffect(() => {
    log("useEffect");
    timerIntervalRef.current = setInterval(() => {
      log("useEffect: interval's callback called", {
        nextRemain: remain - 1,
      });
      setRemain(remain - 1);
    }, 1000);

    return () => {
      log("useEffect: cancel");
      clearInterval(timerIntervalRef.current);
    };
  }, [seconds]);

  useEffect(() => {
    if (remain === 0) clearInterval(timerIntervalRef.current);
  }, [remain]);

  return (
    <span>Remain {remain} seconds of {seconds}</span>
  );
}

function CountdownCorrect({ seconds = 10 }) {
  const log = useLogger("CountdownCorrect",{ level: 3, color: "green" });
  log("render started");

  const timerIntervalRef = useRef(null);
  const [remain, setRemain] = useState(seconds);
  const remainRef = useRef(remain),
    setRemainRef = useRef(setRemain);
  log("render progress", { timerIntervalRef, remain, remainRef, setRemainRef });

  useEffect(() => {
    if (remain === 0) clearInterval(timerIntervalRef.current);
    remainRef.current = remain;
    setRemainRef.current = setRemain;
  }, [setRemain, remain]);

  useEffect(() => {
    log("useEffect");
    timerIntervalRef.current = setInterval(() => {
      log("useEffect: interval's callback called", {
        nextRemain: remainRef.current - 1,
      });
      setRemainRef.current(remainRef.current - 1);
    }, 1000);

    return () => {
      log("useEffect: cancel");
      clearInterval(timerIntervalRef.current);
    };
  }, [seconds]);

  return (
    <span>Remain {remain} seconds of {seconds}</span>
  );
}

export function ExampleUseRef() {
  const log = useLogger("ExampleUseRef",{ level: 2, color: "blue" });
  log("render started");

  return (
    <div style={{ border: "2px solid black", padding: "10px", margin: "10px" }} className="example-renderer">
      <div className="example-renderer__cont">

        <CountdownWrong seconds={10} />
        {/*<CountdownCorrect seconds={10} />*/}

      </div>
    </div>
  );
}
