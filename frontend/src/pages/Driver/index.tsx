import { Button, Container, Typography } from '@material-ui/core';
import  {DataGrid}  from '@material-ui/data-grid';
import React, { useCallback, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import Menu from '../../components/Menu';
import { BodyModal, ButtonCancel, ButtonDel, ButtonModal, ContainerModal, Overlay, TitleModal } from '../../components/Modal';
import { api } from '../../services/api';
import { Box, BoxButton } from '../../Styled';
import DeleteIcon from '@material-ui/icons/Delete';
import AddCircleOutline from '@material-ui/icons/AddCircleOutline';
import { ITrackers } from '../../services/Interfaces';
import { Table } from './styles';

const Driver = () => {

    const [driver, setDriver] = useState<ITrackers[]>([] as ITrackers[]);
    const [id, setId] = useState(Number);
    const history = useHistory();
    const [visible, setVisible] = useState(false);
    const [name, setName] = useState(String);

    const openModal = useCallback(() => {
        setVisible(true);
    }, []);

    const handleCloseModal = useCallback(() => {
        setVisible(false);
    }, []);

    const deleteClient = useCallback(async() => {
        // await api.delete(`/drivers/${id}`)
        //     .then(() => console.log("Exluido com sucesso!"))
        //     .catch(console.log)
            console.log('hfgahkdfgkh', id)
    }, [id]);

    const loadDrivers = useCallback(async() => {
                const response = await api.get(`/drivers`);
                setDriver(response.data);
    },[]);

    useEffect(() => {
        loadDrivers();
    }, [loadDrivers]);

    const columns = [
        { field: 'name', headerName: 'Nome', width: 230 },
        { field: 'CNH', headerName: 'Cnh', width: 150 },
        { field: 'CPF', headerName: 'Cpf', width: 150 },
        { field: 'address', headerName: 'Endereço', width: 180 },
        { field: 'district', headerName: 'Bairro', width: 130 },
        { field: 'city', headerName: 'Cidade', width: 130 },
        { field: 'zip_code', headerName: 'CEP', width: 100 },
        { field: 'state', headerName: 'Estado', width: 100 },
        { field: 'email', headerName: 'E-mail', width: 160 },
        { field: 'cell', headerName: 'Celular', width: 130 },
    ]

    return (
        <>
            <Menu />
            <Box>
            <Container maxWidth="xl">
                <Typography>Cadastro de motoristas</Typography>
                <hr /> <br />

                <BoxButton>
                    <Button
                      className="bgBlue"   
                      onClick={() => history.push(`/motoristas_cadastro`)}
                      variant="contained" size="small" color="primary" 
                      startIcon={<AddCircleOutline />}
                      > Adicionar </Button>

                   {id !== 0 ? 
                   <Button 
                     className="bgLightBlue" 
                     onClick={() => history.push(`/motoristas_alterar/${id}`)}
                     variant="contained" 
                     size="small" > Editar </Button> : 
                        <Button 
                        variant="contained" 
                        size="small" color="primary"
                        disabled > Editar </Button>
                    }

                    {id !== 0 ?
                    <Button
                        className="bgRed"
                        variant="contained" size="small" 
                        onClick={() => {
                            openModal();
                        }}
                        startIcon={<DeleteIcon />}>  Deletar </Button> :
                         <Button 
                        variant="contained" 
                        startIcon={<DeleteIcon />}
                        size="small" color="primary"
                        disabled > Deletar </Button>
                    }
                </BoxButton>
           
            <Table>
                <DataGrid
                    onRowClick={(e) => {
                        setId(Number(e.id));
                        setName(e.row.name);
                    }}
                    rows={driver}
                    columns={columns}
                    pageSize={5} />
            </Table>
            </Container>
            </Box>

            {visible && 
            <Overlay>
            <ContainerModal>
                <header> <TitleModal><p>Excluir cliente</p> {name} </TitleModal> </header>
                <BodyModal>
                    <ButtonCancel onClick={handleCloseModal}> Cancelar</ButtonCancel>
                    <ButtonDel onClick={deleteClient} > Deletar </ButtonDel>
                    <ButtonModal onClick={handleCloseModal}> x</ButtonModal>
                </BodyModal>
            </ContainerModal>
        </Overlay>
            }
        </>
    );
}

export default Driver;