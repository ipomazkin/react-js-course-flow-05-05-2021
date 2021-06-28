import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import * as ExampleDuck from './example.duck';
import * as SettingsDuck from './settings.duck';
import * as SettingsWithHelpersDuck from './settingsWithHelpers.duck';
import produce from "immer";

export function logger(store) { // функция-middleware
  return next => action => {
    console.log('will dispatch', action);
    const returnValue = next(action); // вызовем следующий middleware в цепочке
    console.log('state after dispatch', store.getState());
    return returnValue; // вернем результат вызова предыдущему middleware
  };
}

const middleware = [logger]; // соберем все middleware в массив

const middlewareEnhancer = applyMiddleware(...middleware); // создадим уисилтель для middleware
const composedEnhancers = (
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose // используем compose для применения нескольких усилителей
  // пробуем использовать compose, который есть в redux-devtools, если его не находим - используем дефлтный
)(middlewareEnhancer);

const rootReducer = combineReducers({
  [ExampleDuck.NAMESPACE]: ExampleDuck.reducer,
  [SettingsDuck.NAMESPACE]: SettingsDuck.default,
  [SettingsWithHelpersDuck.NAMESPACE]: SettingsWithHelpersDuck.default,
});

export const store = createStore(rootReducer, undefined, composedEnhancers); // передадим все усилители;

window.store = store;
window.ExampleDuck = ExampleDuck;
window.produce = produce;

// store.subscribe(() => {
//   console.log('----------------- state have been changed', store.getState());
// });
//
// store.dispatch({
//   type: 'test'
// });
