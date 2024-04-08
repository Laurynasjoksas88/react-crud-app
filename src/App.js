import React, { useState, useEffect } from 'react';
import Form from './components/Form';
import DataTable from './components/DataTable';

const App = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem('data'));
        if (storedData) setData(storedData);
      }, []);

      useEffect(() => {
        localStorage.setItem('data', JSON.stringify(data));
      }, [data]);

      const addData = (newData) => {
        setData([...data, newData]);
      };

      const editData = (index, newData) => {
        const updatedData = [...data];
        updatedData[index] = newData;
        setData(updatedData);
      };

      const deleteData = (index) => {
        const updatedData = [...data];
        updatedData.splice(index, 1);
        setData(updatedData);
      };

      return (
        <div>
          <h1>Prašome nežymėti, jog žmogus gyvena ZOO sode :)</h1>
          <Form addData={addData} />
          <DataTable data={data} editData={editData} deleteData={deleteData} />
        </div>
      );
    };


export default App;
