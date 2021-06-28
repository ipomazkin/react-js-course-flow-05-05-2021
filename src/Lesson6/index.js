import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from "react-redux";

import { store } from "./reduxDemo";
import ClassComponent from "./ClassComponent";
import { FunctionalComponent } from "./FunctionalComponent";
import { SettingsTest } from "./SettingsTest";
import { SettingsWithHelpersTest } from "./SettingsWithHelpersTest";
import "./HOF";
import { DemoComponent } from "./HOC";

export function App() {
  return (
    <Provider store={store}>
      <div className="app-root">
        <ClassComponent />
        {/*<div><hr/></div>*/}
        {/*<FunctionalComponent />*/}
        {/*<div><hr/></div>*/}
        {/*<SettingsTest />*/}
        {/*<div><hr/></div>*/}
        {/*<SettingsWithHelpersTest />*/}
        {/*<div><hr/></div>*/}
        {/*<DemoComponent />*/}
      </div>
    </Provider>
  );
}

App.propTypes = {};
