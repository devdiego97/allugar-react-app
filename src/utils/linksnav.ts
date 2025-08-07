import { Home } from "../pages/home"
import { Login } from "../pages/login"
import { Properties } from "../pages/properties"
import { Register } from "../pages/register"


type TlinksProps={
    name:string,
    privateRoute:boolean,
    hasUser:boolean,
    path:string,
    component:()=>React.ReactElement
}
export const lisksNav:TlinksProps[]=[
  {
     name:"home",
    privateRoute:false,
    hasUser:false,
    path:"",
    component:Home
  },
    {
     name:"imóveis",
    privateRoute:false,
    hasUser:false,
    path:"/properties",
    component:Properties
  }, {
     name:"imóveis=l id",
    privateRoute:false,
    hasUser:false,
    path:"/properties/:id",
    component:Properties
  },
    {
     name:"entrar",
    privateRoute:false,
    hasUser:false,
    path:"/login",
    component:Login
  },
    {
     name:"criar conta",
    privateRoute:false,
    hasUser:false,
    path:"/register",
    component:Register
  }
]
