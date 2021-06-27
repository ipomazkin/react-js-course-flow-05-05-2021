import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { selectIsMenuOpen, setMenuIsOpen } from "./reduxDemo/example.duck";

const mapStateToProps = (state) => ({
  isMenuOpened: selectIsMenuOpen(state), // вытащим данные из state
});

const mapDispatchToProps = (dispatch) => ({
  setMenuIsOpen: (value) => dispatch(setMenuIsOpen(value)), // сгенерируем функции для действий
});

// const mapDispatchToProps = (dispatch) => bindActionCreators({
//   setMenuIsOpen
// }, dispatch);

class ClassComponent extends PureComponent {
  render() {
    let { setMenuIsOpen, isMenuOpened } = this.props;

    return (
      <div className="some-class-component">
        <button onClick={() => setMenuIsOpen(!isMenuOpened)}>{isMenuOpened ? 'Hide menu' : 'Open menu'}</button>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ClassComponent); // обернем наш компонент в HOC

ClassComponent.propTypes = {};

ClassComponent.defaultProps = {};
