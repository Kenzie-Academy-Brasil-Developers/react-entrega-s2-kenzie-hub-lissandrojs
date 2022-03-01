import { Link } from 'react-router-dom';
import {Container,ContainerForm,Form} from './styles'
import Button from '../../components/Button';
import { useHistory } from 'react-router-dom';
import Input from '../../components/Input';
const Home =()=>{
    const showPassword =()=>{
        let input = document.querySelector('#password');
            input.getAttribute('type') === 'password'?
            input.setAttribute('type', 'text') :  input.setAttribute('type', 'password');
    }
    const history = useHistory("")
    return(
        <Container>
            <h1>Kenzie Hub</h1>
            <Form>
                <ContainerForm>
                    <h3>Login</h3>
                    {/* <label>Email</label>
                    <input type="text" name='email' placeholder='Diguite seu email'/>
                    <label >senha</label>
                    <div>
                        <input type="password" id="password" name="password" placeholder="Digite sua senha"/>
                        <span onClick={showPassword} className="lnr lnr-eye"></span>
                    </div> */}
                    <Input label="E-Mail" placeholder="Seu E-Mail"/>
                    <Input label="Senha" placeholder="Sua Senha" type ="password"/>
                    <Button width="324px" heigth="48px"  color="--color-primary">Entrar</Button>
                    <Link to="/cadastro"> ainda não tem uma conta?</Link>
                    <Button width="324px" heigth="48px" color="--grey-1" onClick={()=> history.push("/cadastro")}> Cadastre-se</Button>     
                </ContainerForm>
            </Form>
        </Container>
    )
}
export default Home