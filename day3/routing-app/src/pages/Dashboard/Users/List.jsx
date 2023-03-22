import React from 'react';
import Item from './Item';

function List({ data }) {
  return (
    <div className='list'>
      {data.map((user) => (
        <Item user={user} key={user.id} />
      ))}
    </div>
  );
}

export default List;
