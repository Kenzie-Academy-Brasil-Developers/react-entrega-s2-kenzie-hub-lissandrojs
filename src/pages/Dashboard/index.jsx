import { useEffect, useState } from "react"
import { useHistory ,Redirect} from "react-router-dom"
import { toast } from "react-toastify"
import Button from "../../components/Button"
import Modal from "../../components/Modal"
import api from "../../services/api"
import { ContainerTech, ContainerTitle, ContentSelect, ContentTitle, Header, MainUser, Section, TitleTech } from "./styles.js"
import jwt_decode from "jwt-decode";
 

const Dashboard = ({infoUser,authenticated})=>{

    const [tecnolog,setTecnolog] = useState([])
    const [token] = useState(JSON.parse(localStorage.getItem("@KenzieHub:token")))
    const [user] = useState(JSON.parse(localStorage.getItem("@KenzieHub:user")))
    const [addTech,setAddTech] = useState([])
    const [nivel,setNivel] = useState("")
    const [modalDiplay,setModalDiplay] = useState(false)
    const [alter,setAlter] =  useState("")


    // const user= jwt_decode(token);
    

    
    const history = useHistory()
    
    const deleteTech = (value)=>{
        api.delete(`users/techs/${value}`,{
            headers:{
                Authorization : `Bearer ${token}`
            }
        })
    }

    
    const alterTech =(value)=>{
        api.put(`users/techs/${value}`,{
            status : alter
        },
        {
            headers:{
                Authorization: `Bearer ${token}`
            }
        })
    }

    const createTecnolog =()=>{
    
        api.post("users/techs",
        {
            title: addTech,
	        status: nivel
        },
        {
            headers:{
                Authorization: `Bearer ${token}`
            }
        }).then((_)=> toast.success("Tecnologia cadstrada")).catch((err)=> console.log(err))
    
    }
    
    useEffect(()=>{
        listTecnolog()
      },[tecnolog])

    const listTecnolog =()=>{
        api.get(`users/${user.id}`).then((resp)=> setTecnolog(resp.data.techs))
        
    }
    
    const exitPage=()=>{
        localStorage.clear()
        return history.push("/login")
    }
    
    if(!authenticated){
        return  <Redirect to="/"/>
        
    }

    return(
        <>
        <Button onClick={()=> setModalDiplay(true)}>Click me</Button>
        {modalDiplay && <Modal setModalDiplay={setModalDiplay} />}


        <Header>
            <h2>Kenzie Hub</h2>
            <Button width="68px" heigth="32px" color="--grey-3" onClick={exitPage}>Sair</Button>
        </Header>

        <MainUser>
            <h3>Ola, {user.name}</h3>
            <p> {user.course_module}</p>
        </MainUser>
        <Section>

        

        <ContainerTitle>
            <ContentTitle>
                    <TitleTech>
                        <h3>Tecnologias</h3>
                    </TitleTech>

                    <ContentSelect  >
                        <input type="text"onChange={(e)=>setAddTech(e.target.value)} ></input>
                        <select onChange={(e)=>setNivel(e.target.value)}>
                            <option value="Iniciante">Iniciante</option>
                            <option value="Intermediário">Intermediário</option>
                            <option value="Avançado">Avançado</option>
                        </select>
                        <button onClick={createTecnolog}>addd</button>
                    </ContentSelect>
            </ContentTitle>
            
        </ContainerTitle>

        <ContainerTech>
        {tecnolog.map((tech)=> 
            <div  key={tech.title}>

                <p> {tech.title}</p>
                <p >{tech.status}</p>
                <button id={tech.id}onClick={(e)=> alterTech(e.target.id)}> alterar</button>
                <button id={tech.id} onClick={(e)=> deleteTech(e.target.id)}>Delete</button>
                <select onChange={(e)=>setAlter(e.target.value)}>
                <option value="Iniciante">Iniciante</option>
                <option value="Intermediário">Intermediário</option>
                <option value="Avançado">Avançado</option>
            </select>
            </div>
        )}
        </ContainerTech>
        </Section>
        </>
    )
}

export default Dashboard