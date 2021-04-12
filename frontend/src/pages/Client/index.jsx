import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Menu from '../../components/Menu';
import { apiFake } from '../../services/api';
import { Container, Title } from '../../Styled/index';
import {
    BoxButton, ButtonBlue,
    BoxForm, TableGeneric, Pagination, PaginationButton, PaginationItem
} from './styleClient';

const Client = () => {
    const [client, setClients] = useState([]);
    const [total, setTotal] = useState(Number);
    const [id, setId] = useState(Number);
    const limit = 5;
    const [pages, setPages] = useState([1]);
    const [currentPage, setCurrentPage] = useState(Number);

    useEffect(() => {

        async function loadProducts() {
            const response = await apiFake.get(`https://jsonplaceholder.typicode.com/users`);
            setTotal(10);
            const totalPages = Math.ceil(total / limit);

            const arrayPages = [];
            for (let i = 1; i <= totalPages; i++) {
                arrayPages.push(i)
            }
            setPages(arrayPages);

            setClients(response.data);
        }
        loadProducts();
        console.log(id)
    }, [total, limit, currentPage, id]);

    return (
        <>
            <Menu />
            <Container>
                <Title>Cadastro de clientes</Title>
                <hr /> <br />

                <ButtonBlue style={{ padding: '0.2rem 0.85rem' }}> <i className="fas fa-sync-alt"></i> Recarregar Tabela</ButtonBlue>
                <br />
                <BoxButton>
                    <Link to={`/clientes_cadastro/${id}`} > <i className="fa fa-plus-circle"></i> Adicionar </Link>
                    <Link to={`/clientes`}> <i className="fas fa-edit"></i> Editar</Link>
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

                <TableGeneric>

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
                            <tr key={client.id} onClick={() => setId(client.id)}>
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
                </Pagination>
            </Container>
        </>
    );
}

export default Client;