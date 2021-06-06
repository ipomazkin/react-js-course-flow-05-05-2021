import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { classComponentLogger, makeClassComponentLogger } from "../../utils/logger";

class PostForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      postID: null,
      title: '',
      text: '',
    };

    this.log = makeClassComponentLogger(this, { level: 2, color: "blue" });

    this.log("constructor");
  }

  static getDerivedStateFromProps(props, state) {
    classComponentLogger.bind({constructor: PostForm})("getDerivedStateFromProps", {
      props, state
    }, { level: 2, color: "blue" }, );

    let post = props.editPost ? props.editPost : {
      id: null,
      title: '',
      text: '',
    };

    if (state.postID !== post.id) {
      return {
        postID: post.id,
        title: post.title,
        text: post.text,
      };
    }

    return null;
  }

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

    let oldPost = this.props.editPost || {};

    this.props.handleSubmit({
      ...oldPost,
      title: this.state.title,
      text: this.state.text,
    });

    if (!this.props.editPost) this.reset();
  };

  handleChange = (e) => {
    let { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  reset() {
    this.setState({
      postID: null,
      title: '',
      text: '',
    });
  }

  render() {
    this.log("render");

    let { title, text } = this.state,
      { handleCancel, editPost } = this.props;

    return (
      <form onSubmit={this.handleSubmit}>
        <h2>{editPost ? `Edit post "${editPost.title}"` : "Create post"}</h2>
        <div>
          <h3>Title:</h3>
          <input name="title" onChange={this.handleChange} value={title} type="text"/>
        </div>
        <div>
          <h3>Text:</h3>
          <textarea name="text" onChange={this.handleChange} value={text} />
        </div>
        <div>
          <input type="submit" value={editPost ? "Save" : "Create"}/>
          {editPost && (
            <button onClick={handleCancel}>Cancel</button>
          )}
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

export default PostForm;

PostForm.propTypes = {
  handleCancel: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  editPost: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    text: PropTypes.string,
  }),
};

PostForm.defaultProps = {
  editPost: null,
};
