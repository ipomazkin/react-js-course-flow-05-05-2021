import React, { useState, useEffect } from "react";
import { useLogger } from "../../utils/logger";

import { Form } from "./Form";

export function Example() {
  const log = useLogger("Example");
  log("render started");

  const [isShow, setIsShow] = useState(false);
  log("render progress", { isShow });

  return (
    <div className="example-renderer">
      <div className="example-renderer__cont">

        <button onClick={() => setIsShow(!isShow)}>{isShow ? "hide" : "show"}</button>

        {isShow && (
          <div>
            <Form />
          </div>
        )}

      </div>
    </div>
  );
}
