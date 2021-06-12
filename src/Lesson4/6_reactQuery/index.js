import React, { useState, useEffect } from "react";
import { useLogger } from "../../utils/logger";
import { QueryClientProvider } from "react-query";

import { RepoInfo } from "./RepoInfo";
import { client } from "./queryClient";

export function Example() {
  const log = useLogger("Example");
  log("render started");

  const [isShow, setIsShow] = useState(false);
  log("render progress", { isShow });

  return (
    <QueryClientProvider client={client}>
      <div className="example-renderer">
        <div className="example-renderer__cont">

          <button onClick={() => setIsShow(!isShow)}>{isShow ? "hide" : "show"}</button>

          {isShow && (
            <div>
              <RepoInfo />
            </div>
          )}

        </div>
      </div>
    </QueryClientProvider>
  );
}
