import React from 'react';
import { 
  Container,
  Form,
  Button
} from 'react-bootstrap';

import api from '../../services/api';
import Header from '../../components/Header';

export default function create() {
  async function handleSubmit(e){
    e.preventDefault()

    const data = {}
    data.title = e.target.title.value
    data.uri = e.target.uri.value
    data.tags = e.target.tags.value
    data.description = e.target.description.value

    const response = await api.post('tools', data);

    if (response.status === 200) {
      console.log('cadastrado');
    }
  }

  return (
    <>
      <Header />
      <Container>
        <h1>Cadastrar Ferramenta</h1>
        <Form onSubmit={(e) => handleSubmit(e)}>
          <Form.Group >
            <Form.Control name="title" type="text" placeholder="Nome da ferramenta" />
          </Form.Group>
          <Form.Group >
            <Form.Control name="uri" type="url" placeholder="Link da ferramenta"/>
          </Form.Group>
          <Form.Group >
            <Form.Control name="tags" type="text" placeholder="Tags" />
          </Form.Group>
          <Form.Group >
            <Form.Control name="description" as="textarea" rows="3"></Form.Control>
          </Form.Group>
            
          <Button variant="outline-primary" type="submit">Cadastrar</Button>
        </Form>
      </Container>
    </>
  );
}
