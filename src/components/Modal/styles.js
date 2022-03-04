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
          background-color: grey;
          width:280px ;
          height: 275px ;

          @media(max-width:300px){
              width:260px ;

          }
    @media (min-width:768px){
          width:369px ;
          height: 342px ;
      }
 `