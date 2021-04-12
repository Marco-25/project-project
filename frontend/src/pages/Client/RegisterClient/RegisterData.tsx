import { ChangeEvent, FormEvent, useCallback, useEffect, useState } from 'react';
import { Button } from '@material-ui/core';
import { IClient, IProps } from '../../../services/Interfaces';
import { BoxButton, Select, BoxColumn, BoxLabel, SectionLeft, SectionRight, BoxRow } from './styles';
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
    }, [types])

    return (
        <>
        <BoxRow>
            <SectionLeft>
                <h4>Informações</h4>
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
                </form>
                </SectionLeft>

                <SectionRight>
                    <h4>Localização</h4>
                 <Input
                    onChange={handleChange}
                    name="address"
                    label="Endereço"
                    />

                <Input
                    onChange={handleChange}
                    name="district"
                    label="Bairro"
                />

                <Input
                    onChange={handleChange}
                    name="city"
                    label="Cidade"
                />

                <Input
                    onChange={handleChange}
                    name="zipe_code"
                    label="CEP"
                    mask="cep"
                />

                <Input
                    onChange={handleChange}
                    name="state"
                    label="Estado"
                />

                <Input
                    onChange={handleChange}
                    name="country"
                    label="País"
                />

                </SectionRight>
                </BoxRow>
                    <BoxButton>
                    <Button
                        onClick={submitForm}
                        type="submit"
                        variant="contained"
                        size="small"
                        color="primary">
                        proximo
                    </Button>
                </BoxButton>
                </>


    );
}

export default RegisterData;