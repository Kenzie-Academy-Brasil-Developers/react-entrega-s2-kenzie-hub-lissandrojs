
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
    justify-content: space-between;
    align-items: center;
   button{
       font-size:20px ;
       font-weight:bold ;
   }
    
`




export const ContainerTech = styled.div`
    width:296px ;
    background-color:var(--grey-3) ;
    border-radius:4px ;
    
    @media (min-width:768px) {
        width:779px ;
        
    }


`

export const TitleTech = styled.div`
    width: 50%;
    
   
`

export const Section = styled.section`
    display:flex ;
    align-content: center;
    align-items: center;
    justify-content: space-around;
    flex-direction:column ;
    margin:0 auto ;
    width:296px ;
    
    @media (min-width:768px) {
        width:779px ;
        
    }

`
export const ContainerTitle = styled.div`
    width:100% ;
    display:flex ;
    margin:0 auto ;
`
export const ItemList = styled.div`
    width: 279px;
    height: 48px;
    color:var(--grey-0) ;
    border-radius:4px ;
    margin:12px;
    background-color: var(--grey-4);
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding:10px ;
    p{
        font-size: 14px;
        font-weight:400 ;
        color:var(--grey-1) ;
    }
    h4{
        font-weight:700 ;
        color:var(--grey-0) ;
    }
    :hover{
        background-color: var(--grey-2);
    }
    @media (min-width:768px){
        width:742px ;
    }
`