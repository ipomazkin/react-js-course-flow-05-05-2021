import React, { Component } from 'react';
import NewsLoader from "./NewsLoader";
import { makeClassComponentLogger, classComponentLogger } from "../../utils/logger";

class ExampleRenderer extends Component {
  constructor(props) {
    super(props);

    this.state = {
       isShow: false,
    };

    this.log = makeClassComponentLogger(this, { level: 1 });

    this.log("constructor");
  }
  //
  // static getDerivedStateFromProps(props, state) {
  //   classComponentLogger.bind({constructor: ExampleRenderer})("getDerivedStateFromProps", {
  //     props, state
  //   }, { level: 1 }, );
  //   return null;
  // }
  //
  // shouldComponentUpdate(nextProps, nextState) {
  //   this.log("shouldComponentUpdate", {
  //     props: { ...this.props },
  //     state: { ...this.state },
  //     nextProps: {...nextProps},
  //     nextState: {...nextState},
  //   });
  //
  //   return true;
  // }

  render() {
    this.log("render");

    return (
      <div>
        <h1>NewsLoader: </h1>
        <div>
          <button onClick={() => this.setState({ isShow: !this.state.isShow })}>
            {this.state.isShow ? 'Hide' : 'Show'}
          </button>
        </div>
        <div>
          {this.state.isShow && (
            <NewsLoader />
          )}
        </div>
      </div>
    );
  }

  // getSnapshotBeforeUpdate(prevProps, prevState) {
  //   this.log("getSnapshotBeforeUpdate", {
  //     props: { ...this.props },
  //     state: { ...this.state },
  //     prevProps: {...prevProps},
  //     prevState: {...prevState},
  //   });
  //
  //   return {
  //     data: "hello from getSnapshotBeforeUpdate"
  //   }
  // }

  componentDidMount() {
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
  //
  // componentWillUnmount() {
  //   this.log("componentWillUnmount");
  // }
}

export default ExampleRenderer;

ExampleRenderer.propTypes = {};

ExampleRenderer.defaultProps = {};
