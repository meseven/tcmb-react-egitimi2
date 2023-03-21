import React from 'react';
import Item from './Item';

function List({ data }) {
  return (
    <div>
      {data.map((user) => (
        <Item key={user.id} user={user} />
      ))}
    </div>
  );
}

export default List;
