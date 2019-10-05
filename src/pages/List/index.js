import React from 'react';

import { 
    Container, 
    Navbar, 
    Button, 
    SearchInput,
    InputIcon,
} from './styles';

import Tools from '../../components/Tools';
import Categories from '../../components/Categories';

import { MdAdd, MdSearch } from "react-icons/md";

export default function List() {
  return (
    <Container>
        <Navbar>
            <form>
                <InputIcon>
                    <MdSearch/>
                    <SearchInput type="text" placeholder="Search"/>
                </InputIcon>
            </form>
            <Button type="submit">
                <MdAdd /> add
            </Button>
        </Navbar>

        <Categories />
        <Tools />
    </Container>
  );
}
