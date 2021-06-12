import React from "react";
import { useWindowSize } from "./useWindowSize";
import "./wr.css";

export function WindowRepresentation() {
  let { width, height, heightToWidth } = useWindowSize(300);

  return (
    <div className="wr">
      <div className="wr__prop" style={{ paddingTop: `${heightToWidth * 100}%` }} />
      <div className="wr__cont">

        <div className="wr__width">{width}px</div>
        <div className="wr__height">{height}px</div>

      </div>
    </div>
  );
}
