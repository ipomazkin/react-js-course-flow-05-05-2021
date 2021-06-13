import React, { useState, useRef, useEffect, useMemo } from "react";
import { useLogger } from "../../utils/logger";
import { ThemeContext } from "../2_context_theme/theme";

function sleep(duration) {
  const start = new Date().getTime();
  let end = start;

  while(end < start + duration) {
    end = new Date().getTime();
  }
}

function FactorialCalculator(props) {
  const log = useLogger("FactorialCalculator",{ level: 3, color: "green" });
  log("render started");

  const [clicked, setClicked] = useState(0);

  const [factorialBorder, setFactorialBorder] = useState(1);
  const factorial = useMemo(() => {
    log("useMemo started", { factorialBorder });
    let result = 1;
    for (let i = 1; i <= factorialBorder; i++) {
      result *= i;
    }
    sleep(1000);
    log("useMemo finished");
    return result;
  }, [factorialBorder]);
  log("render progress", {
    factorial, factorialBorder,
  });

  return (
    <div>
      <button onClick={() => setClicked(clicked + 1)}>Just click me {clicked + 1} time!</button>
      <button onClick={() => setFactorialBorder(factorialBorder - 1)}>Decrement</button>
      <button onClick={() => setFactorialBorder(factorialBorder + 1)}>Increment</button>
      <div>Factorial of {factorialBorder} is {factorial}</div>
    </div>
  );
}

export function ExampleUseMemo() {
  const log = useLogger("ExampleUseMemo",{ level: 2, color: "blue" });
  log("render started");


  return (
    <div style={{ border: "2px solid black", padding: "10px", margin: "10px" }} className="example-renderer">
      <div className="example-renderer__cont">

        <FactorialCalculator />

      </div>
    </div>
  );
}
