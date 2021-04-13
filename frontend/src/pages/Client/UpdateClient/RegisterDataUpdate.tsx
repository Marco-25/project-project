import {  FormEvent, useCallback, useEffect, useState } from 'react';
import { Button } from '@material-ui/core';
import { IClient, IProps } from '../../../services/Interfaces';
import { BoxButton, Select, BoxColumn, BoxLabel, SectionLeft, SectionRight, BoxRow } from './styles';
import Input from '../../../components/Input';


const RegisterDataUpdate = ({ submitForm }: IProps) => {
    const [client, setClient] = useState<IClient>({} as IClient);
    const [types, setTypes] = useState(String);

    const handleChange = useCallback((event:any) => {
        setClient({
            ...client,
           [event.target.name]: event.target.value
        });
    }, [client]);

    function handleSubmit(event: FormEvent) {
        event.preventDefault();
        submitForm(client);
    }

    useEffect(() => { }, [types])

    return (
        <>
        <form onSubmit={handleSubmit}>
        <BoxRow>
            <SectionLeft>
            <h4>Informações</h4>
           
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
                        <Select name="type" 
                        required
                        onClick={(e) => setTypes(e.currentTarget.value)}
                        onChange={handleChange} 
                        >
                            <option value="fisica"> Fisica </option>
                            <option value="juridica"> Juridica </option>

                        </Select>
                    </BoxLabel>

                    <BoxLabel>
                        <label>Liberado</label>
                        <Select name="released" onChange={handleChange} >
                            <option value="0"> Não </option>
                            <option value="1"> Sim </option>
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

export default RegisterDataUpdate;