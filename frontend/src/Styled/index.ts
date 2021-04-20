import styled from "styled-components"

export const Box = styled.div`
  padding: 1rem 0;
  width: 95%;
  margin: 2rem auto;
  background-color: white;
  box-shadow: 0 0 1px 1px #f5f5f5;
  border-radius: 3px;
`

export const BoxButton = styled.div`
  margin-top:1rem;
  display:flex;
  justify-content:space-between;
  width: 320px;

  .bgBlue {
    background: #1565c0;
    color: white;
  }
  .bgLightBlue {
    background: #2196f3;
    color: white;
  }
  .bgLightBlue:hover {background: #2196f3; opacity:0.9;}

  .bgRed {
    background: #f44336;
    color: white;
  }
  .bgRed:hover {background: #f44336; opacity:0.9;}
`;