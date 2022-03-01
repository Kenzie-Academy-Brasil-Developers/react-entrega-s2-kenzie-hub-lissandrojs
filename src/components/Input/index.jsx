import { Container, ContentInput } from "./styles"

const Input =({label,...rest})=>{
    return(
       <Container>
           <label>{label}</label>
           <ContentInput>
               <input {...rest}/>
           </ContentInput>
       </Container>
    )
}
export default Input