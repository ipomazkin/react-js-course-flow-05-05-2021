import React, { Component, PureComponent } from 'react';
import PropTypes from 'prop-types';
import { classComponentLogger, makeClassComponentLogger } from "../../utils/logger";

import { cats } from "./config";
import Cat from "./Cat";
import SpringCat from "./SpringCat";
import MouseWatcher from "./MouseWatcher";

class HungryCats extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {

    };

    this.log = makeClassComponentLogger(this, { level: 2, color: "blue" });

    this.log("constructor");
  }

  render() {
    this.log("render");

    return (
      <MouseWatcher>{
        ({x, y}) => cats.map(c => (
          <Cat
            key={c.id}
            x={x}
            y={y}
            defaultX={c.startX}
            defaultY={c.startY}
            speed={c.speed}
            delay={c.delay}
          >{c.icon}</Cat>
        ))
      }</MouseWatcher>
    );
  }

  componentDidMount() {
    // после монтирования компонента добавляем обработчик глобального события
    // следим за ресайзом окна
    window.addEventListener("resize", this.handleWindowResize);
    this.log("componentDidMount");
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    this.log("componentDidUpdate", {
      props: { ...this.props },
      state: { ...this.state },
      prevProps: {...prevProps},
      prevState: {...prevState},
      snapshot: snapshot,
    });
  }

  componentWillUnmount() {
    // перед демонтированием компонента удаляем обработчик глобального события
    window.removeEventListener("resize", this.handleWindowResize);
    this.log("componentWillUnmount");
  }
}

export default HungryCats;

HungryCats.propTypes = {

};

HungryCats.defaultProps = {

};
