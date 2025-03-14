import { Card, Stack } from '@mui/material';
import { blueGrey } from '@mui/material/colors';
import React from 'react';

const SneakeR = ({img, title, price, caption}) => {
  return (
    <Card elevation={5} sx={{
      backgroundColor: blueGrey[500],
      borderRadius: 4
    }}>
      <Stack alignItems={'center'} padding={5}>
        <img className="SneakeR_image" src={img} alt={title} style={{width: 300}} />
        <h2 className="SneakeR-title">{title}</h2>
        <h3 className="SneaheR-price">{price}</h3>
        <p className="SneakeR-caption">{caption}</p>
      </Stack>
    </Card>
  );
}

export default SneakeR;