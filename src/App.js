import React from 'react';
import Header from './componants/Header';
import Collection from './componants/Collection';
import Search from './componants/Search';
import { Stack } from '@mui/material';

function App() {
  return (
    <Stack paddingX={5}>
      <Header />
      <Search />
      <Collection />
    </Stack>
  );
}

export default App;
