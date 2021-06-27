import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import * as SettingsDuck from './reduxDemo/settingsWithHelpers.duck';

export function SettingsWithHelpersTest() {
  const items = useSelector(SettingsDuck.selectItems);
  const dispatch = useDispatch();

  const addItem = ({title}) => {
    dispatch(SettingsDuck.addItem({
      item: {
        title,
        id: new Date().toString(),
      }
    }));
  };

  const updateItem = (id, values) => {
    dispatch(SettingsDuck.updateItem({id, item: values}));
  };

  const deleteItem = (id) => {
    dispatch(SettingsDuck.removeItem({id}));
  };

  return (
    <div className="">
      {items.map(el => (
        <div key={el.id}>
          <h4>{el.title}</h4>
          <button onClick={() => deleteItem(el.id)}>Delete</button>
          <button onClick={() => updateItem(el.id, {title: new Date().toString()})}>Update</button>
        </div>
      ))}
      <div>
        <button onClick={() => addItem({title: new Date().toString()})}>Add item</button>
      </div>
    </div>
  );
}

SettingsWithHelpersTest.propTypes = {};
