import { useContext } from 'react'

import { 
    ButtonContainer,
    ButtonIcon, 
    Container, 
    HeaderButton, 
    LogoContainer, 
    SearchButton, 
    SearchContainer, 
    SearchInput, 
    SearchInputContainer
} from "./style";
import HamburguerIcon  from '../../assets/hamburger.png';
import Logo from '../../assets/logo-youtube.png';
import SearchIcon from '../../assets/lupa.png';
import MicIcon from '../../assets/microfone-gra.png';
import NotificationIcon from '../../assets/sino.png';
import VideoIcon from '../../assets/video.png';
import { OpenMenu } from "../contexts/OpenMenu";



function Header({openMenu , setOpenMenu } = useContext(OpenMenu)) {
    return(
        <Container>
            <LogoContainer>
                <ButtonContainer onClick={() => setOpenMenu(!openMenu) } margin='0 10px 0 0'>
                    <ButtonIcon alt="" src={ HamburguerIcon } />
                </ButtonContainer>
                <img 
                style={{cursor: "pointer", width: '60px'}}
                alt=""
                src={ Logo }
                />
            </LogoContainer>

            <SearchContainer>
                <SearchInputContainer>
                    <SearchInput placeholder="Pesquisar" />
                </SearchInputContainer>
                <SearchButton>
                    <ButtonIcon alt="" src={SearchIcon}/>
                </SearchButton>
            <ButtonContainer margin='0 0 0 10px'>
                <ButtonIcon alt="" src={MicIcon}/>
            </ButtonContainer>
            </SearchContainer>

            <HeaderButton>
                <ButtonContainer margin='0 0 0 10px'>
                    <ButtonIcon  alt="" src={VideoIcon}/>
                </ButtonContainer>
                <ButtonContainer margin='0 0 0 10px'>
                    <ButtonIcon  alt="" src={NotificationIcon}/>
                </ButtonContainer>
                <ButtonContainer margin='0 0 0 10px'>
                    H
                </ButtonContainer>
            </HeaderButton>

        </Container>
    )
}

export default Header;