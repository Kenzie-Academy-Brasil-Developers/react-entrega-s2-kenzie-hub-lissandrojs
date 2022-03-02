import { Route, Switch } from "react-router-dom"
import Login from "../pages/Login"
import Cadastro from "../pages/Cadastro"
import { useState } from "react";
import Dashboard from "../pages/Dashboard";
const Routes =()=>{
    const [infoUser,SetInfoUser] = useState("")
    return(
        <Switch>
            <Route exact path="/">
                <Login SetInfoUser={SetInfoUser} />
            </Route>
            <Route path="/cadastro">
               <Cadastro/>
            </Route>
            <Route path="/dashboard" >
                <Dashboard infoUser={infoUser}/>
            </Route>
        </Switch>
    )
}
export default Routes