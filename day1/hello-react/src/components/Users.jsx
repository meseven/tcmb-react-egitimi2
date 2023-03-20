function Users({ data }) {
  return (
    <div>
      <h1>Users</h1>
      {data.map((user) => (
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  );
}

export default Users;
