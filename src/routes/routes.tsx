import { Routes as Router,Route } from "react-router-dom"
import { lisksNav } from "../utils/linksnav"


export const Routes=()=>{
    return <Router>
        {
            lisksNav.map((l,k)=><Route key={k} path={l.path} Component={l.component} />)
        }
    </Router>
}