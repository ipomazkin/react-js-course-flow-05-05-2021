import React, { Component, PureComponent } from 'react';
import PropTypes from 'prop-types';

class NewsForm extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      newsID: null,
      title: '',
      description: '',
      imageLink: '',
      errors: {},
      categories: [],
      isMobile: window.innerWidth <= 768,
      width: 100,
    };

    this.dom = {
      descrInput: React.createRef(),
    };

    console.log('---> NewsForm: constructor, newsID', this.props.newsID, {
      dom: this.dom,
    });
  }

  static getDerivedStateFromProps(props, state) {
    if (props.newsID !== state.newsID) {
      console.log('---> NewsForm: getDerivedStateFromProps, newsID', props.newsID);

      return {
        newsID: props.newsID,
        title: props.defaultTitle,
      }
    }

    return null;
  }

  componentDidMount() {
    console.log('---> NewsForm: componentDidMount, newsID', this.props.newsID);
    window.addEventListener('resize', this.handleWindowResize);

    console.log('NewsForm: componentDidMount: ', {
      input: this.input,
      dom: this.dom,
    });

    this.input.dataset.some = 1;
    this.dom.descrInput.current.classList.add("componentDidMount");

    this.setState({
      title: 'from componentDidMount'
    });
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    let bcr = this.input.getBoundingClientRect();
    console.log('---> NewsForm: getSnapshotBeforeUpdate, newsID', this.props.newsID);
    return bcr;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    let currentBcr = this.input.getBoundingClientRect(),
      prevBcr = snapshot;

    if (currentBcr.width !== prevBcr.width) {
      console.log('width changed:', currentBcr.width);
    }

    console.log('---> NewsForm: componentDidUpdate, newsID', this.props.newsID, {
      snapshot
    });
  }

  componentWillUnmount() {
    console.log('---> NewsForm: componentWillUnmount, newsID', this.props.newsID);
    window.removeEventListener('resize', this.handleWindowResize);
  }

  handleWindowResize = () => {
    console.log('---> NewsForm: handleWindowResize, newsID', this.props.newsID);

    this.setState({
      isMobile: window.innerWidth <= 768,
    });
  };

  // shouldComponentUpdate(nextProps, nextState) {
  //   let { props, state } = this;
  //
  //   console.log('---> shouldComponentUpdate', {
  //     nextProps, nextState, props, state
  //   });
  //
  //   return false;
  // }

  handleSubmit = (e) => {
    e.preventDefault();
    let { title, description, imageLink } = this.state;

    console.log('----------------- handleSubmit:', {
      linkValue: this.dom.link.value,
    });
    // do something

    this.props.handleSubmit({
      title,
      description,
      imageLink
    });
  };

  handleChange = (e) => {
    let { target: { name, value } } = e;

    this.setState({
      [name]: value,
      width: this.state.width + 1,
    });
  };

  handleUpdaterMe = () => {
    this.forceUpdate();
  };

  render() {
    console.log('---> NewsForm: render, newsID', this.props.newsID, {
      props: this.props,
      state: this.state,
    });

    let ref = this.props.ref;

    return (
      <form ref={ref} onSubmit={this.handleSubmit}>
        {this.state.isMobile && (
          <h2>Mobile form title</h2>
        )}
        <div>
          <input style={{width: this.state.width + 'px'}} ref={(el) => {
            console.log('----------------- title input ref:', el);
            this.input = el;
          }} type="text" name="title" value={this.state.title} onChange={this.handleChange}/>
          <input ref={this.dom.descrInput} type="text" name="description" value={this.state.description} onChange={this.handleChange}/>
          <input type="text" name="link" ref={el => this.dom.link = el}/>
        </div>
        {this.props.cats.map(el => <button key={el}>{el}</button>)}
        <button style={{
          background: 'red',
          transition: `all ${this.props.animationSpeed}ms`,
        }} type="button" onClick={this.handleUpdaterMe}>Update me</button>
        <input type="submit"/>
      </form>
    );
  }
}

export default NewsForm;

NewsForm.propTypes = {
  newsID: PropTypes.string,
  handleSubmit: PropTypes.func,
  defaultTitle: PropTypes.string,
  animationSpeed: PropTypes.number,
};

NewsForm.defaultProps = {
  newsID: null,
  handleSubmit: console.log,
  defaultTitle: '',
  animationSpeed: 300,
};
