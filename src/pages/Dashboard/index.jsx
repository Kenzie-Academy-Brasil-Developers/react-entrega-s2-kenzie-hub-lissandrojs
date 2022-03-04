import { useEffect, useState } from "react"
import { Redirect } from "react-router-dom"
import { toast } from "react-toastify"
import api from "../../services/api"
import { ContentSelect } from "./styles.js"
const Dashboard = ({infoUser,authenticated})=>{
    const [tecnolog,setTecnolog] = useState([])
    const [token] = useState(JSON.parse(localStorage.getItem("@KenzieHub::token")))
    const [addTech,setAddTech] = useState([])
    const [moldaVisible, setMoldalVisible] = useState(false)
    const [nivel,setNivel] = useState("")
    const [alter,setAlter] =  useState("")
   
    const {id} = infoUser.user || "daa53058-8031-4b2c-8a8e-917ac9efed3f"
    
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
        console.log(nivel)
        console.log(addTech)
    }
    useEffect(()=>{
        listTecnolog()
      })

    const listTecnolog =()=>{
        api.get(`users/${id}`).then((resp)=> setTecnolog(resp.data.techs))
        
    }
    
    
    if(!authenticated){
        return <Redirect to="/"/>
    }
    return(
        <>
        
        <h1>Ola {infoUser.user.name}</h1>
        <button onClick={createTecnolog}> Teste</button>
        <div>
            criar
            <ContentSelect  >
            <input type="text"onChange={(e)=>setAddTech(e.target.value)} ></input>
            <select onChange={(e)=>setNivel(e.target.value)}>
                <option value="selecione" >Selecione</option>
                <option value="Iniciante">Iniciante</option>
                <option value="Intermediário">Intermediário</option>
                <option value="Avançado">Avançado</option>
            </select>
            <button onClick={createTecnolog}>addd</button>
            </ContentSelect>
            
        </div>

            <div>
                deletar 
            </div>

            <div>
                alterar
            </div>

        <div>
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
        </div>
        </>
    )
}

export default Dashboard