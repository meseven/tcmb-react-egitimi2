import React from 'react';
import Message from '../Message';
import Item from './Item';

function List({ data, handleDelete }) {
  if (data.length < 1) {
    return <Message text='No record.' />;
  }

  return (
    <div className='list'>
      {data.map((user) => (
        <Item key={user.id} user={user} handleDelete={handleDelete} />
      ))}
    </div>
  );
}

export default List;
