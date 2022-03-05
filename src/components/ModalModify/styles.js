import styled from "styled-components";

export const Container = styled.div`
    display:flex ;
    width:100% ;
    height:90% ;
    position:absolute ;
    justify-content: center;
    align-items: center;
    overflow:none ;
    
   
`
export const ContentModal = styled.div`    
          background-color: var(--grey-3);
          width:296px ;
          height: 275px ;
          margin-bottom:188px ;
          border-radius: 4px;

          @media(max-width:300px){
              width:260px ;

          }
    @media (min-width:768px){
          width:369px ;
          height: 342px ;
          margin-bottom: 61px;
      }
 `
 export const ContentSelect = styled.div`
 background-color: var(--grey-2);
 color: var(--grey-0);
 height: 38px;
 width: 264px;
 border-radius: 4px;
 padding: 9px;
 margin: 10px auto ;
 @media (min-width:768px){
     height: 48px;
     width: 329px;
    
 }
 @media (max-width:300px){
     width: 240px;
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


export const Header = styled.header`
        width: 296px;
        height: 40px;
        background-color:var(--grey-2) ;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px;
        border-radius: 6px 6px 0 0;
    @media(min-width:768px){
        width: 369px;
        height: 50px;
    }
    @media (max-width:300px){
     width: 260px;  
    }
    button{
        background-color:transparent ;
    }

`
export const ContainerButton = styled.div`
    display:flex ;
    margin-left: 20px;
    margin-top: 20px;
    @media (max-width:300px){
        width:240px ;
        margin-left: 7px;
    }

`

export const NameProject = styled.div`
    
    margin: 10px auto;
    width: 263px;
    height: 38px;
    border-radius: 4px;
    border: 2px solid var(--grey-0);
    background-color: var(--grey-2);
    color: var(--grey-0);
    p{
        margin-left:10px ;
        margin-top:10px ;
    }
    @media (min-width:768px){
        width: 329px;
        height: 48px;

    }
    @media (max-width:300px){
        width:240px ;
    }

`

export const ContentLabel = styled.div`
   margin: 15px 23px;


`

export const ButtonDelete = styled.div`
    margin-left:20px ;
    @media (min-width:768px){
            button{
                width:98px;
                height:48px ;
            }
        }
    @media (max-width:300px){
        width:240px ;
    }
    @media (max-width:300px){
        margin-left:5px ;
    }

`

export const ButtonChange = styled.div`
    @media (min-width:768px){
        button{
            width:204px ;
            height:48px ;
        }
    }
    @media (max-width:300px){
        width:240px ;
    }


`