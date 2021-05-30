import React from 'react'
import PropTypes from 'prop-types'

import "./ExampleRenderer.css";

export const ExampleRenderer = ({ title, children }) => {
  let isSingle = !(children instanceof Array);

  const renderComponentTitle = (item, prefix = title) => {
    let name = "";

    if (typeof item.type !== "string") {
      name = item.type.name;
    } else {
      name = item.type;
    }

    return [prefix, name].filter(el => !!el).join(', ');
  };

  const renderComponentItem = (item) => {
    return (
      <div className="example-renderer__el">
        <h3 className="example-renderer__el-title">{renderComponentTitle(item, title)}</h3>
        <div className="example-renderer__el-content">{item}</div>
      </div>
    );
  };

  return (
    <div className="example-renderer">
      <h2 className="example-renderer__title">
        {title}
      </h2>
      <div className="example-renderer__example">
        {isSingle ? renderComponentItem(children) : children.map(el => renderComponentItem(el))}
      </div>
    </div>
  );
};

ExampleRenderer.propTypes = {

};

ExampleRenderer.defaultProps = {

};

