import { nanoid } from 'nanoid';
import List from './List';
import Form from './Form';
import Loading from '../Loading';
import Error from '../Error';
import useFetch from '../../hooks/useFetch';
import { useState } from 'react';

function Users() {
  const [endpoint, setEndpoint] = useState(
    'https://jsonplaceholder.typicode.com/users'
  );

  const { data, error, loading, setData } = useFetch(endpoint);

  const handleAdd = (username) => {
    setData((prev) => [{ id: nanoid(), username }, ...prev]);
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
      <button onClick={() => setEndpoint('https://dummyjson.com/users')}>
        Change Endpoint
      </button>

      <h2>Users {data.length > 0 && <>({data.length})</>}</h2>
      <List data={data} handleDelete={handleDelete} />
      <Form handleAdd={handleAdd} />
    </div>
  );
}

export default Users;
