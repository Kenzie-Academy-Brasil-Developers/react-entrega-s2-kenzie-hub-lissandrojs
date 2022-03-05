import { Container, ContentModal,Header, ContentSelect, ContainerButton, NameProject,ContentLabel, ButtonChange, ButtonDelete} from "./styles"
import Button from "../Button"
const ModalModify =({setModalChange,alterTech,deleteTech,setAlter,tech})=>{
    return(
        <>
            <Container>
                <ContentModal>
                    <Header>
                        <h3>Tecnologia Detalhes</h3>
                        <Button onClick={()=> setModalChange(false)}>X</Button>
                    </Header>
                            <ContentLabel>

                                <label>Nome do Projeto</label>
                            </ContentLabel>
                        <NameProject>
                                    <div>
                                        <p>{tech.title}</p>
                                    </div>
                         </NameProject>
                                 <ContentLabel>
                                
                                        <label >Status</label>
                                </ContentLabel>

                        <ContentSelect>                       
                            
                                <select onChange={(e)=>setAlter(e.target.value)}>
                                    <option value="Selecione">Selecione</option>
                                    <option value="Iniciante">Iniciante</option>
                                    <option value="Intermediário">Intermediário</option>
                                    <option value="Avançado">Avançado</option>
                                </select>
                        </ContentSelect>   

                    <ContainerButton>
                        <ButtonChange>
                            <Button width="163px" heigth="38px" color="--color-primary-Negative" id={tech.id}onClick={(e)=> alterTech(e.target.id)}>Salvar alterações</Button>
                        </ButtonChange>
                        <ButtonDelete>
                            <Button width="78px" heigth="38px" color="--grey-1"id={tech.id} onClick={(e)=> deleteTech(e.target.id)}>Excluir</Button>
                        </ButtonDelete>
                    </ContainerButton>

                </ContentModal>
            </Container>
        </>
    )
}
export default ModalModify