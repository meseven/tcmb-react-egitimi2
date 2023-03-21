import React, { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import List from './List';
import Form from './Form';
import axios from 'axios';
import Loading from '../Loading';
import Error from '../Error';
import useFetch from '../../hooks/useFetch';

function Users() {
  const { data, error, loading } = useFetch(
    'https://jsonplaceholder.typicode.com/users'
  );

  const handleAdd = (name) => {
    setData((prev) => [{ id: nanoid(), name }, ...prev]);
  };

  const handleDelete = (id) => {
    setData((prev) => prev.filter((item) => item.id !== id));
  };

  if (loading) {
    return <Loading text='Yükleniyor...' />;
  }

  if (error) {
    return <Error message={error} />;
  }

  return (
    <div>
      <h2>Users {data.length > 0 && <>({data.length})</>}</h2>
      <List data={data} handleDelete={handleDelete} />
      <Form handleAdd={handleAdd} />
    </div>
  );
}

export default Users;
