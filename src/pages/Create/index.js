import React from 'react';

// import { Container } from './styles';

export default function create() {
  return (
    <div>
        <form>
            <input type="text" placeholder="Nome da ferramenta" />
            <input type="url" placeholder="Link da ferramenta"/>
            <input type="text" placeholder="Tags" />
            <textarea rows="4" cols="50"></textarea>
            <button type="submit">Cadastrar</button>
        </form>
    </div>
  );
}
