import styled from "styled-components";


export const Container = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const Content = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 295px;
    margin: 25px 0;
    
    h2{
        color: var(--color-primary);
    }
    @media (min-width:768px){
        width: 350px;
        
    }
    @media (min-width: 320px){
        width: 270px;
    }
    @media(max-width:320px){
        width: 250px;
    }
`
export const ContentForm = styled.div`
    width: 295px;
    height: 568px;
    background-color: var(--grey-3);
    align-items: center;
    display: flex;
    flex-direction: column;
    section{
        width: 100%;
        height: 23%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        margin-top:15px;
    }
    
    h2{
        color: var(--grey-0);
    }
    h6{
        color: var(--grey-1);
    }
    @media (min-width:768px){
        width: 370px;
        height: 711px;
        button{
            width: 324px;
        }
    }
    @media (max-width:320px ){
        width: 265px;
        button{
            margin-bottom: 15px;
            width: 245px;
        }
    }
    @media (max-width:767px){
        button{

            width: 265px;
            margin-bottom: 15px;
        }
    }
    @media(max-width:420px){
        button{
        margin-bottom: 15px;
        width: 255px;
        }
    }
    @media (max-width:280px){
       button{
        margin-bottom: 15px;
           width: 240px;
       }
    }
    button{
    margin-top: 10px;
}

`

export const ContentSelect = styled.div`
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
    select{
        width: 100%;
        background: transparent;
        border: none;
        align-items: center;
        flex: 1;
        background-color: var(--grey-2);
        color: var(--grey-1);
        &::placeholder{
            color: var(--grey-1);
        }
    }

`
export const ContainerSelect = styled.div`
    text-align: left;

`