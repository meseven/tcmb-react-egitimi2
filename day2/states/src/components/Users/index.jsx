import React, { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import List from './List';
import Form from './Form';

function Users() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((users) => {
        setData(users);
        setLoading(false);
      });
  }, []);

  const handleAdd = (name) => {
    setData((prev) => [{ id: nanoid(), name }, ...prev]);
  };

  const handleDelete = (id) => {
    setData((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div>
      <h2>Users {data.length > 0 && <>({data.length})</>}</h2>

      {loading ? (
        <div>Loading...</div>
      ) : (
        <List data={data} handleDelete={handleDelete} />
      )}
      <Form handleAdd={handleAdd} />
    </div>
  );
}

export default Users;
