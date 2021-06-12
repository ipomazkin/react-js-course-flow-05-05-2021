import React, { useState, useEffect } from "react";
import { useLogger } from "../../utils/logger";
import { useWindowSize } from "./useWindowSize";
import { useIsMobile } from "./useIsMobile";
import { WindowRepresentation } from "./WindowRepresenter";

export function Example() {
  const log = useLogger("Example");
  log("render started");

  const [isShow, setIsShow] = useState(false);
  log("render progress", { isShow });

  const { width } = useWindowSize(300),
    isMobile = useIsMobile(768, 300);
  log("render progress", { windowWidth: width, isMobile });

  return (
    <div className="example-renderer">
      <div className="example-renderer__cont">

        <button onClick={() => setIsShow(!isShow)}>{isShow ? "hide" : "show"}</button>

        {isShow && (
          <div>
            <WindowRepresentation />
          </div>
        )}

      </div>
    </div>
  );
}
