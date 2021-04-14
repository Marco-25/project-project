import { Container } from '@material-ui/core';
import React from 'react';
import Menu from '../../components/Menu';

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