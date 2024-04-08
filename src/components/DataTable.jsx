import React from 'react';
import DataRow from './DataRow';

const DataTable = ({ data, editData, deleteData }) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Pavadinimas</th>
                    <th>Grupė</th>
                    <th>Svoris</th>
                    <th>Ar gyvena Lietuvos ZOO sode?</th>
                </tr>
            </thead>
            <tbody>
                {data.map((item, index) => (
                    <DataRow key={index} index={index} data={item} editData={editData} deleteData={deleteData} />
                ))}
            </tbody>
        </table>
    );
};

export default DataTable;