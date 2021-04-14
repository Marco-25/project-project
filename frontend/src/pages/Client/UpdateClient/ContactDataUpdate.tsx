import { Button } from "@material-ui/core";
import {  FormEvent, useCallback, useState } from "react";
import Input from "../../../components/Input";
import { IClient,IPropsEditClient } from "../../../services/Interfaces";
import {  BoxRow, SectionLeft, SectionRight, BoxButton, BoxTextArea } from "./styles";


const ContactDataUpdate = ({ submitForm, comeBack, data }: IPropsEditClient) => {
    const [client, setClient] = useState<IClient>({} as IClient);

    const handleChange = useCallback((event: any) => {
        setClient({
            ...client,
            [event.target.name]: event.target.value
        });
    }, [client]);

    function handleSubmit(event: FormEvent) {
        event.preventDefault();
        submitForm(client);
    }

    return (
        <>
        <form method="post" onSubmit={handleSubmit}>
        <BoxRow>
            <SectionLeft>
            <h4>Informações do Contato</h4>
                <Input
                    onChange={handleChange}
                    defaultValue={data.contact_name}
                    name="contact_name"
                    label="Nome de Contato"
                    required
                />

                <Input
                    onChange={handleChange}
                    defaultValue={data.email}
                    name="email"
                    label="E-mail"
                    required
                />

                <BoxTextArea>
                    <label> Observation </label>
                    <textarea onChange={handleChange}
                    defaultValue={data.observation} name="observation" />
                </BoxTextArea>
                
                </SectionLeft>

                <SectionRight>
                    <h4>Discagem</h4>
                 <Input
                    onChange={handleChange}
                    defaultValue={data.telephone_number}
                    name="telephone_number"
                    label="Número do Telefone"
                    placeholder="55 14 3333-3303"
                    mask="phone"
                    />

                 <Input
                    onChange={handleChange}
                    defaultValue={data.cell}
                    name="cell"
                    label="Celular"
                    mask="cell"
                    placeholder="55 14 99999-9999"
                    />

                </SectionRight>
                
                </BoxRow>
                
                    <BoxButton>
                     <Button style={{marginRight: '1rem', background: 'gray'}}
                            onClick={comeBack}
                            type="button"
                            variant="contained"
                            size="small"
                            color="primary">
                            anterior
                    </Button>

                      <Button 
                            type="submit"
                            variant="contained"
                            size="small"
                            color="primary">
                            Salvar
                    </Button>
                </BoxButton>
                </form>
                </>


    );
}

export default ContactDataUpdate;