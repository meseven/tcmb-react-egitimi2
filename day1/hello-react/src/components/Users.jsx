import { array, arrayOf, exact, func, number, string } from 'prop-types';

function Users({ data, handleClick }) {
  return (
    <div>
      <h1>Users</h1>
      {data.map((user) => (
        <div key={user.id}>{user.name}</div>
      ))}

      <button onClick={handleClick}>Click</button>
    </div>
  );
}

Users.propTypes = {
  data: arrayOf(
    exact({
      id: number,
      name: string,
    })
  ),
  handleClick: func,
};

export default Users;
