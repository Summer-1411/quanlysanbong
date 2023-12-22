import { createContext, useState } from "react"
const StateContext = createContext()
function GlobalState({children} ){
    const [yard, setYard] = useState()
    const value = {
        yard,
        setYard
    }
    return (
        <StateContext.Provider value={value}>
            {children}
        </StateContext.Provider>
    )
}
export {StateContext, GlobalState}