import React, { useState } from 'react';


const Form = ({ addData }) => {
    const [name, setName] = useState('');
    const [group, setGroup] = useState('');
    const [weight, setWeight] = useState('');
    const [inZoo, setInZoo] = useState(false);


    const handleSubmit = (e) => {
        e.preventDefault();
        addData({ name, group, weight, inZoo });
        setName('');
        setGroup('');
        setWeight('');
        setInZoo(false);
      };

      return (
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Pavadinimas" value={name} onChange={(e) => setName(e.target.value)} />
          <input type="text" placeholder="Grupė" value={group} onChange={(e) => setGroup(e.target.value)} />
          <input type="number" placeholder="Svoris" value={weight} onChange={(e) => setWeight(e.target.value)} />
          <label>
            <input type="checkbox" checked={inZoo} onChange={(e) => setInZoo(e.target.checked)} />
            Ar gyvena Lietuvos ZOO sode?
          </label>
          <button type="submit">Pridėti</button>
        </form>
      );
    };
    
    export default Form;