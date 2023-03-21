import React from 'react';

function Item({ user, handleDelete }) {
  return (
    <div className='item'>
      <div className='name'>{user.name}</div>
      <div className='delete_button' onClick={() => handleDelete(user.id)}>
        x
      </div>
    </div>
  );
}

export default Item;
