import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from 'yup'
import { useForm } from "react-hook-form"
import { useHistory,Redirect } from "react-router-dom"
import Button from "../../components/Button"
import Input from "../../components/Input"
import { Container, ContainerSelect, Content, ContentForm, ContentSelect } from "./styles"
import api from "../../services/api"
import { useState } from "react"
import { toast } from 'react-toastify';

const Cadastro =({authenticated})=>{
    const schema = yup.object().shape({
        
        email:yup.string().email('Email Invalido').required("Email Obrigatorio"),
        password:yup.string().min(6,"Minimo 6 carcteres").required("Senha e obrigatorio"),
        name: yup.string().required("Nome De usuario Obrigatorio"),
        confirmedPassword: yup.string().required("Senhas diferentes").oneOf([yup.ref("password")], "Senhas desiguais"),
        course_module:yup.string().required("Nome De usuario Obrigatorio")
    })
   const [modulo,setModulo] =useState()

    const {register,handleSubmit,formState:{errors}} = useForm({
        resolver: yupResolver(schema)
    })
    const history = useHistory()
    const onSubmitForm =({name,password,email,course_module,})=> {
        const newUser ={
            email,
            password,
            name,
            bio : "cadastrado",
            contact: "linkedin/",
            course_module: modulo
        }
        api.post("users",newUser).then((resp)=>{
                console.log(resp.data)
                toast.success("Conta Criada com Sucesso")
                return history.push("/")
            })
        
        .catch((error)=>{
            console.log(error)
            toast.error("Erro ao cria a conta , tente um email diferente")
        })
    }
   
    return(
        <Container>
            <Content>
                <h2>Kenzie Hub</h2>
                <Button width="68px" heigth="32px" color="--grey-3" onClick={()=> history.push("/")}>Voltar</Button>
            </Content>
            <ContentForm onSubmit={handleSubmit(onSubmitForm)}>
                <section>
                    <h2>Crie sua conta</h2>
                    <h6>Rapido  gratis , vamos nessa</h6>
                </section>
               <Input errors={errors.name?.message} register={register}  name={"name"} label="Nome" placeholder="Diguite aqui seu nome" type="text"></Input>
               <Input errors={errors.email?.message} register={register} name={"email"} label="E-mail" placeholder="Diguite aqui seu E-mail"type="text"></Input>
               <Input errors={errors.password?.message} register={register} name={"password"}  label="Senha" placeholder="Diguite aqui sua senha" type="password"></Input>
               <Input errors={errors.confirmedPassword?.message} register={register} name={"confirmedPassword"}  label="Confirme a senha" placeholder="Diguite novamente sua senha" type="password"></Input>
               <ContainerSelect>
                        <label>Selecione o Módulo </label>
                        <ContentSelect onChange={(e) => setModulo(e.target.value)} >
                        <select  errors={errors.course_module?.message} {...register("course_module")} name="select">
                                <option value="selecione" >Selecione</option>
                                <option value="Primeiro Módulo">Primeiro Módulo</option>
                                <option value="Segundo Módulo" >Segundo Módulo</option>
                                <option value="Terceiro Módulo">Terceiro Módulo</option>
                                <option value="Quarto Módulo">Quarto Módulo</option>
                            </select>
                        </ContentSelect>
               </ContainerSelect>
               <Button type="submit" heigth="48px" color="--color-primary-Negative"> Cadastrar</Button>
            </ContentForm>
        </Container>
    )
}

export default Cadastro