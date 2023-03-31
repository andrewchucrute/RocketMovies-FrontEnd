import { Container, User, Avatar } from './styles';
import { Input } from '../Input'

import { Link } from 'react-router-dom';


export function Header(){ 
  return (
    <Container>
      <Link to='/'>
        RocketMovies
      </Link>
      <Input placeholder='Pesquisar pelo título'></Input>

      <User>
        <div>
            <strong>Andrew Henrique</strong>
            <span>sair</span>
        </div>
        <Avatar to='/profile'>
          <img src="https://github.com/andrewchucrute.png" alt="Foto do usuário" />
        </Avatar>
      </User>

    </Container>
  )
}