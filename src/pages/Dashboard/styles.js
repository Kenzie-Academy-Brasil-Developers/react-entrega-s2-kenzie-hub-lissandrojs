
import styled from "styled-components";

export const Header = styled.header`
    width:100%;
    height:72px ;
    display:flex ;
    align-content: center;
    align-items: center;
    justify-content: space-around;
    border-bottom: 1px solid var(--grey-3);
    h2{
        color:var(--color-primary) ;
    }

`
export const MainUser = styled.main`
    width:100%;
    height:125px ;
    display:flex ;
    align-content: center;
    align-items: center;
    justify-content: space-around;
    border-bottom: 1px solid var(--grey-3);
    h2{
        color:var(--grey-0) ;
    }
    p{
        color: var(--grey-1) ;
        font-size:14px ;
    }
`
export const ContentTitle = styled.div`
    width: 100%;
    height:72px ;
    display:flex ;
   
    
`


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

export const ContainerTech = styled.div`
    width:278px ;
    height: 416p;
    background-color:var(--grey-3) ;
    border-radius:4px ;
    @media screen {
        width:779px ;
        
    }


`

export const TitleTech = styled.div`
    width: 50%;
`

export const Section = styled.section`
    width:100% ;
    display:flex ;
    align-content: center;
    align-items: center;
    justify-content: space-around;
    flex-direction:column ;
`
export const ContainerTitle = styled.div`
    width:100% ;
    display:flex ;
`