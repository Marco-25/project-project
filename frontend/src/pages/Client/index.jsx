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
import { apiFake } from '../../services/api';
import {   } from '../../Styled/index';
import {BoxButton} from './styleClient';
import { Button, Icon } from '@material-ui/core';

const Client = () => {
    const [client, setClients] = useState([]);
    const [id, setId] = useState(Number);
    const history = useHistory();


    const loadClients = useCallback(async() => {
            const response = await apiFake.get(`https://jsonplaceholder.typicode.com/users`);
            setClients(response.data);
        },[]);

    useEffect(() => {
        loadClients();
       
    }, [id,loadClients,]);

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'name', headerName: 'Razão Social / Nome', width: 200 },
        { field: 'username', headerName: 'cidade', width: 130 },
        { field: 'email', headerName: 'Estado', width: 130 },
    ]
    return (
        <>
            <Menu />
            <Container maxWidth="lg">
                <Typography>Cadastro de clientes</Typography>
                <hr /> <br />

                <Button 
                 startIcon={<AutorenewIcon />}
                 variant="contained"
                 size="small" 
                 color="primary" 
                 onClick={loadClients} > Recarregar Tabela</Button>
                <br />
                <BoxButton>
                    <Button
                      onClick={() => history.push(`/clientes_cadastro`)}
                      variant="contained" size="small" color="primary" 
                      style={{background: '#1565c0', color: 'white'}} 
                      startIcon={<AddCircleOutline />}
                      > Adicionar </Button>

                   {id !== 0 ? 
                   <Button 
                     startIcon={<BorderColorIcon />}
                     onClick={() => history.push(`/clientes_alterar/${id}`)}
                     variant="contained" 
                     size="small"
                     style={{background: '#2196f3', color: 'white'}} > Editar </Button> : 
                        <Button 
                        variant="contained" 
                        startIcon={<BorderColorIcon />}
                        size="small" color="primary"
                        disabled > Editar </Button>
                    }

                     <Button
                      onClick={() => history.push(`/clientes`)} 
                      variant="contained" size="small" 
                      startIcon={<DeleteIcon />}
                      style={{background: '#f44336', color: 'white'}} > 
                     Deletar </Button>
                     {/* <i className="fas fa-trash-alt"></i> &nbsp; */}
                </BoxButton>
           
            <div style={{ height: 400, width: '100%', marginTop: '1rem' }}>
                <DataGrid on onRowClick={(e) => setId(e.id)} rows={client} columns={columns} pageSize={5}  />
            </div>
            </Container>
        </>
    );
}

export default Client;