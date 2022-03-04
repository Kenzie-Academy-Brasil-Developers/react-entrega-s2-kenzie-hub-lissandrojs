import { Container, ContentModal } from "./styles"
import Button from "../Button"
const Modal =({setModalDiplay ,Childen})=>{
    return(
        <>
            <Container>
                <ContentModal>
                    <Button onClick={()=>setModalDiplay(false)}>X</Button>
                    {Childen}
                </ContentModal>
            </Container>
        </>
    )
}
export default Modal