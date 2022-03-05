import styled from "styled-components";

export const Container = styled.div`
    display:flex ;
    width:100% ;
    height:90% ;
    position:absolute ;
    justify-content: center;
    align-items: center;
    overflow:none ;
    label{
        margin: 10px 0;
    }
   
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
    display: flex;
  
    flex-direction: column;
    margin:0 auto ;
    width: 238px;
    height: 275px;

 @media (min-width:768px){
    height: 369px;
    width: 329px;
    
    
    
 }
 @media (max-width:280px){
     width: 238px;
     height: 275px;
 }
 div{
     display:flex ;
     flex-direction:column ;
 }

 input{
     margin:10px 0 ;
    width:263px ;
    height: 38px;
    border-radius: 4px ;
    border:2px solid var(--grey-0);
    background-color: var(--grey-2);
    color: var(--grey-0);
    @media (min-width:768px){      
        width:329px ;
        height: 48px;
    }
    @media (max-width:300px){
        width:240px ;
    }
 }
 select{
    width:263px ;
    height: 38px;
    margin:10px 0 ;
     background: transparent;
     border: none;
     align-items: center;
     flex: 1;
     background-color: var(--grey-2);
     color: var(--grey-1);
     
     &::placeholder{
         color: var(--grey-1);
         
     }
     @media (min-width:768px){      
            width:329px ;
            height: 48px;
            }
    @media (max-width:300px){
        width:240px ;
    }
     
 }
 button{
    margin: 15px 0 0 0;
    @media (min-width:768px){      
        width:329px ;
        height: 48px;
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
export const divSelect = styled.div`
    width:329px ;
    height: 48px;
    border-radius: 4px ;
    border:2px solid var(--grey-0);

`