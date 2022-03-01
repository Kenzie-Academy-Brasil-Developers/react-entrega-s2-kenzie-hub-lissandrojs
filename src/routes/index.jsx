import { Route, Switch } from "react-router-dom"
import Login from "../pages/Login"
import Cadastro from "../pages/Cadastro"
const Routes =()=>{
    return(
        <Switch>
            <Route exact path="/">
                <Login/>
            </Route>
            <Route path="/cadastro">
               <Cadastro/>
            </Route>
        </Switch>
    )
}
export default Routes