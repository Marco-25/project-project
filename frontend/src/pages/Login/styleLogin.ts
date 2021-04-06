import styled from "styled-components";


export const Box = styled.section`
  width: 45%;
  margin: 2rem auto;
  padding:1rem;
  display:flex;
  justify-content:center;
  flex-direction: column;
`
export const Logo = styled.img`
  margin: 0 auto;
  width:100%;
  max-width: 200px;
  height:100%;

  @media screen and (max-width: 769px) {
    max-width: 150px;
  }
`;

export const FormLogin = styled.form`
display:flex;
flex-direction: column;
align-items:center;
margin-top:2rem;
`;

export const InputLogin = styled.input`
margin-top:1rem;
border-radius: 10rem;
font-size: 1rem;
width:80%;
min-width: 300px;
height:2rem;
border:1px solid rgb(128 128 128 / 11%);
background: white;
padding-left:1rem;
box-shadow: 0 4px 10px 0 rgb(128 128 128 / 11%);

 :focus {
  box-shadow: 0 0 0 0;
  border:1px solid rgb(128 128 128 / 11%);
  outline: 0;
} 
`;

export const ButtonLogin = styled.button`
margin-top: 1rem;
border-radius: 10rem;
height:1.7rem;
width: 100px;
padding: 0px;
border: none;
font-size: 1rem;
font-weight: 600;
background-color: #185582;
color: white;
cursor:pointer;

:hover {
  opacity: 0.9;
}
`;