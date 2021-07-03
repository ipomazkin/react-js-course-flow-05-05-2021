import { createStore as _createStore, combineReducers, applyMiddleware, compose } from "redux";
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';
import thunk from 'redux-thunk';
import * as SettingsDuck from './settings.duck';
import * as Posts1Duck from './postsBySaga.duck';
import * as Posts2Duck from './postsByThunk.duck';

// grab all ducks together
const ducks = [
  SettingsDuck,
  Posts1Duck,
  Posts2Duck,
];

// grab all reducers together
const reducers = {};
ducks.forEach(d => reducers[d.NAMESPACE] = d.default);

// grab all sagas together
const sagas = [];
ducks.forEach(d => {
  if (d.saga) sagas.push(d.saga);
});

// create store function
export function createStore() {
  let sagaMiddleware = createSagaMiddleware();
  let middleware = [thunk, sagaMiddleware];

  const middlewareEnhancer = applyMiddleware(...middleware);
  const composedEnhancers = (
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  )(middlewareEnhancer);

  const store = _createStore(combineReducers(reducers), undefined, composedEnhancers);

  sagaMiddleware.run(function* () {
    yield all(sagas.map(s => s()));
  });

  return store;
}

// create the store
export const store = createStore();
