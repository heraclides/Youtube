import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  height: 55px;
  background-color: #fff;
  padding: 0 16px;
  box-sizing: border-box;
  // box-sizing serv para add um padding sem alterar o tamanho inicial do elemento 
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  // para que nosso elemento fique fixo no topo
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const ButtonContainer = styled.div<{margin?: string}>`
width: 40px;
height: 40px;
border-radius: 50%;
background-color: #fff;
margin: ${({ margin }) => margin? margin: 0};
display: flex;
align-items: center;
justify-content: center;
cursor: pointer;

:hover {
  background-color: #f2f2f2;
}

`;

export const ButtonIcon = styled.img`
  width: 20px;
`

export const SearchContainer = styled.div`
  display: flex;
`;

export const SearchInputContainer = styled.div`
  width: 450px;
  height: 35px;
  border-radius: 40px 0 0 40px;
  border: 1px solid #d3d3d3;
  padding: 0 16px;
  display: flex;
  align-items: center;
`;
 

export const SearchInput = styled.input`
  width: 450px;
  height: 25px;
  outline: none;
  border: none; 
`;

export const SearchButton = styled.div`
  width: 70px;
  height: 35px;
  border-radius: 0 40px 40px 0;
  background-color: #f8f8f8;
  border: 1px solid #d3d3d3;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const HeaderButton = styled.div`
  width: 200px;
  display: flex;
`;
 