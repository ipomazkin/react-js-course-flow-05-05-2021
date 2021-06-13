import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
// import NewsForm from "./Lesson3/NewsForm";
import RequestExample from "./Lesson3/RequestExample";

class App extends PureComponent {
  state = {
    title: 'Subtitle',
    items: [1, 2, 3],
    newsId: 1,
  };

  handleClick = () => {
    this.setState({
      title: new Date().toISOString(),
      newsId: this.state.newsId + 1,
    });
  };

  render() {
    console.log('---> App: render');

    return (
      <div className="App">
        <img src={logo} alt=""/>
        <h1 ref={(el) => console.log("App h1: ", el)}>{this.state.title}</h1>
        <RequestExample />
        <button onClick={this.handleClick}>change title</button>
      </div>
    );
  }
}

export default App;

App.propTypes = {};

App.defaultProps = {};

