import React, { Component } from 'react';
import { classComponentLogger, makeClassComponentLogger } from "../../utils/logger";
import PostForm from "./PostForm";

class Posts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editPostID: null,
      posts: [
        { id: 1, title: "Lorem Ipsum 1", text: "Cras ultricies ligula sed magna dictum porta. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Sed porttitor lectus nibh. Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
        { id: 2, title: "Lorem Ipsum 2", text: "Cras ultricies ligula sed magna dictum porta. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Sed porttitor lectus nibh. Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
        { id: 3, title: "Lorem Ipsum 3", text: "Cras ultricies ligula sed magna dictum porta. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Sed porttitor lectus nibh. Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
      ],
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

  handleEditPost = (id) => {
    this.setState({
      editPostID: id,
    });
  };

  handleSubmitPost = (post) => {
    let postIndex = this.state.posts.findIndex(el => el.id === post.id),
      nextPosts = [...this.state.posts];

    if (postIndex > -1) {
      nextPosts[postIndex] = {
        ...nextPosts[postIndex],
        ...post,
      };
    } else {
      nextPosts.push({
        ...post,
        id: nextPosts.length + 1,
      });
    }

    this.setState({
      posts: nextPosts,
      editPostID: null,
    });
  };

  render() {
    this.log("render");

    let { editPostID, posts } = this.state;

    return (
      <div className="example">
        <div>
          <PostForm
            editPost={posts.find(el => el.id === editPostID)}
            handleCancel={() => this.handleEditPost(null)}
            handleSubmit={this.handleSubmitPost}
          />
        </div>
       <div>
         {[...posts].reverse().map(post => (
           <div key={post.id}>
             <h2>{post.title}</h2>
             <p>{post.text}</p>
             <div>
               <button onClick={() => this.handleEditPost(post.id)}>Edit</button>
             </div>
           </div>
         ))}
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

  componentWillUnmount() {
    this.log("componentWillUnmount");
  }
}

export default Posts;

Posts.propTypes = {

};

Posts.defaultProps = {

};
