import React, { Component, Fragment } from 'react';
import { makeClassComponentLogger, classComponentLogger } from "../../utils/logger";

import { ThemeContext, theme, themeMobile } from "./theme";
import Header from "./Header";

class ExampleRenderer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isShow: false,
      isMobile: false,
    };

    this.log = makeClassComponentLogger(this, { level: 1 });

    this.log("constructor");
  }

  static getDerivedStateFromProps(props, state) {
    classComponentLogger.bind({constructor: ExampleRenderer})("getDerivedStateFromProps", {
      props, state
    }, { level: 1 }, );
    return null;
  }

  shouldComponentUpdate(nextProps, nextState) {
    this.log("shouldComponentUpdate", {
      props: { ...this.props },
      state: { ...this.state },
      nextProps: {...nextProps},
      nextState: {...nextState},
    });

    return true;
  }

  render() {
    this.log("render");

    return (
      <Fragment>
        <ThemeContext.Provider value={this.state.isMobile ? themeMobile : theme}>
          <Header />
        </ThemeContext.Provider>
      </Fragment>
    );
  }

  handleResize = () => {
    this.setState({
      isMobile: window.innerWidth <= 768,
    });
  };

  getSnapshotBeforeUpdate(prevProps, prevState) {
    this.log("getSnapshotBeforeUpdate", {
      props: { ...this.props },
      state: { ...this.state },
      prevProps: {...prevProps},
      prevState: {...prevState},
    });

    return {
      data: "hello from getSnapshotBeforeUpdate"
    }
  }

  componentDidMount() {
    this.log("componentDidMount");
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
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
    this.log("componentWillUnmount");
    window.removeEventListener("resize", this.handleResize);
  }
}

export default ExampleRenderer;

ExampleRenderer.propTypes = {};

ExampleRenderer.defaultProps = {};
