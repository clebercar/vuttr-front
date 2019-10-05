import React from 'react';

import { CategorieList, CategorieItem } from './styles';

export default function Categories() {
  return (
    <CategorieList>
        <CategorieItem>ALL</CategorieItem>
        <CategorieItem>Study</CategorieItem>
        <CategorieItem>Work</CategorieItem>
    </CategorieList>
  );
}
