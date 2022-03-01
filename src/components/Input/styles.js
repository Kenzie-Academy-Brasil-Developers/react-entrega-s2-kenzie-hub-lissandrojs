import styled from "styled-components";


export const Container = styled.div`
    text-align: left;
    color: var(--grey-0);
    font-size: 17px;
`

export const ContentInput = styled.div`
    background-color: var(--grey-2);
    color: var(--grey-0);
    height: 38px;
    width: 264px;
    border-radius: 4px;
    padding: 9px;
    margin: 10px 0 ;
    @media (min-width:768px){
        height: 48px;
        width: 329px;
    }
    @media (max-width:280px){
        width: 238px;
        height: 35px;
    }
    
    input{
        background: transparent;
        border: none;
        align-items: center;
        flex: 1;
        color: var(--grey-0);
        &::placeholder{
            color: var(--grey-1);
        }
    }

`