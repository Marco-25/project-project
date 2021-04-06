import React, { useCallback, useState } from 'react';
// import { useHistory } from 'react-router';
import { ContainerFull } from '../../Styled';
import { Box, FormLogin, Logo,InputLogin, ButtonLogin } from './styleLogin';

const Login: React.FC = () => {
  const [username, setUsername] = useState(String)
  const [password, setPassword] = useState(String)

  // const history = useHistory()

  // const { signIn } = useAuth()

  const handleSubmit = useCallback(async (event) => {
      event.preventDefault()
      console.log(username, password)
      // await signIn({ username, password })
      // history.push('/dashboard')

  }, [username, password])
  // }, [username, password, history, signIn])
  return(
    <ContainerFull>
    <Box>
    <Logo src="images/logo_fulltrack.png" alt="logo" />
      <FormLogin
        onSubmit={handleSubmit}
       method="post">

          <InputLogin
          onChange={(e) => setUsername(e.target.value)}
           type="text" 
           name="username"
            placeholder="usuario" />

          <InputLogin
          onChange={(e) => setPassword(e.target.value)}
           type="text"
           name="password" 
           placeholder="senha" />

          <ButtonLogin type="submit"> Entrar</ButtonLogin>
      </FormLogin>
    </Box>
    </ContainerFull>
  );
}

export default Login;