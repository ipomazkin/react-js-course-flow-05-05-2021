import React, { useState, useEffect } from "react";
import { useLogger } from "../../utils/logger";

import { ThemeContext, theme } from "../2_context_theme/theme";
import { ExampleUseEffectBasic } from "./ExampleUseEffectBasic";
import { ExampleUseEffectCancellable } from "./ExampleUseEffectCancellable";
import { ExampleUseEffectDependencies } from "./ExampleUseEffectDependencies";
import { ExampleUseLayoutEffect } from "./ExampleUseLayoutEffect";
import { ExampleUseContext } from "./ExampleUseContext";
import { ExampleUseRef } from "./ExampleUseRef";
import { ExampleUseMemo } from "./ExampleUseMemo";
import { ExampleUseImperativeHandle } from "./ExampleUseImperativeHandle";
import { MainExample } from "./MainExample";

export function Example() {
  const log = useLogger("Example");
  log("render started");

  const [isShow, setIsShow] = useState(false);
  log("render progress", { isShow });

  useEffect(() => {
    log("useEffect");
  });

  return (
    <ThemeContext.Provider value={theme}>
      <div className="example-renderer">
        <div className="example-renderer__cont">

          <button onClick={() => setIsShow(!isShow)}>{isShow ? "hide" : "show"}</button>

          {isShow && (
            <div>
              {/*<ExampleUseEffectBasic />*/}
              {/*<ExampleUseEffectCancellable />*/}
              {/*<ExampleUseEffectDependencies />*/}
              {/*<ExampleUseLayoutEffect />*/}
              {/*<ExampleUseContext />*/}
              {/*<ExampleUseRef />*/}
              {/*<ExampleUseMemo />*/}
              <ExampleUseImperativeHandle />
              {/*<MainExample />*/}
            </div>
          )}

        </div>
      </div>
    </ThemeContext.Provider>
  );
}
