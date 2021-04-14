import React, { useCallback, useEffect, useState } from 'react';
import { Stepper, Step, StepLabel,Container } from '@material-ui/core';
import RegisterData from './RegisterData';
import { IClient } from '../../../services/Interfaces';
import Menu from '../../../components/Menu';
import ContactData from './ContactData';
import { api } from '../../../services/api';
import { Box } from '../../../Styled';
import { useHistory } from 'react-router';

const RegisterClient: React.FC = () => {
    const [currentStep, setCurrentStep] = useState(Number);
    const [client, setClient] = useState<IClient>({} as IClient);

    const history = useHistory();


    const forms = [
        <RegisterData submitForm={collectData} />,
        <ContactData submitForm={collectData} comeBack={prev} />
    ]

    const handleSubmit = useCallback(async () => {
        await api.post('/clients', client)
          .then(() => console.log("Cadastro realizado"))
          .catch(console.log);
        console.log(client);
        history.push("/clientes");
    }, [client,history])

    const reset = useCallback(() => {
        setCurrentStep(0);
    }, []);

    useEffect(() => {
        if (currentStep === forms.length) {
            handleSubmit();
        }
    }, [currentStep, forms.length, handleSubmit, reset]);



    function collectData(data: IClient) {
        setClient({ ...client, ...data });
        next();
    }

    function next() {
        setCurrentStep(currentStep + 1);
    }

    function prev() {
        setCurrentStep(currentStep - 1);
    }

    return (
        <>
            <Menu />
            <Box>
            <Container>
                <Stepper className="stepper" activeStep={currentStep} >
                    <Step> <StepLabel> Dados Pessoais </StepLabel>  </Step>
                    <Step> <StepLabel> Dados de Contato </StepLabel>  </Step>
                </Stepper>
                {forms[currentStep]}
            </Container>
            </Box>

        </>
    );
}

export default RegisterClient;