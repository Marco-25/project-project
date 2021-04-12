import styled from 'styled-components';

export const BoxButton = styled.div`
    display: flex;
    justify-content: flex-end;
    margin: 1rem 0;
`;

export const Select = styled.select`
    margin: 1rem 0; 
    width: 40%;
    height: 2rem;
    margin-bottom: 0.5rem;
    color: gray;
    padding-left: 0.6rem;
    font-weight: bold;
    border-radius: 3px;
    background-color: white;
`;

export const BoxColumn = styled.div`
    display: flex;
    flex-direction: column;
    margin: 1rem 0;
`;

export const BoxLabel = styled.div`
    label {
        display:block;
        margin-bottom: -1rem;
        font-size: 0.9rem;
    }
`;