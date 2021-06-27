import React from 'react';
import PropTypes from 'prop-types';
import * as ExampleDuck from "./reduxDemo/example.duck";
import { useSelector, useDispatch } from "react-redux";

export function FunctionalComponent() {
  const dispatch = useDispatch(); // получим ссылку на метод dispatch объекта store
  const isMenuOpened = useSelector(ExampleDuck.selectIsMenuOpen); // вытащим данные из стора
  const setMenuIsOpen = (value) => dispatch(ExampleDuck.setMenuIsOpen(value)); // сгенерируем функции для действий

  return (
    <div className="some-fn-component">
      <button onClick={() => setMenuIsOpen(!isMenuOpened)}>{isMenuOpened ? 'Hide menu' : 'Open menu'}</button>
    </div>
  );
}

FunctionalComponent.propTypes = {};
