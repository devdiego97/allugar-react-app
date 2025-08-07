import { Link } from "react-router-dom"
import { lisksNav } from "../../../utils/linksnav"

export const Header=()=>{
    return <header className="flex justify-around bg-green-900 !p-[22px] ">
        <div>
          <h1 className="text-yellow-500 text-2xl">Allugar</h1>
        </div>
       <div>
          <nav>
            <ul>
                 {lisksNav.map((i,k)=><Link className="text-sm !mx-[12px] text-white hover:text-yellow-500 " key={k} to={i.path}>{i.name}</Link>)} 
            </ul>
         </nav>

       </div>
    </header>
}