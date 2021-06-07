import React, { Component } from 'react';
import PropTypes from "prop-types";
import { classComponentLogger, makeClassComponentLogger } from "../../utils/logger";
import axios from "axios";
import { TextInput, TextInputWithForwardedRef } from "./TextInput";

class UncontrolledForm extends Component {
  constructor(props) {
    super(props);

    this.log = makeClassComponentLogger(this, { level: 2, color: "blue" });

    this.log("constructor");

    this.inputs = {
      title: React.createRef(),
      text: null,
      email: null,
    };

    this.log("inputs: ", {...this.inputs, title: {
      current: this.inputs.title.current,
    }});
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

  handleSubmit = (e) => {
    e.preventDefault();

    let values = {
      title: this.inputs.title.current.value,
      text: this.inputs.text.value,
      email: this.inputs.email.value,
    };

    this.props.handleSubmit(values);
  };

  render() {
    this.log("render");

    let { defaultValues } = this.props,
      defaultTitle = defaultValues ? defaultValues.title : '',
      defaultEmail = defaultValues ? defaultValues.email : '',
      defaultText = defaultValues ? defaultValues.text : '';

    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <h3>Title:</h3>
          <input ref={this.inputs.title} defaultValue={defaultTitle} name="title" type="text"/>
        </div>
        <div>
          <h3>Text:</h3>
          <textarea ref={el => this.inputs.text = el} defaultValue={defaultText} name="text" />
        </div>
        <div>
          <h3>Email:</h3>
          <TextInput inputRef={el => this.inputs.email = el} defaultValue={defaultEmail} name="email" type="email" label="Email" />
          {/*<TextInputWithForwardedRef ref={el => this.inputs.email = el} defaultValue={defaultEmail} name="email" type="email" />*/}
        </div>
        <div>
          <input type="submit"/>
        </div>
      </form>
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

    this.log("componentDidMount, inputs: ", {...this.inputs, title: {
        current: this.inputs.title.current,
      }});
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

export default UncontrolledForm;

UncontrolledForm.propTypes = {
  handleSubmit: PropTypes.func,
  defaultValues: PropTypes.shape({
    title: PropTypes.string,
    text: PropTypes.string,
  }),
};

UncontrolledForm.defaultProps = {
  handleSubmit: console.log,
  defaultValues: null,
};
