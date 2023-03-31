import { Container } from './styles'

import { FiStar } from 'react-icons/fi'
import theme from '../../styles/theme'

import { Tag } from '../Tag'

import { Link } from 'react-router-dom'

export function Review() {
  return (
    <Link to='/moviepreview/29'>
    <Container>
      <h1>
      The Exorcism of God
      </h1>
      <div className="rating">
        <FiStar fill={theme.COLORS.RED}/>
        <FiStar fill={theme.COLORS.RED}/>
        <FiStar fill={theme.COLORS.RED}/>
        <FiStar fill={theme.COLORS.RED}/>
        <FiStar/>
      </div>
      <div className="description">
      Em Exorcismo Sagrado, o padre Peter Williams, um exorcista norte-americano, possuído pelo demônio que tentava expulsar de uma jovem, a força oculta o força, contra sua vontade, a cometer o mais terrível sacrilégio. 
      Dezoito anos depois, tentando manter sua culpa enterrada sob o trabalho de caridade para os pobres e crianças em uma pequena cidade no México, Peter descobre que o demônio voltou. Desta vez possuiu uma jovem chamada Esperanza e, além disso, também desencadeou uma doença mortal entre as crianças da cidade.
      </div>
      <div className='tags'>
        <Tag title='Terror'/>
        <Tag title='Suspense'/>
        <Tag title='Drama'/>
      </div>
      
    </Container>

    <Container>
    <h1>
        Evil Dead
      </h1>
      <div className="rating">
        <FiStar fill={theme.COLORS.RED}/>
        <FiStar fill={theme.COLORS.RED}/>
        <FiStar fill={theme.COLORS.RED}/>
        <FiStar />
        <FiStar/>
      </div>
      <div className="description">
      Na trama, cinco jovens viajam até uma cabana na floresta para o fim de semana. Entre eles, o mais memorável é Ashley, um magérrimo e novinho Bruce Campbell em seu primeiro papel “no cinema”. Assim que chegam no local, o que era para ser um descanso agradável, torna-se um alucinante pesadelo quando encontram o livro dos mortos, e dele leem. Consequentemente, antigos demônios são despertados no local e começam a possuir um a um os amigos.
      </div>
      <div className='tags'>
        <Tag title='Terror'/>
        <Tag title='Suspense'/>
        <Tag title='Drama'/>
      </div>
      
    </Container>


    <Container>
    <h1>
        Invocação do Mal
      </h1>
      <div className="rating">
        <FiStar fill={theme.COLORS.RED}/>
        <FiStar fill={theme.COLORS.RED}/>
        <FiStar fill={theme.COLORS.RED}/>
        <FiStar fill={theme.COLORS.RED}/>
        <FiStar fill={theme.COLORS.RED}/>
      </div>
      <div className="description">
      Harrisville, Estados Unidos. Um casal (Ron Livinston e Lili Taylor) muda para uma casa nova ao lado de suas cinco filhas. Inexplicavelmente, estranhos acontecimentos começam a assustar as crianças, o pai e, principalmente, a mãe. Preocupada com algumas manchas que aparecem em seu corpo e com uma sequência de sustos que levou, ela decide procurar um famoso casal de investigadores paranormais (Patrick Wilson e Vera Farmiga), mas eles não aceitam o convite, acreditando ser somente mais um engano de pessoas apavoradas com canos que fazem barulhos durante a noite ou coisas do gênero. Porém, quando eles aceitam fazer uma visita ao local, descobrem que algo muito poderoso e do mal reside ali. Agora, eles precisam descobrir o que é e o porquê daquilo tudo acontecendo com os membros daquela família. É quando o passado começa a revelar uma entidade demoníaca querendo continuar sua trajetória de maldades.      </div>
      <div className='tags'>
        <Tag title='Terror'/>
        <Tag title='Suspense'/>
        <Tag title='Família'/>
      </div>
      
    </Container>

    </Link>
  )
}