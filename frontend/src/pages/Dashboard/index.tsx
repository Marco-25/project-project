import React from 'react';
import Menu from '../../components/Menu';
import { Container } from '../../Styled';

const Dashboard: React.FC = () => {

    return (
        <>
            <Menu />
            <Container>
                <h1>Dashboard</h1>
            </Container>
        </>
    );
}

export default Dashboard;