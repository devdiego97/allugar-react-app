import type { ReactNode } from "react"
import { Header } from "../header"
import { Footer } from "../footer"

type props={
    children:ReactNode
}
export const Layout=({children}:props)=>{


    return <div>
        <Header />
        <main className="flex justify-center ">
            <div className="w-[80vw] min-h-[100vh] !p-12">
                {children}
            </div>
        </main>
        <Footer />
    </div>
}