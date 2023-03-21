import React, { useState } from 'react';

function User() {
  const [data, setData] = useState({
    id: 1,
    username: 'meseven',
    location: 'Yalova',
  });

  const handleClick = () => {
    setData((prev) => ({ ...prev, location: 'Ankara' }));
  };

  return (
    <div>
      <pre className='data'>{JSON.stringify(data, null, 2)}</pre>
      <button onClick={handleClick}>Change Location</button>
    </div>
  );
}

export default User;
