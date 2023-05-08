import {  useContext } from "react";
import Header from "./components/header";
import Menu from "./components/menu";
import { OpenMenu, UserState } from "./components/contexts/OpenMenu";
import MenuT from "./components/MenuTeste/MenuT";


function App() {

  const { openMenu, setOpenMenu } = useContext(OpenMenu);

  return (
    <div className="App">
     <Header openMenu= {openMenu} setOpenMenu={setOpenMenu}/>
      <div style={{ width:'100%', display:'flex' }}> 
        <Menu openMenu = {openMenu} />
        <div style={{background: 'red', width: '100%'}}></div>
      </div>
    </div>
  );
}

export default App;
