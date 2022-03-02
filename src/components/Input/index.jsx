import { Container, ContentInput } from "./styles"

const Input =({label,icon :Icon,register,name,errors,...rest})=>{
    return(
       <Container>
           <div>
           <label>{label}</label>
           {!!errors && <span> * {errors}</span>}
           </div>
           
           <ContentInput isError={!!errors}>
               <input {...register(name)} {...rest}/>
               {Icon && <Icon  ></Icon>}
           </ContentInput>
       </Container>
    )
}
export default Input