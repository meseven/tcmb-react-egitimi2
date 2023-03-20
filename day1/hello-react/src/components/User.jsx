import React from 'react';
import { shape, string, number, exact } from 'prop-types';

function User({ data }) {
  return (
    <div>
      <pre>{JSON.stringify(data)}</pre>
    </div>
  );
}

User.propTypes = {
  data: exact({
    name: string,
    id: number,
  }).isRequired,
};

export default User;
