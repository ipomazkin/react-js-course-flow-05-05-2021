import React, { Component } from 'react';
import { classComponentLogger, makeClassComponentLogger } from "../../utils/logger";
import axios from "axios";

class NewsLoader extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      error: null,
      data: null,
    };

    this.log = makeClassComponentLogger(this, { level: 2, color: "blue" });

    this.log("constructor");
  }

  // static getDerivedStateFromProps(props, state) {
  //   classComponentLogger.bind({constructor: NewsLoader})("getDerivedStateFromProps", {
  //     props, state
  //   }, { level: 2, color: "blue" }, );
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

  makeRequest() {
    this.log("makeRequest");

    axios.get("https://60bb880442e1d00017620c95.mockapi.io/Comment")
      .then((res) => {
        this.log("makeRequest - response success", {
          res,
        });

        let { status, data } = res;
        let error = status === 200 ? null : `Something went wrong. Error code: ${status}`;

        this.setState({
          error,
          data,
          isLoading: false,
        });
      })
      .catch((error) => {
        this.log("makeRequest - response error", {
          error,
        });

        this.setState({
          error: "Something went wrong",
          data: null,
          isLoading: false,
        });
      });

    this.setState({
      isLoading: true,
    });
  }

  render() {
    this.log("render");

    let { isLoading, data, error } = this.state;

    return (
      <div className="example">
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <div>
            {error !== null ? (
              <div>Error! {error}</div>
            ) : (
              <div>{data && data.map((el) => (
                <div key={el.id}>{el.name}</div>
              ))}</div>
            )}
          </div>
        )}
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
    this.makeRequest();
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
  }
}

export default NewsLoader;

NewsLoader.propTypes = {

};

NewsLoader.defaultProps = {

};
