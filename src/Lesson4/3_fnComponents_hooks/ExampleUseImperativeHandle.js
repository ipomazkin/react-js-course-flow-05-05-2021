import React, { useRef, useImperativeHandle, useEffect } from "react";
import { useLogger } from "../../utils/logger";

function TextInput({ label, ...rest }, ref) { // перенаправленный реф придет 2 аргументом
  const inputRef = useRef(null); // используем отдельный, внутренний реф для поля

  useImperativeHandle(ref, () => { // настроим, что будет внутри перенаправленного рефа
    return {
      node: inputRef.current,
      focus: () => inputRef.current.focus(),
      blur: () => inputRef.current.blur(),
    };
  });

  return (
    <div className="form__input">
      <label>{label}: <input {...rest} ref={inputRef}/></label>{/* Передадим внутренний реф */}
    </div>
  );
}
TextInput = React.forwardRef(TextInput); // используем перенарпавление рефа

export function ExampleUseImperativeHandle() {
  const log = useLogger("ExampleUseImperativeHandle",{ level: 2, color: "blue" });
  log("render started");

  const inputRef = useRef(null);

  useEffect(() => {
    log("useEffect", { inputRef });
    inputRef.current.focus();
  });

  return (
    <div style={{ border: "2px solid black", padding: "10px", margin: "10px" }} className="example-renderer">
      <div className="example-renderer__cont">

        <form>
          <TextInput label="Text input" ref={inputRef} type="text" />
        </form>

      </div>
    </div>
  );
}
