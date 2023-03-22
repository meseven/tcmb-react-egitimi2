import React from 'react';
import { Link } from 'react-router-dom';

function Item({ user }) {
  return (
    <Link className='item' to={`/users/${user.id}`}>
      {user.name}
    </Link>
  );
}

export default Item;
