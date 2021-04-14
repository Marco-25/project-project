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

export const SectionLeft = styled.section`
    width: calc(50% - 0.5rem);
    border: 1px solid #ccc;
    padding: 1rem;
    border-radius: 3px;
     h4 {
        border-bottom: 1px solid lightgray;
        margin-bottom: 1rem;
        color: rgba(0,0,0,0.8);
        font-weight:400;
    }
`;

export const SectionRight = styled.section`
    width: calc(50% - 0.5rem);
    border: 1px solid #ccc;
    padding: 1rem;
    border-radius: 3px;
    h4 {
        border-bottom: 1px solid lightgray;
        margin-bottom: 1rem;
        color: rgba(0,0,0,0.8);
        font-weight:400;
    }
`;

export const BoxRow = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    
`;

export const BoxTextArea = styled.div`
    margin-top: 0.7rem;
    label {
        margin-bottom: -1rem;
        font-size: 0.9rem;
        padding: 0.5rem 0;
    }

    textarea {
        width: 100%;
        height: 5rem;
        border-radius: 3px;
        resize: none;
        overflow-y: auto;
        border: 1px solid lightgray;
    }

    textarea:hover { border: 1px solid black;}
`;

