import React from 'react';

function User({ data: { name, id } }) {
  return (
    <div>
      <h1>
        {name} - {id}
      </h1>
    </div>
  );
}

export default User;
