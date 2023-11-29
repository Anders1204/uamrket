import React from 'react';

const ItemList = ({ items }) => {
 return (
    <div>
      {items.map((item) => (
        <div key={item.id}>
          <h2>{item.title}</h2>
          <p>{item.description}</p>
          <p>Price: {item.price}</p>
        </div>
      ))}
    </div>
 );
};

export default ItemList;