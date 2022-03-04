import { Route, Switch } from "react-router-dom"
import Login from "../pages/Login"
import Cadastro from "../pages/Cadastro"
import { useState } from "react";
import Dashboard from "../pages/Dashboard";
import { useEffect } from "react";
const Routes =()=>{
    const [infoUser,SetInfoUser] = useState("")
    const [authenticated,setAuthenticated] = useState(false)
    useEffect(()=>{
        const token = JSON.parse(localStorage.getItem("@KenzieHub::token"));
        if(token){
            setAuthenticated(true)
        }

    },[authenticated])

    return(
        <Switch>
            <Route exact path="/">
                <Login authenticated={authenticated} setAuthenticated={setAuthenticated} SetInfoUser={SetInfoUser} />
            </Route>
            <Route path="/cadastro">
               <Cadastro authenticated={authenticated} />
            </Route>
            <Route  path="/dashboard" >
                <Dashboard authenticated={authenticated}  infoUser={infoUser}/>
            </Route>
        </Switch>
    )
}
export default Routes