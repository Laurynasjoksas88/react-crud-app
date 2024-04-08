import React, { useState } from 'react';
import EditForm from './EditForm';

const DataRow = ({ index, data, editData, deleteData }) => {
    const [isEditing, setIsEditing] = useState(false);
  
    const handleEdit = (newData) => {
      editData(index, newData);
      setIsEditing(false);
    };

    return (
        <tr>
          <td>{data.name}</td>
          <td>{data.group}</td>
          <td>{data.weight}</td>
          <td>{data.inZoo ? 'Taip' : 'Ne'}</td>
          <td>
            <button onClick={() => setIsEditing(true)}>Pakeisti</button>
            <button onClick={() => deleteData(index)}>Ištrinti</button>
          </td>
          {isEditing && <EditForm data={data} handleEdit={handleEdit} />}
        </tr>
      );
    };
    
    export default DataRow;