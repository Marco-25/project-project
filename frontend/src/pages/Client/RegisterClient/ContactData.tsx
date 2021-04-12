import { Button } from "@material-ui/core";
import { ChangeEvent, FormEvent, useCallback, useState } from "react";
import Input from "../../../components/Input";
import { IClient, IProps } from "../../../services/Interfaces";
import {  BoxRow, SectionLeft, SectionRight, BoxButton, BoxTextArea } from "./styles";


const ContactData = ({ submitForm, comeBack }: IProps) => {
    const [user, setUser] = useState<IClient>({} as IClient);

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


    return (
        <>
        <form onSubmit={handleSubmit}>
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
                    <textarea name="observation" />
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
                            type="submit"
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