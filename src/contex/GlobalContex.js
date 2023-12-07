import React,{createContext} from "react";
export const GlobalContext= createContext()

const GlobalContextProvider=(propes)=>{
   const std={
        name:'neha',
        age:22
    }
return(
    <GlobalContext.Provider value={std}>
        {propes.children}

    </GlobalContext.Provider>
)
}

export default GlobalContextProvider