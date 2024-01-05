/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import * as React from 'react';
import './style.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function CardCustom(props) {
  return (
    <Card className='boxShadow'>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {props.name}
        </Typography>
        <Typography variant="h5" component="div">
          {props.valueSession}
        </Typography>
        <Typography variant="body2">
          {props.description}
        </Typography>
      </CardContent>
    </Card>
  );
}