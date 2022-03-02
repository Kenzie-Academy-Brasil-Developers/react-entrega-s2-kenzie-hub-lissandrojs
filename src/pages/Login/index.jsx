import { Link } from 'react-router-dom';
import {Container,ContainerForm,Form} from './styles'
import Button from '../../components/Button';
import { useHistory } from 'react-router-dom';
import Input from '../../components/Input';
import {FiEye} from'react-icons/fi'
import { useForm } from 'react-hook-form';
import  * as yup from "yup"
import {yupResolver} from '@hookform/resolvers/yup'
import api from '../../services/api';
import { toast } from 'react-toastify';
const Home =({SetInfoUser})=>{
    const schema = yup.object().shape({
        email:yup.string().email("E-mail invalido").required("Campo Obrigatorio"),
        password:yup.string().required("Campo Obrigatorio")

    })
    const {register,handleSubmit,formState:{errors}, }= useForm({
        resolver: yupResolver(schema)
    })

    const onSubmitLogin =({email,password})=> {
        const newLog ={
            email,
            password
        }
        api.post("sessions",newLog).then((resp)=>{
            toast.success("Login Concluido")
            SetInfoUser(resp.data)
            history.push("/dashboard")
        })
        .catch((error)=>{
            toast.error("Email ou senha Incorreto")
            console.log(error)
        })
    }
    
    const history = useHistory("")
    return(
        <Container>
            <h1>Kenzie Hub</h1>
            <Form onSubmit={handleSubmit(onSubmitLogin)}>
                <ContainerForm>
                    <h3>Login</h3>
                    <Input errors={errors.email?.message} register={register} name="email" label="E-Mail" placeholder="Seu E-Mail"/>
                    <Input errors={errors.password?.message} register={register} name="password" icon={FiEye} label="Senha" placeholder="Sua Senha" type ="password" />
                    <Button width="324px" heigth="48px"  color="--color-primary">Entrar</Button>
                    <Link to="/cadastro"> ainda não tem uma conta?</Link>
                    <Button type="submit" width="324px" heigth="48px" color="--grey-1" onClick={()=> history.push("/cadastro")}> Cadastre-se</Button>     
                </ContainerForm>
            </Form>
        </Container>
    )
}
export default Home