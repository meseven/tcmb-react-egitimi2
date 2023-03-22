import { Link, useParams } from 'react-router-dom';
import { BASE_ENDPOINT } from '../../../config';
import useFetch from '../../../hooks/useFetch';

function UserDetail() {
  const { user_id } = useParams();

  const { data, loading, error } = useFetch(
    `${BASE_ENDPOINT}/users/${user_id}`
  );

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const next = Number(user_id) + 1;
  const nextUserId = next === 11 ? 1 : next;

  return (
    <div>
      <pre>{JSON.stringify(data, null, 2)}</pre>

      <Link to={`/users/${nextUserId}`}>
        <button>Next User {nextUserId}</button>
      </Link>
    </div>
  );
}

export default UserDetail;
