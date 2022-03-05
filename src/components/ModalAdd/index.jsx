import { Container, ContentModal,ContentSelect,Header,divSelect } from "./styles"
import Button from "../Button"
const ModalAdd =({setModalDiplay,setAddTech,setNivel ,createTecnolog})=>{
    return(
        <>
            <Container>
                <ContentModal>
                    <Header>
                        <h3>Cadastrar Tecnologia</h3>
                        <Button  onClick={()=>setModalDiplay(false)}>X</Button>
                    </Header>
                    <ContentSelect  >
                        <div>
                            <label>Nome</label>
                            <input type="text"onChange={(e)=>setAddTech(e.target.value)} ></input>
                        </div>
                        <divSelect>
                            <label>Selecionar status</label>
                            <select onChange={(e)=>setNivel(e.target.value)}>
                            <option value="Selecione">Selecione</option>
                                <option value="Iniciante">Iniciante</option>
                                <option value="Intermediário">Intermediário</option>
                                <option value="Avançado">Avançado</option>
                            </select>
                        </divSelect>
                        <Button width="263px" heigth="38px" color="--color-primary" onClick={createTecnolog}>Cadastar Tecnologia</Button>
                    </ContentSelect>
                </ContentModal>
            </Container>
        </>
    )
}
export default ModalAdd