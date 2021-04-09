import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Box, Header, LogoMenu, MenuDesktop, Toggle , MiniLogoMenu} from './styleMenu';



const Menu: React.FC = () => {
    const [menu, setMenu] = useState(false);

    const handlemenu = () => {
        setMenu(!menu);
    }

    return (

        <Box>
            {menu && 
            <MenuDesktop>
                <LogoMenu src="images/logo_7112.png" alt="logo menu"/>
                <Link to="/dashboard"> <i className="fas fa-tachometer-alt"></i> Dashboard </Link>
                <Link to="/map" > <i className="fas fa-globe-americas"></i> Mapa </Link>
                <Link to="/map2" > <i className="fas fa-globe-americas"></i> Mapa 2 </Link>
                <Link to="/test" ><i className="fas fa-edit"></i>Cadastro </Link>
            </MenuDesktop>
            }
            <Toggle onClick={handlemenu} > <i className="fas fa-bars"></i></Toggle>
            <Header>
                <MiniLogoMenu src="images/logo_7112.png" alt="logo menu"/>
                <div>
                    <Link to="/" onClick={() => { localStorage.removeItem('@Permission:token') }} >Sair</Link>
                 </div>
             </Header>
        </Box>
     
    );
}

export default Menu;