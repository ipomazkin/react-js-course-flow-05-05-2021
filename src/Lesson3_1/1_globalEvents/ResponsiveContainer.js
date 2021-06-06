import React, { Component, PureComponent } from 'react';
import PropTypes from 'prop-types';
import { classComponentLogger, makeClassComponentLogger } from "../../utils/logger";

// Задача - сделать компонент, который будет рендерить десктопную или мобильную версию чего-то
// в зависимости от текущего размера экрана
class ResponsiveContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // присваиваем дефолтное значение состояния
      isMobile: window.innerWidth <= props.mobileBreakpoint,
    };

    this.log = makeClassComponentLogger(this, { level: 2, color: "blue" });

    this.log("constructor");
  }

  static getDerivedStateFromProps(props, state) {
    classComponentLogger.bind({constructor: ResponsiveContainer})("getDerivedStateFromProps", {
      props, state
    }, { level: 2, color: "blue" }, );
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

  handleWindowResize = () => {
    // сам обработчик события ресайза
    this.setState({
      isMobile: window.innerWidth <= this.props.mobileBreakpoint,
    });
    this.log("handleWindowResize");
  };

  render() {
    let {
      desktop,
      mobile,
    } = this.props;

    this.log("render");

    return this.state.isMobile ? mobile : desktop;
  }

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

export default ResponsiveContainer;

ResponsiveContainer.propTypes = {
  desktop: PropTypes.node.isRequired,
  mobile: PropTypes.node.isRequired,
  mobileBreakpoint: PropTypes.number,
};

ResponsiveContainer.defaultProps = {
  mobileBreakpoint: 768,
};
