import React, { useCallback, useEffect, useState } from 'react';
import { Stepper, Step, StepLabel } from '@material-ui/core';
import { IClient } from '../../../services/Interfaces';
import Success from '../../../components/Success';
import { Container } from '../../../Styled';
import Menu from '../../../components/Menu';
import { api } from '../../../services/api';
import RegisterDataUpdate from './RegisterDataUpdate';
import ContactDataUpdate from './ContactDataUpdate';

const UpdateClient: React.FC = () => {
    const [currentStep, setCurrentStep] = useState(Number);
    const [client, setClient] = useState<IClient>({} as IClient);


    const forms = [
        <RegisterDataUpdate submitForm={collectData} />,
        <ContactDataUpdate submitForm={collectData} comeBack={prev} />,
        < Success />
    ]

    const handleSubmit = useCallback(async () => {
        await api.post('/clients', client)
          .then(() => console.log("Cadstro realizado"))
          .catch(console.log)

    }, [client])

    const reset = useCallback(() => {
        setCurrentStep(0);
    }, []);

    useEffect(() => {
        if (currentStep === forms.length - 1) {
            handleSubmit();
            setTimeout(reset, 3000);
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
            <Container>
                <Stepper className="stepper" activeStep={currentStep} >
                    <Step> <StepLabel> Dados Pessoais </StepLabel>  </Step>
                    <Step> <StepLabel> Dados de Contato </StepLabel>  </Step>
                </Stepper>
                {forms[currentStep]}
            </Container>

        </>
    );
}

export default UpdateClient;