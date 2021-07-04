import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import debounce from 'debounce';

export function FiltersDemo() {
  const [isNew, setIsNew] = useState(false);
  const [isSale, setIsSale] = useState(false);
  const [isSpecial, setIsSpecial] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchQueryFilter, setSearchQueryFilter] = useState('');

  const items = [
    { id: 1, title: 'Test item 1',  isNew: true,},
    { id: 2, title: 'Test item 1',  isNew: true,},
    { id: 3, title: 'Lorem ipsum',  isSale: true,},
    { id: 4, title: 'Lorem ipsum',  isSale: true,},
    { id: 5, title: 'Hello world',  isSpecial: true,},
    { id: 6, title: 'Hello world',  isSpecial: true,},
    { id: 7, title: 'Hello world',  isSpecial: true,},
  ];

  const setSearchQueryFilterDebounced = debounce(setSearchQueryFilter, 300);

  useEffect(() => {
    setSearchQueryFilterDebounced(searchQuery);
  }, [searchQuery]);

  const filterItems = () => {
    return items.filter((l) => {
      let result = true;

      if (isNew) {
        result = result && l.isNew;
      }

      if (isSale) {
        result = result && l.isSale;
      }

      if (isSpecial) {
        result = result && l.isSpecial;
      }

      if (searchQueryFilter.length) {
        let title = l.title.toLowerCase(),
          search = searchQueryFilter.toLowerCase();
        result = result && (title.indexOf(search) > -1);
      }

      return result;
    });
  };

  let handleChangeSQ = (e) => {
    let { target: { value } } = e;
    setSearchQuery(value);
  };

  return (
    <div className="filters">
      <div>
        <div>
          <input type="text" value={searchQuery} onChange={handleChangeSQ}/>
        </div>
        <label>isNew: <input type="checkbox" checked={isNew} onChange={() => setIsNew(!isNew)}/></label><br/>
        <label>isSale: <input type="checkbox" checked={isSale} onChange={() => setIsSale(!isSale)}/></label><br/>
        <label>isSpecial: <input type="checkbox" checked={isSpecial} onChange={() => setIsSpecial(!isSpecial)}/></label>
      </div>

      <h1>Your query is: {searchQueryFilter}</h1>

      {filterItems().map(l => (
        <div key={l.id}>
          <h1>Item #{l.id}: {l.title}</h1>
        </div>
      ))}
    </div>
  );
}

FiltersDemo.propTypes = {};
