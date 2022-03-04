
import styled from "styled-components";
export const ContentSelect = styled.div`
background-color: var(--grey-2);
color: var(--grey-0);
height: 38px;
width: 264px;
border-radius: 4px;
padding: 9px;
margin: 0 auto ;
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