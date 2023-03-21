import React, { useState } from 'react';

function Form({ handleAdd }) {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name) {
      return false;
    }

    handleAdd(name);
    setName('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <br />
      <div>
        <input value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <button>Add</button>
    </form>
  );
}

export default Form;
