import styled from "styled-components";

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