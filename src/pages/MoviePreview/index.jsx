import { Container, Body, Main } from './styles'
import theme from '../../styles/theme'

import { FiArrowLeft, FiStar, FiClock } from 'react-icons/fi'

import { Header } from '../../components/Header'
import { ButtonText } from '../../components/ButtonText'
import { TagPreview } from '../../components/TagPreview'
import { Link } from 'react-router-dom'


export function MoviePreview() {
  const avatarUrl = 'https://github.com/andrewchucrute.png'
  return (
    <Container>
      <Header/>
      <Body>
        <Link to='/'>

          <ButtonText title='Voltar' icon={FiArrowLeft}/>
        </Link>
        <Main>
          <div className='movieId'>
            <h1>The Exorcism of God</h1>
            <div className="rating">
              <FiStar fill={theme.COLORS.RED}/>
              <FiStar fill={theme.COLORS.RED}/>
              <FiStar fill={theme.COLORS.RED}/>
              <FiStar fill={theme.COLORS.RED}/>
              <FiStar />
            </div>
          </div>
          <div className='id'>
            <img src={avatarUrl} alt='user avatar'/>
            <span></span>
            <FiClock/>
            <span>31/03/23 às 18:57</span>
          </div>
          <div className='tags'>
            <TagPreview title='Terror'/>
            <TagPreview title='Suspense'/>
            <TagPreview title='Família'/>
          </div>
          <p>
          Em Exorcismo Sagrado, o padre Peter Williams, um exorcista norte-americano, possuído pelo demônio que tentava expulsar de uma jovem, a força oculta o força, contra sua vontade, a cometer o mais terrível sacrilégio. Dezoito anos depois, tentando manter sua culpa enterrada sob o trabalho de caridade para os pobres e crianças em uma pequena cidade no México, Peter descobre que o demônio voltou. Desta vez possuiu uma jovem chamada Esperanza e, além disso, também desencadeou uma doença mortal entre as crianças da cidade. Mas seu verdadeiro propósito é outro: possuir a alma do padre. Para exorcizar Esperanza, Peter deve confessar seu pecado, mas se o fizer, ele se condenará não apenas a um destino de excomunhão, mas também a sacrificar sua fé, seu lar, sua alma e a chance de salvar as pessoas com quem se importa. As consequências de seu pecado voltam para assombrá-lo, desencadeando a maior batalha interior.             <br/>
            <br/>
          </p>
        </Main>
      </Body>
    </Container>
  )
}