import React from 'react';

import './item-details.css';
import ErrorButton from "../error-button/error-button";

const ItemDetails = (props) => {
  const { item, getImageUrl } = props;
  const image = getImageUrl(item);

  return (
    <div className="person-details card">
      <img className="person-image"
        src={image}
        alt="character"/>

      <div className="card-body">
        <h4>{item.name}</h4>
        <ul className="list-group list-group-flush">
          { 
            React.Children.map(props.children, (child) => {
              return React.cloneElement(child, { item });
            })
          }
        </ul>
        <ErrorButton />
      </div>
    </div>
  )
}

export default ItemDetails;