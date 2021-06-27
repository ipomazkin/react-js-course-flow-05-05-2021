import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from "react-redux";
import * as SettingsDuck from './reduxDemo/settings.duck';

export function SettingsTest() {
  const items = useSelector(SettingsDuck.selectItems);
  const dispatch = useDispatch();

  const addItem = ({ title }) => {
    dispatch(SettingsDuck.addItem({
      title,
      id: new Date().toString(),
    }));
  };

  const updateItem = (id, values) => {
    dispatch(SettingsDuck.updateItem(id, values));
  };

  const deleteItem = (id) => {
    dispatch(SettingsDuck.removeItem(id));
  };

  return (
    <div className="">
      {items.map(el => (
        <div key={el.id}>
          <h4>{el.title}</h4>
          <button onClick={() => deleteItem(el.id)}>Delete</button>
          <button onClick={() => updateItem(el.id, { title: new Date().toString() })}>Update</button>
        </div>
      ))}
      <div>
        <button onClick={() => addItem({ title: new Date().toString() })}>Add item</button>
      </div>
    </div>
  );
}

SettingsTest.propTypes = {};
