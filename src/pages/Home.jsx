import React from 'react';
import ListMenu from '../component/ListMenu';
import { Container } from '@mui/material';
import ButtonSubir from '../component/ButtonSubir';
import ButtonDelivery from '../component/ButtonDelivery';
import ModalPrecio from '../component/ModalPrecio';

function Home() {
  return (
    <Container style={{ padding: 0, backgroundColor: '#f7f1e3', minHeight: '100vh' }} disableGutters>
      <ModalPrecio/>
      <ListMenu />
      <ButtonDelivery />
      <ButtonSubir />
    </Container>
  );
}

export default Home;