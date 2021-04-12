import { ChangeEvent, FormEvent, useCallback, useEffect, useState } from 'react';
import { Button } from '@material-ui/core';
import { IClient, IProps } from '../../../services/Interfaces';
import { BoxButton, Select, BoxColumn, BoxLabel } from './styles';
import Input from '../../../components/Input';




const RegisterData = ({ submitForm }: IProps) => {
    const [user, setUser] = useState<IClient>({} as IClient);
    const [types, setTypes] = useState(String);

    const handleChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        setUser({
            ...user,
            [event.currentTarget.name]: event.currentTarget.value
        });
    }, [user]);

    function handleSubmit(event: FormEvent) {
        event.preventDefault();
        submitForm(user);
    }

    useEffect(() => {
        console.log(types)
    }, [types])

    return (
        <>

            <form onSubmit={handleSubmit}>
                <Input
                    onChange={handleChange}
                    name="company_name"
                    label="Razão Social / Nome"
                    required
                />

                <Input
                    onChange={handleChange}
                    name="fantasy_name"
                    label="Nome Fantasia"
                    required
                />

                <BoxColumn>
                    <BoxLabel>
                        <label>Tipo</label>
                        <Select name="type" onClick={(e) => setTypes(e.currentTarget.value)}>
                            <option value="fisica"> Fisica </option>
                            <option value="juridica"> Juridica </option>

                        </Select>
                    </BoxLabel>

                    <BoxLabel>
                        <label>Liberado</label>
                        <Select name="released">
                            <option value="sim"> Sim </option>
                            <option value="nao"> Não </option>
                        </Select>
                    </BoxLabel>
                </BoxColumn>

                {types === 'juridica' ?
                    <Input
                        onChange={handleChange}
                        name="CNPJ"
                        label="CNPJ"
                        mask="cnpj" /> :

                    <Input
                        onChange={handleChange}
                        name="CPF"
                        label="CPF"
                        mask="cpf"
                    />

                }


                <BoxButton>
                    <Button
                        type="submit"
                        variant="contained"
                        size="small"
                        color="primary">
                        proximo
                </Button>
                </BoxButton>

            </form>
        </>

    );
}

export default RegisterData;