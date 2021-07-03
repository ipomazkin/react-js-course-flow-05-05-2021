import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from "react-redux";
import { fetchPosts } from "./postsByThunk.duck";
import { fetchPosts as fetchPostsBySaga } from "./postsBySaga.duck";
import * as SettingsDuck from "./settings.duck";

export function Posts() {
  const dispatch = useDispatch();
  const isMenuOpen = useSelector(SettingsDuck.selectIsMenuOpen);

  useEffect(() => {
    dispatch(fetchPosts());
    dispatch(fetchPostsBySaga());
  }, []);

  const toggleMenu = () => {
    dispatch(SettingsDuck.setIsMenuOpen(!isMenuOpen));
  };

  return (
    <div className="">
      <button onClick={toggleMenu}>{isMenuOpen ? 'Close menu' : 'Open menu'}</button>
    </div>
  );
}

Posts.propTypes = {};
