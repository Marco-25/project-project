import React, { useCallback, useEffect, useState } from 'react';
import { Stepper, Step, StepLabel } from '@material-ui/core';
import RegisterData from './RegisterData';
import { IClient } from '../../../services/Interfaces';
import Success from '../../../components/Success';
import { Container } from '../../../Styled';
import Menu from '../../../components/Menu';

const RegisterClient: React.FC = () => {
    const [currentStep, setCurrentStep] = useState(Number);
    const [client, setClient] = useState<IClient>({} as IClient);


    const forms = [
        <RegisterData submitForm={collectData} comeBack={prev} />,
        < Success />
    ]

    const handleSubmit = useCallback(async () => {
        // await api.post('/clients', client)
        //   .then(() => console.log("Cadstro realizado"))
        //   .catch(console.log)
        console.log(client);

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
                    <Step> <StepLabel>Dados pessoais</StepLabel> </Step>
                </Stepper>
                {forms[currentStep]}
            </Container>

        </>
    );
}

export default RegisterClient;