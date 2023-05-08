import HamburguerIcon  from '../../assets/home.png';
import { OpenMenu } from '../contexts/OpenMenu';
import { useContext } from 'react';
import InscreveIcon from '../../assets/inscrever.png';
import Shorts from '../../assets/shorts.png';
import Historico from '../../assets/historico.png';
import Biblioteca from '../../assets/biblioteca.png';
import BLogin from '../../assets/login.png';
import Shopping from '../../assets/shopping.png';
import Musica from '../../assets/musica.png';
import Filme from '../../assets/filmes.png';
import AoVivo from '../../assets/aovivo.png';
import Jogos from '../../assets/jogos.png';
import Noticias from '../../assets/noticia.png';
import Esportes from '../../assets/esporte.png';
import Aprender from '../../assets/aprender.png';
import Chama from '../../assets/chama.png';
import Adicionar from '../../assets/adicionar.png'


import {  
  ContainerM, 
  ButtonIcon,
  Divisoria,
  Explore,
  Login,
  MenuNome,
  MenuItens,
  MenuExplore,
  Container_Context,
  ButtonImage,
  MenuYT,
  ButtonSpan,
  
} from "./style";

let name = [
  {nome: 'Inicio',icon: HamburguerIcon},
  {nome: 'Shorts', icon: Shorts },
  {nome: 'Incrição', icon: InscreveIcon},
  
]

let item =[
  {nome: 'Biblioteca',icon: Biblioteca},
  {nome: 'Historico', icon: Historico },
  
]

let explorar = [
  {nome: 'Em alta',icon: Chama},
  {nome: 'Shopping', icon: Shopping },
  {nome: 'Música', icon: Musica},
  {nome: 'Filmes e Programas', icon: Filme},
  {nome: 'Ao vivo',icon: AoVivo},
  {nome: 'Jogos', icon: Jogos },
  {nome: 'Notícias', icon: Noticias},
  {nome: 'Esportes', icon: Esportes},
  {nome: 'Aprender', icon: Aprender},
]

function Menu({ openMenu } = useContext(OpenMenu)) {
  return(
    <Container_Context openMenu = {openMenu}>
      <ContainerM openMenu = {openMenu}>
        {name.map((item) => (
          <MenuNome openMenu = { openMenu }  >
            <ButtonIcon alt='' src={ item.icon } />
            <span>{item.nome}</span>
          </MenuNome>
        ))}   

        <Divisoria openMenu = { openMenu }></Divisoria>
          
        {item.map((item) => (
          <MenuItens openMenu = { openMenu }  >
            <ButtonIcon alt='' src={ item.icon } />
            <span>{item.nome}</span>
          </MenuItens>
        ))}

        <Divisoria openMenu ={openMenu} />

        <Login openMenu ={openMenu}>
          <p>Faça o login para curtir vídeos, comentar e se inscrever.</p>
          <button>
            <ButtonImage alt='' src={ BLogin } /> 
            Fazer login
          </button>
        </Login>

        <Divisoria openMenu ={openMenu} />

        <Explore openMenu ={openMenu} >Explorar</Explore>

        {explorar.map((item) => (
          <MenuExplore openMenu = { openMenu }  >
            <ButtonIcon alt='' src={ item.icon } />
            <span>{item.nome}</span>
          </MenuExplore>
        ))}

        <Divisoria openMenu = { openMenu }></Divisoria>

        <Login style={{ padding: '10px' }} openMenu ={openMenu}>
          <button  style={{ width: '100%', height: '30px', justifyContent: 'flex-start' }}>
            <ButtonImage style={{ width: '18px', margin: '0 5px' }}  alt='' src={ Adicionar } />
            Procurar canais
          </button>
        </Login>

        <Divisoria openMenu = { openMenu }></Divisoria>

        <Explore openMenu ={openMenu} >Mais do YouTube</Explore>

        {name.map((item) => (
          <MenuYT openMenu = { openMenu }  >
            <ButtonIcon alt='' src={ item.icon } />
            <span>{item.nome} </span>
          </MenuYT>
        ))}

        <Divisoria openMenu = { openMenu }></Divisoria>

        <ButtonSpan openMenu = { openMenu }>
        <span style={
          { width: '90%', fontSize: '10px', cursor: 'pointer' }
          }>Sobre a Imprensa 
        </span>
        <span style={
          { width: '90%', fontSize: '10px', cursor: 'pointer' }
          }>Direito autorais 
        </span>
        <span style={
          { width: '90%', fontSize: '10px', cursor: 'pointer' }
          }>Entre em contato 
        </span>
        <span style={
          { width: '90%', fontSize: '10px', cursor: 'pointer' }
          }>Criadores de conteúdo 
        </span>
        <span style={
          { width: '90%', fontSize: '10px', cursor: 'pointer', paddingBottom: '10px' }
          }>Publicidade Desenvolvedores 
        </span>
        <span style={
          { width: '90%', fontSize: '10px', cursor: 'pointer' }
          }>Termos Privacidade 
        </span>
        <span style={
          { width: '90%', fontSize: '10px', cursor: 'pointer' }
          }>Política e segurança 
        </span>
        <span style={
          { width: '90%', fontSize: '10px', cursor: 'pointer' }
          }>Como funciona o YouTube 
        </span>
        <span style={
          { width: '90%', fontSize: '10px', cursor: 'pointer', paddingBottom: '10px' }
          }>Testar os novos recursos 
        </span>

        </ButtonSpan>
        

      </ContainerM>
    </Container_Context>      
  )
}

export default Menu;