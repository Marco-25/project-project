import { useCallback, useEffect, useState } from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { Link } from 'react-router-dom';
import Menu from '../../components/Menu';
import { apiFake } from '../../services/api';
import { Container, Title } from '../../Styled/index';
import {
    BoxButton, ButtonBlue,
    BoxForm,
} from './styleClient';

const Client = () => {
    const [client, setClients] = useState([]);
    const [id, setId] = useState(Number);

    const loadProducts = useCallback(async() => {
            const response = await apiFake.get(`https://jsonplaceholder.typicode.com/users`);
            setClients(response.data);
             console.log(client)
        },[]);

    useEffect(() => {
        loadProducts();
       
    }, [id,loadProducts,]);

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'name', headerName: 'Razão Social / Nome', width: 200 },
        { field: 'username', headerName: 'cidade', width: 130 },
        { field: 'email', headerName: 'Estado', width: 130 },
        { field: 'name', headerName: 'Pais', width: 130 },
        { field: 'username', headerName: 'Perfil', width: 130 },
        { field: 'email', headerName: 'Liberado', width: 130 },
    ]
    return (
        <>
            <Menu />
            <Container>
                <Title>Cadastro de clientes</Title>
                <hr /> <br />

                <ButtonBlue style={{ padding: '0.2rem 0.85rem' }}> <i className="fas fa-sync-alt"></i> Recarregar Tabela</ButtonBlue>
                <br />
                <BoxButton>
                    
                    <Link to={`/clientes_cadastro` } > <i className="fa fa-plus-circle"></i> Adicionar  </Link> 
                   {id !== 0 ?  <Link to={`/clientes_alterar/${id}` } > <i className="fa fa-plus-circle"></i> Editar</Link> : 
                        <ButtonBlue>  <i className="fa fa-plus-circle"></i> Editar </ButtonBlue>
                    }
                    <Link to={`/clientes`}> <i className="fas fa-trash-alt"></i> Deletar </Link>
                </BoxButton>

                <BoxForm>
                    <div className="box">
                        <h5>Selecione o filtro</h5>
                        <form method="post">
                            <select name="" id="">
                                <option value="">id</option>
                                <option value="">Nome fantasia</option>
                                <option value="">cidade</option>
                            </select>
                        </form>
                    </div>
                </BoxForm>
            <div>
                {/* <TableGeneric>

                    <thead>
                        <tr>
                            <th>id</th>
                            <th>Razão Social / Nome</th>
                            <th>Nome Fantasia</th>
                            <th>cidade</th>
                            <th>Estado</th>
                            <th>Pais</th>
                            <th>Perfil</th>
                            <th>Liberado</th>
                        </tr>
                    </thead>

                    <tbody>
                        {client.map((client) => (
                            <tr 
                                style={{background: }}
                                key={client.id} 
                                onClick={() => {
                                setId(client.id);
                                setBgcolor(true);
                            }} >
                                    <td> {client.id} </td>
                                    <td> {client.name} </td>
                                    <td> {client.username} </td>
                                    <td> {client.email} </td>

                                    <td> {client.id} </td>
                                    <td> {client.name} </td>
                                    <td> {client.username} </td>
                                    <td> {client.email} </td>
                            </tr>
                        ))
                        }
                    </tbody>
                </TableGeneric>
                <Pagination>
                    <div>Qtd {total} </div>
                    <PaginationButton>
                        {currentPage > 1 &&
                            <PaginationItem onClick={() => setCurrentPage(currentPage - 1)} >Anterior</PaginationItem>
                        }
                        {pages.map(page => (
                            <PaginationItem isSelect={page === currentPage} key={page} onClick={() => setCurrentPage(page)} >
                                {page}
                            </PaginationItem>
                        ))}
                        {currentPage < pages.length &&
                            <PaginationItem onClick={() => setCurrentPage(currentPage + 1)} >Proximo</PaginationItem>
                        }
                    </PaginationButton>
                </Pagination> */}
            </div>
            
            <div style={{ height: 400, width: '100%' }}>
                <DataGrid rows={client} columns={columns} pageSize={5} checkboxSelection />
            </div>
            </Container>
        </>
    );
}

export default Client;