import { Button, Container, Typography } from '@material-ui/core';
import React, { FormEvent, useCallback, useState } from 'react';
import Input from '../../../components/Input';
import Menu from '../../../components/Menu';
import { IDriver } from '../../../services/Interfaces';
import { Box } from '../../../Styled';
import { Row, SectionLeft, SectionRight } from '../styles';

const RegidterDriver = () => {
  const [driver, setDriver] = useState<IDriver>({} as IDriver);

    const handleChange = useCallback((event:any) => {
        setDriver({
            ...driver,
           [event.target.name]: event.target.value
        });
    }, [driver]);

    function handleSubmit(event: FormEvent) {
        event.preventDefault();
        // submitForm(client);
    }

    return (
        <>
        <Menu />
        <Box>
        <form onSubmit={handleSubmit}>
            <Container maxWidth="md" >
            <Row>    
                <SectionLeft>
                    <Typography>Informações do motorista</Typography>
                    <hr/> <br/>   
                        <Input
                            onChange={handleChange}
                            name="name"
                            label="Nome"
                            required
                        />
                        
                        <Input
                            required
                            onChange={handleChange}
                            name="CPF"
                            label="CPF"
                            mask="cpf"
                        />

                        <Input
                            required
                            onChange={handleChange}
                            name="CPF"
                            label="CNH"
                        />


                        <Input
                            required
                            onChange={handleChange}
                            name="cell"
                            label="Celular"
                        />

                        <Input
                            required
                            onChange={handleChange}
                            name="email"
                            label="E-mail" />
                 </SectionLeft>

                <SectionRight>
                    <Typography>Endereço</Typography>
                    <hr/> <br/>    
                        <Input
                            required
                            onChange={handleChange}
                            name="address"
                            label="Endereço"
                            />

                        <Input
                            required
                            onChange={handleChange}
                            name="district"
                            label="Bairro"
                        />

                        <Input
                            required
                            onChange={handleChange}
                            name="city"
                            label="Cidade"
                        />

                        <Input
                            required
                            onChange={handleChange}
                            name="zipe_code"
                            label="CEP"
                            mask="cep"
                        />

                        <Input
                            required
                            onChange={handleChange}
                            name="state"
                            label="Estado"
                        />
                     </SectionRight>
                    </Row>
                    <Button
                        type="submit"
                        variant="contained"
                        size="small"
                        color="primary">
                        proximo
                    </Button>
              
                </Container>
                </form>
                </Box>
                </>


    );
}

export default RegidterDriver;