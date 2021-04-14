import React, { useCallback, useEffect, useState } from 'react';
import { Stepper, Step, StepLabel,Container } from '@material-ui/core';
import { IClient, IId } from '../../../services/Interfaces';
import Menu from '../../../components/Menu';
import { api } from '../../../services/api';
import RegisterDataUpdate from './RegisterDataUpdate';
import ContactDataUpdate from './ContactDataUpdate';
import { useHistory, useParams } from 'react-router';
import { Box } from '../../../Styled';

const UpdateClient: React.FC = () => {
    const [currentStep, setCurrentStep] = useState(Number);
    const [client, setClient] = useState<IClient>({} as IClient);
    const [data, setData] = useState<IClient>({} as IClient);
    const [render, setRender] = useState(true);
    const params = useParams<IId>();

    const history = useHistory();


    const forms = [
        <RegisterDataUpdate submitForm={collectData} data={data} />,
        <ContactDataUpdate submitForm={collectData} comeBack={prev} data={data} />,
    ]

    const handleSubmit = useCallback(async () => {
        await api.put(`/clients/${Number(params.id)}`, client)
          .then(() => console.log("Cadastro atualizado!"))
          .catch(console.log);
          history.push('/clientes');
    }, [client,history, params.id]);

    const handleData = useCallback(async ()=> {
        if (render) {
            await api.get(`/clients/${Number(params.id)}`)
                .then((res) => setData(res.data)); 
                setRender(false);
        }  
    },[params.id,render]);

    useEffect(() => {
        handleData();
        if (currentStep === forms.length ) {
            handleSubmit();
        }
        
    }, [currentStep, forms.length, handleSubmit,handleData]);



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

export default UpdateClient;