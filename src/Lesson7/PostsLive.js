import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from "react-redux";
import * as PostsDuck from './postsBySagaLive.duck';

export function PostsLive() {
  const dispatch = useDispatch();

  let data = useSelector(PostsDuck.selectData);
  let error = useSelector(PostsDuck.selectError);
  let isLoading = useSelector(PostsDuck.selectIsLoading);
  let isOpen = useSelector(PostsDuck.selectIsOpen);

  useEffect(() => {
    dispatch(PostsDuck.load());
  }, []);

  return (
    <div className="posts">
      <button onClick={() => dispatch(PostsDuck.setIsOpen({ value: !isOpen }))}>{isOpen ? 'close' : 'open'}</button>

      {isLoading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>{error}</div>
      ) : (
        <div>
          {data === null ? (
            <div>There is no posts</div>
          ) : (
            <div>
              {data.map(l => (
                <div key={l.id}>{l.title}</div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

PostsLive.propTypes = {};
