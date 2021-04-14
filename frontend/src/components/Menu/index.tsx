import React, { useState } from 'react';
import IMGLogo from './logo_7112.png';
import { Link } from 'react-router-dom';
import { Box, Header, LogoMenu, MenuDesktop, Toggle, MiniLogoMenu, Span, BoxLink } from './styleMenu';


const Menu: React.FC = () => {
    const [menu, setMenu] = useState(false);
    const [subMenu, setSubMenu] = useState(false);

    const handlemenu = () => {
        setMenu(!menu);
    }

    const handleSubmenu = () => {
        setSubMenu(!subMenu);
    }

    return (

        <Box>
            {menu &&
                <MenuDesktop>
                    <LogoMenu src={IMGLogo} alt="logo menu" />
                    <Link to="/dashboard"> <i className="fas fa-tachometer-alt"></i> Dashboard </Link>
                    <Link to="/map" > <i className="fas fa-globe-americas"></i> Mapa </Link>
                    <Link to="/map2" > <i className="fas fa-globe-americas"></i> Mapa 2 </Link>
                    <Span onClick={handleSubmenu}>
                        <i className="fas fa-edit"></i>
                                Cadastro
                            <i style={{ float: 'right' }} className="fas fa-chevron-left"></i>
                    </Span>
                    {subMenu &&
                        <BoxLink>
                            <Link to="/clientes" > <i className="fas fa-angle-double-right"></i>Clientes</Link>
                            <Link to="/veiculos" > <i className="fas fa-angle-double-right"></i> Veiculos</Link>
                            <Link to="/equipamentos" > <i className="fas fa-angle-double-right"></i> Equipamentos</Link>
                        </BoxLink>
                    }

                </MenuDesktop>
            }
            <Toggle onClick={handlemenu} > <i className="fas fa-bars"></i></Toggle>
            <Header>
                <MiniLogoMenu src={IMGLogo} alt="logo menu" />
                <div>
                    <Link to="/" onClick={() => { localStorage.removeItem('@Permission:token') }} >Sair</Link>
                </div>
            </Header>
        </Box>

    );
}

export default Menu;