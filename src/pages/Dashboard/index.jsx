import { useEffect, useState } from "react"
import { useHistory ,Redirect} from "react-router-dom"
import { toast } from "react-toastify"
import Button from "../../components/Button"
import ModalAdd from "../../components/ModalAdd"
import api from "../../services/api"
import { ContainerTech, ContainerTitle, ContentTitle, Header, MainUser, Section, TitleTech ,ItemList} from "./styles.js"
import ModalModify from "../../components/ModalModify"

 

const Dashboard = ({infoUser,authenticated})=>{

    const [tecnolog,setTecnolog] = useState([])
    const [token] = useState(JSON.parse(localStorage.getItem("@KenzieHub:token")))
    const [user] = useState(JSON.parse(localStorage.getItem("@KenzieHub:user")|| ""))
    const [addTech,setAddTech] = useState([])
    const [nivel,setNivel] = useState("")
    const [modalDiplay,setModalDiplay] = useState(false)
    const [alter,setAlter] =  useState("")
    const [modalChange,setModalChange] = useState(false)
    
    const [teste,setTeste]= useState()

    
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
        return history.push("/")
    }
  
    
    return(
        <>
        
        {modalDiplay && <ModalAdd setNivel={setNivel} setAddTech={setAddTech} createTecnolog={createTecnolog} setModalDiplay={setModalDiplay} />}
        {modalChange  &&<ModalModify tech={teste} setAlter={setAlter} deleteTech={deleteTech} alterTech={alterTech} setModalChange={setModalChange}></ModalModify>}

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
                    
                        <Button width="32px" heigth="32px" color="--grey-3" onClick={()=> setModalDiplay(true)}>+</Button>                    
                    
            </ContentTitle>
            
        </ContainerTitle>

        <ContainerTech>
        {tecnolog.map((tech)=> 
            <ItemList id={tech.id} onClick={(e)=> {
                    setTeste(tech)
                    setModalChange(true)
                 }} key={tech.id}>

                <h4 id={tech.id}> {tech.title}</h4>
                <p id={tech.id}>{tech.status}</p>
           
            </ItemList>           
        )}
        
        </ContainerTech>
        </Section>
        </>
    )
}

export default Dashboard