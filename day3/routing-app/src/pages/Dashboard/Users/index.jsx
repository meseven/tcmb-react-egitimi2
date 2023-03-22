import Loading from '../../../components/Loading';
import { BASE_ENDPOINT } from '../../../config';
import useFetch from '../../../hooks/useFetch';
import List from './List';

function Users() {
  const { data, loading, error } = useFetch(`${BASE_ENDPOINT}/users`);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <List data={data} />
    </>
  );
}

export default Users;
