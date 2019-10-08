import React from 'react';
import { Container } from 'react-bootstrap';

import Tools from '../../components/Tools';
import Categories from '../../components/Categories';
import Header from '../../components/Header';

export default function List() {
  return (
    <>
        <Header />
        <Container>
            <Categories />
            <Tools />
        </Container>
    </>
  );
}
