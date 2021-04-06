import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const MenuDesktop = styled.nav`
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    width: 600px;
    color:black;
`;

const Menu: React.FC = () => {

    return (

        <MenuDesktop>
            <Link to="/dashboard"> Dashboard</Link>
            <Link to="/map" > Mapa </Link>
            <Link to="/test" > Teste </Link>
            <Link to="/" onClick={() => { localStorage.removeItem('@Permission:token') }} >Sair</Link>
        </MenuDesktop>
    );
}

export default Menu;