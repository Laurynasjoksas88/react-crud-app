import React, { useState } from 'react';

const EditForm = ({ data, handleEdit }) => {
  const [name, setName] = useState(data.name);
  const [group, setGroup] = useState(data.group);
  const [weight, setWeight] = useState(data.weight);
  const [inZoo, setInZoo] = useState(data.inZoo);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleEdit({ name, group, weight, inZoo });
  };

  return (
    <td>
      <form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="text" value={group} onChange={(e) => setGroup(e.target.value)} />
        <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} />
        <label>
          <input type="checkbox" checked={inZoo} onChange={(e) => setInZoo(e.target.checked)} />
          Yra Lietuvos ZOO sode
        </label>
        <button type="submit">Išsaugoti</button>
      </form>
    </td>
  );
};

export default EditForm;