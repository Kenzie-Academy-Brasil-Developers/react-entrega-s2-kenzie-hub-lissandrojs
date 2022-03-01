import { useHistory } from "react-router-dom"
import Button from "../../components/Button"
import Input from "../../components/Input"
import { Container, ContainerSelect, Content, ContentForm, ContentSelect } from "./styles"

const Cadastro =()=>{
    const history = useHistory()
    return(
        <Container>
            <Content>
                <h2>Kenzie Hub</h2>
                <Button width="68px" heigth="32px" color="--grey-3" onClick={()=> history.push("/")}>Voltar</Button>
            </Content>
            <ContentForm>
                <section>
                    <h2>Crie sua conta</h2>
                    <h6>Rapido  gratis , vamos nessa</h6>
                </section>
               <Input label="Nome" placeholder="Diguite aqui seu nome" type="text"></Input>
               <Input label="E-mail" placeholder="Diguite aqui seu E-mail"type="text"></Input>
               <Input label="Senha" placeholder="Diguite aqui sua senha" type="password"></Input>
               <Input label="Confirme a senha" placeholder="Diguite novamente sua senha" type="password"></Input>
               <ContainerSelect>
                        <label>Selecione o Módulo </label>
                        <ContentSelect>
                        <select name="select">
                                <option value="selecione" selected>Selecione</option>
                                <option value="Primeiro Módulo">Primeiro Módulo</option>
                                <option value="Segundo Módulo" >Segundo Módulo</option>
                                <option value="Terceiro Módulo">Terceiro Módulo</option>
                                <option value="Quarto Módulo">Quarto Módulo</option>
                            </select>
                        </ContentSelect>
               </ContainerSelect>
               <Button  heigth="48px" color="--color-primary-Negative"> Cadastrar</Button>
            </ContentForm>
        </Container>
    )
}

export default Cadastro