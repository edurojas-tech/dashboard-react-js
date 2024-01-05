/* eslint-disable no-unused-vars */
import * as React from 'react';
import Table from '@mui/joy/Table';
import Button from '@mui/material/Button';

function createData(name, calories, fat, carbs, status) {
  return { name, calories, fat, carbs, status };
}

const rows = [
  createData('Frozen yoghurt', 'Editor', 'Enterprise', 'Auto Debit', 'Inactive'),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const stylesCustom = {
  backgroundColor: '#C1F1C6', border: 'none', textTransform: 'lowercase'
}

export default function TableCustom() {
  return (
    <div>
      <Table aria-label="table sizes" size="lg">
        <thead>
          <tr>
            <th style={{ width: '40%' }}>User</th>
            <th>Role</th>
            <th>Plan</th>
            <th>Billing</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.name}>
              <td>{row.name}</td>
              <td>{row.calories}</td>
              <td>{row.fat}</td>
              <td>{row.carbs}</td>
              <td>{
                row.status ==  'Inactive' 
                  ? (<Button disabled>Inactive</Button>)
                  : (<Button sx={stylesCustom} variant="outlined" size="small" color='success'>Active</Button>)
                }</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}