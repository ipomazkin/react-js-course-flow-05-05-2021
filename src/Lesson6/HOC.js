import React, { PureComponent, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export const classHOC = (WrappedComponent) => {
  return class ClassHOC extends PureComponent {
    state = {
      x: 0,
      y: 0,
    };

    componentDidMount() {
      window.addEventListener('mousemove', this.handleMouseMove);
    }

    componentWillUnmount() {
      window.removeEventListener('mousemove', this.handleMouseMove);
    }

    handleMouseMove = (e) => {
      this.setState({
        x: e.clientX,
        y: e.clientY,
      });
    };

    render() {
      let { x, y } = this.state;
      let props = this.props;

      const wrappedComponentProps = {
        ...props,
        x,
        y,
      };

      return (
        <WrappedComponent {...wrappedComponentProps} />
      );
    }
  }
};

export const functionHOC = (WrappedComponent) => {
  return function FunctionHOC(props) {
    const [pos, setPos] = useState({
      x: 0,
      y: 0,
    });

    useEffect(() => {
      const handleMouseMove = (e) => {
        setPos({
          x: e.clientX,
          y: e.clientY,
        });
      };

      window.addEventListener("mousemove", handleMouseMove);

      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
      };
    }, []);

    return (
      <WrappedComponent {...props} x={pos.x} y={pos.y} />
    );
  }
};

class Demo extends PureComponent {
  render() {
    let { x, y } = this.props;

    return (
      <div>
        <div>Demo component</div>
        <div>x: {x}</div>
        <div>y: {y}</div>
      </div>
    );
  }
}

export const DemoComponent = functionHOC(Demo);
