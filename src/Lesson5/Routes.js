import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from "react-router";

import { HomePage } from "./pages/HomePage";
import { NewsPage } from "./pages/NewsPage";
import { NewsListPage } from "./pages/NewsListPage";

export function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/news" exact component={NewsPage} />
      <Route path="/news/:id" exact component={NewsListPage} />
      <Route path="*" render={() => "404 page"} />
    </Switch>
  );
}

Routes.propTypes = {};
