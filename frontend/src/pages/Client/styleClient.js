import styled from "styled-components";

export const BoxForm = styled.div`
    width: 100%;
    display:flex;
    justify-content: flex-end;

    .box {
        display:flex;
        flex-direction:column;
        border: 1px solid;
        border-radius: 3px;
        width: calc(40% + 0rem);
    }
    .box h5 {
        background-color: #f5f5f5;
        border-bottom: 1px solid;
        border-radius: 3px;
        padding: 0.6rem 0;
        text-align:center;
        font-weight: normal;
    }
    form select {
        width: 90%;
        height: 1.5rem;
        border: 1px solid darkgray;
        background-color:white;
        display:flex;
        justify-content: flex-center;
        margin: 1rem auto;
    }
    select:focus {
        outline: 0;
        box-shadow: 0 0 0 0;
        border-color:lightblue;
    }
`;

export const TableGeneric = styled.table`
    width: 100%;
    margin: 1rem auto;
    border-collapse: collapse;

    thead {
        
       tr {
            th {
                padding:10px;
                background-color: #bcbcbc;
                text-align:left;
                font-size: 1rem;
                font-weight: normal;
                color: rgba(0,0,0, 0.8);
            }
       }
    }

    tbody {

        tr {
            text-align: left;
            border-bottom: 1px solid #bcbcbc;
            cursor: pointer;
            

           ${props => props.select === 'true' && {
        background: '#d6d',
        color: 'white',
        border: '1px solid black'
    }
        
    }

            td {
                padding: 10px;
                text-align: left;
                font-size: 0.8rem;
                font-weight: normal;
                color: rgba(0,0,0, 0.8);
            }
        }
    }

    tr:hover {background-color: #eeeeee}

    @media screen and (max-width: 768px) {
        width:100%!important;
    }
`;

export const Pagination = styled.div`
    display: flex;
    justify-content:space-between;
    min-width: 40%;
    margin-top: 1rem;
`;

export const PaginationButton = styled.div`
   display: flex;
`;

export const PaginationItem = styled.div`
    margin: 0 1px;
    cursor: pointer;
    border: 1px solid;
    padding: 2px 10px;

    ${props => props.isSelect && {
        background: '#6d6d6d',
        color: 'white',
        border: '1px solid black'
    }
    }
`;

export const ButtonBlue = styled.a`
  width: 10rem;
  text-align: center;
  padding: 0.2rem 0;
  font-size: 0.9rem;
  border:none;
  font-weight:400;
  color:white;
  background-color: #337ab7;
  border-radius: 3px;
  cursor: pointer;
  :focus {
        outline: 0;
        box-shadow: 0 0 0 0;
        border-color:#337ab7;
  }
  :hover {opacity: 0.9}
`;


export const BoxButton = styled.div`
  margin-top:1rem;
  display:flex;
  justify-content:space-between;
  width: 500px;

  a:nth-child(1) {
    width: 10rem;
    text-align: center;
    text-decoration: none;
    padding: 0.2rem 0;
    font-size: 0.9rem;
    border:none;
    font-weight:400;
    color:white;
    background-color: #337ab7;
    border-radius: 3px;
    cursor: pointer;
  :focus {
        outline: 0;
        box-shadow: 0 0 0 0;
        border-color:#337ab7;
  }
  :hover {opacity: 0.9}
  }
  
   a:nth-child(2) {
    width: 10rem;
    text-align: center;
    text-decoration: none;
    padding: 0.2rem 0;
    font-size: 0.9rem;
    border:none;
    font-weight:400;
    color:white;
    background-color: #5bc0de;
    border-radius: 3px;
    cursor: pointer;
  :focus {
        outline: 0;
        box-shadow: 0 0 0 0;
        border-color:lightblue;
  }
  :hover {opacity: 0.9}
  }

  a:nth-child(3) {
    width: 10rem;
    text-align: center;
    text-decoration: none;
    padding: 0.2rem 0;
    font-size: 0.9rem;
    border:none;
    font-weight:400;
    color:white;
    background-color: #d9534f;
    border-radius: 3px;
    cursor: pointer;
    :focus {
            outline: 0;
            box-shadow: 0 0 0 0;
            border-color:#d9534f;
    }
    :hover {opacity: 0.9}
  }

  @media screen and (max-width: 1000px) {
    flex-direction:column;
    height: 90px;
  }
`;