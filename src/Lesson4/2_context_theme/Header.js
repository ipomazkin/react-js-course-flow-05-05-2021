import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Button from "./Button";

class Header extends PureComponent {
  render() {
    return (
      <header className="header">
        <div className="header__cont">
          <h1 className="header__logo">Logo here</h1>
          <div className="header__burger">
            <Button>toggle</Button>
            <Button>foo</Button>
            <Button>bar</Button>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;

Header.propTypes = {};

Header.defaultProps = {};
