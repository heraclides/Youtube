import styled from "styled-components";

export const Container_Context = styled.div<{ openMenu:boolean }>`
   width: ${({ openMenu }) => openMenu? '250px' : '100px' };
   height: 100vh;
   display: flex;
   align-items: center;
   flex-direction: column;
   overflow-y: auto;
`;

export const ContainerM = styled.div<{ openMenu:boolean }>`
   width: 100%;
   height: ${({ openMenu }) => openMenu? '182px' : '272px' };
   box-sizing: border-box;
   padding: 60px 10px 10px 10px;
   display: flex;
   align-items: center;
   flex-direction: column;   
`;

export const MenuNome = styled.div <{ openMenu:boolean }>`
   width: 90%;
   min-height: ${({ openMenu }) => openMenu? '40px' : '70px' };
   border-radius: 10px;
   cursor: pointer;
   padding: 2px 10px;
   box-sizing: border-box;
   display: flex;
   flex-direction: ${({ openMenu }) => openMenu? 'row' : 'column' };
   align-items: center;
   justify-content: ${({ openMenu }) => openMenu? 'none' : 'center' };

   :hover{
      background-color: #f2f2f2;
   }

   span{
      font-weight: ${({ openMenu }) => openMenu? '600' : '400' };
      margin-left: ${({ openMenu }) => openMenu? '20px' : 'none' };
      font-size: ${({ openMenu }) => openMenu? '12px' : '9px' };
   }     
`;

export const MenuItens = styled.div <{ openMenu:boolean }>`
   width: 90%;
   min-height: ${({ openMenu }) => openMenu? '40px' : '70px' };
   border-radius: 10px;
   cursor: pointer;
   padding: 2px 10px;
   box-sizing: border-box;
   display: flex;
   flex-direction: ${({ openMenu }) => openMenu? 'row' : 'column' };
   align-items: center;
   justify-content: ${({ openMenu }) => openMenu? 'none' : 'center' };

   :hover{
      background-color: #f2f2f2;
   }

   span{
      font-weight: ${({ openMenu }) => openMenu? '600' : '400' };
      margin-left: ${({ openMenu }) => openMenu? '20px' : 'none' };
      font-size: ${({ openMenu }) => openMenu? '12px' : '9px' };
   } 
`;

export const Divisoria = styled.div <{openMenu: boolean}>`
   content: '';
   padding: ${({ openMenu }) => openMenu? '1px' : 'none' };
   width: 100%;
   background-color: #000;
   margin-bottom: 10px;
   margin-top: 10px;
`;

export const MenuExplore = styled.div <{ openMenu:boolean }>`
   width: 90%;
   min-height: ${({ openMenu }) => openMenu? '40px' : '70px' };
   border-radius: 10px;
   cursor: pointer;
   padding: 2px 10px;
   box-sizing: border-box;
   display:${({ openMenu }) => openMenu? 'flex' : 'none' };
   flex-direction: ${({ openMenu }) => openMenu? 'row' : 'column' };
   align-items: center;
   justify-content: ${({ openMenu }) => openMenu? 'none' : 'center' };

   :hover{
      background-color: #f2f2f2;
   }

   span{
      font-weight: ${({ openMenu }) => openMenu? '600' : '400' };
      margin-left: ${({ openMenu }) => openMenu? '20px' : 'none' };
      font-size: ${({ openMenu }) => openMenu? '12px' : '9px' };
   } 
`;

export const Explore = styled.span <{openMenu: boolean}>`
   display: ${({ openMenu }) => openMenu? 'flex' : 'none' } ;
   width: 90%;
   margin-left: none;
   font-size: 15px;
   padding: 10px;
   
`;

export const ButtonIcon = styled.img`
   width: 20px;
`;

export const ButtonImage = styled.img`
   width: 14px;
`;

export const Login = styled.div<{openMenu: boolean}> `
  width: 80%;
  display: ${({ openMenu }) => openMenu? 'flex' : 'none' };
  flex-direction: column;
  padding-bottom: 10px;
  
 p{
    width: 100%;
    height: 40px;
    font-size: 12px;
    color: #000;
 }
 
 button{
    width: 90px;
    height: 25px;
    cursor: pointer;
    background-color: #d3c3d3;
    color: #000;
    font-size: 10px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: space-around;

    :hover{
        background-color: blue;
        color: #fff;
    }   
   }
 `;

export const MenuYT = styled.div <{ openMenu:boolean }>`
   width: 90%;
   min-height: ${({ openMenu }) => openMenu? '40px' : '70px' };
   border-radius: 10px;
   cursor: pointer;
   padding: 2px 10px;
   box-sizing: border-box;
   display: ${({ openMenu }) => openMenu? 'flex' : 'none' };
   flex-direction: ${({ openMenu }) => openMenu? 'row' : 'column' };
   align-items: center;
   justify-content: ${({ openMenu }) => openMenu? 'none' : 'center' };

   :hover{
      background-color: #f2f2f2;
   }

   span{
      font-weight: ${({ openMenu }) => openMenu? '600' : '400' };
      margin-left: ${({ openMenu }) => openMenu? '20px' : 'none' };
      font-size: ${({ openMenu }) => openMenu? '12px' : '9px' };
   }     
`;

export const ButtonSpan = styled.div<{openMenu: boolean}>`
   width: 100%;
   height: auto;
   display: ${({ openMenu }) => openMenu? 'flex' : 'none' };
   flex-direction: column;
`;