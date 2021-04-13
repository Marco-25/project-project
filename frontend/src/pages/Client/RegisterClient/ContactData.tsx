import { Button } from "@material-ui/core";
import {  FormEvent, useCallback, useState } from "react";
import Input from "../../../components/Input";
import { IClient, IProps } from "../../../services/Interfaces";
import {  BoxRow, SectionLeft, SectionRight, BoxButton, BoxTextArea } from "./styles";


const ContactData = ({ submitForm, comeBack }: IProps) => {
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
        console.log('ue')
    }


    return (
        <>
        <form method="post" onSubmit={handleSubmit}>
        <BoxRow>
            <SectionLeft>
            <h4>Informações do Contato</h4>
                <Input
                    onChange={handleChange}
                    name="contact_name"
                    label="Nome de Contato"
                    required
                />

                <Input
                    onChange={handleChange}
                    name="email"
                    label="E-mail"
                    required
                />

                <BoxTextArea>
                    <label> Observation </label>
                    <textarea onChange={handleChange} name="observation" />
                </BoxTextArea>
                

                
                </SectionLeft>

                <SectionRight>
                    <h4>Discagem</h4>
                 <Input
                    onChange={handleChange}
                    name="telephone_number"
                    label="Número do Telefone"
                    placeholder="55 14 3333-3303"
                    mask="phone"
                    />

                 <Input
                    onChange={handleChange}
                    name="cell"
                    label="Celular"
                    mask="cell"
                    placeholder="55 14 99999-9999"
                    />

                </SectionRight>
                
                </BoxRow>
                </form>
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
                
                </>


    );
}

export default ContactData;