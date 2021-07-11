import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from "react-redux";
import { fetchPosts } from "./postsByThunk.duck";
import { fetchPosts as fetchPostsBySaga } from "./postsBySaga.duck";
import * as SettingsDuck from "./settings.duck";
import * as PostsDuck from './posts.duck';
import { NumberInput } from "./NumberInput";

export function Posts() {
  const dispatch = useDispatch();
  const isMenuOpen = useSelector(SettingsDuck.selectIsMenuOpen);

  const [amount, setAmount] = useState('1');

  // useEffect(() => {
  //   dispatch(fetchPosts());
  //   dispatch(fetchPostsBySaga());
  // }, []);

  const handleLoad = () => {
    dispatch(PostsDuck.load());
  };

  const toggleMenu = () => {
    dispatch(SettingsDuck.setIsMenuOpen(!isMenuOpen));
  };

  return (
    <div className="">
      <NumberInput value={amount} onChange={setAmount} />
      <button onClick={toggleMenu}>{isMenuOpen ? 'Close menu' : 'Open menu'}</button>
      <button onClick={handleLoad}>Load posts</button>
    </div>
  );
}

Posts.propTypes = {};
