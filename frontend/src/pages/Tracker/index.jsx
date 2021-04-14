import { useCallback, useEffect, useState } from 'react';
import { DataGrid } from '@material-ui/data-grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { useHistory } from 'react-router-dom';
import DeleteIcon from '@material-ui/icons/Delete';
import AutorenewIcon from '@material-ui/icons/Autorenew';
import AddCircleOutline from '@material-ui/icons/AddCircleOutline';
import BorderColorIcon from '@material-ui/icons/BorderColor';
import Menu from '../../components/Menu';
import { api } from '../../services/api';
import {  Box } from '../../Styled/index';
import {BoxButton} from './styleClient';
import { Button } from '@material-ui/core';
import { BodyModal, ButtonCancel, ButtonDel, ButtonModal, ContainerModal, Overlay, TitleModal } from '../../components/Modal';

const Tracker = () => {
    const [client, setClients] = useState([]);
    const [id, setId] = useState(Number);
    const history = useHistory();
    const [visible, setVisible] = useState(false);
    const [name, setName] = useState(String);
    const [render, setRender] = useState(true);

    const openModal = useCallback(() => {
        setVisible(true);
    }, []);

    const handleCloseModal = useCallback(() => {
        setVisible(false);
    }, []);

    const deleteClient = useCallback(async() => {
        await api.delete(`/clients/${id}`)
            .then(() => console.log("Exluido com sucesso!"))
            .catch(console.log)
            console.log('hfgahkdfgkh')
    }, [id]);

    const loadClients = useCallback(async() => {
            if (render) {
                const response = await api.get(`/clients`);
                setClients(response.data);
                setRender(false);
            }
    },[render]);

    const reloadTable = useCallback(() => {
        loadClients();
        setId(0);
    }, [loadClients]);

    useEffect(() => {
        loadClients();
    }, [loadClients]);

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'company_name', headerName: 'Razão Social / Nome', width: 200 },
        { field: 'fantasy_name', headerName: 'Nome fantasia', width: 150 },
        { field: 'city', headerName: 'Cidade', width: 130 },
        { field: 'state', headerName: 'Estado', width: 130 },
        { field: 'country', headerName: 'País', width: 130 },
        { field: 'released', headerName: 'Liberado', width: 130 },
    ]

    return (
        <>
            <Menu />
            <Box>
            <Container maxWidth="lg">
                <Typography>Cadastro de clientes</Typography>
                <hr /> <br />

                <Button 
                 startIcon={<AutorenewIcon />}
                 variant="contained"
                 size="small" 
                 color="primary" 
                 onClick={reloadTable} > Recarregar Tabela</Button>
                <br />
                <BoxButton>
                    <Button
                      className="bgBlue"   
                      onClick={() => history.push(`/clientes_cadastro`)}
                      variant="contained" size="small" color="primary" 
                      startIcon={<AddCircleOutline />}
                      > Adicionar </Button>

                   {id !== 0 ? 
                   <Button 
                     className="bgLightBlue" 
                     startIcon={<BorderColorIcon />}
                     onClick={() => history.push(`/clientes_alterar/${id}`)}
                     variant="contained" 
                     size="small" > Editar </Button> : 
                        <Button 
                        variant="contained" 
                        startIcon={<BorderColorIcon />}
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
           
            <div style={{ height: 400, width: '100%', marginTop: '1rem' }}>
                <DataGrid on onRowClick={(e) => {
                    setId(e.id);
                    setName(e.row.company_name);
                    }
                } 
                rows={client} columns={columns} pageSize={5} />
            </div>
            </Container>
            </Box>

            {visible && 
            <Overlay>
            <ContainerModal>
                <header> <TitleModal><p>Excluir cliente</p> {name} </TitleModal> </header>
                <BodyModal>
                    <ButtonCancel onClick={handleCloseModal}> Cancelar</ButtonCancel>
                    <ButtonDel onclick={deleteClient} > Deletar </ButtonDel>
                    <ButtonModal onClick={handleCloseModal}> x</ButtonModal>
                </BodyModal>
            </ContainerModal>
        </Overlay>
            }
        </>
    );
}

export default Tracker;