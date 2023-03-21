import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import List from './List';

function Users() {
  const [data, setData] = useState([
    {
      id: 1,
      name: 'John Doe',
    },
    {
      id: 2,
      name: 'Jane Doe',
    },
    {
      id: 3,
      name: 'John Smith',
    },
    {
      id: 4,
      name: 'Jane Smith',
    },
  ]);

  const handleAdd = () => {
    // setData([{ id: nanoid(), name: 'Kenan' }, ...data]);
    setData((prev) => [{ id: nanoid(), name: 'Mete' }, ...prev]);
  };

  return (
    <div>
      <h2>Users</h2>

      <List data={data} />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
}

export default Users;
