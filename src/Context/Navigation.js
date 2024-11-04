import { Children, createContext } from "react";

const NavigationContext=createContext()
const NavigationProvider=({Children})=>{
    return <NavigationContext.Provider value={{}}>
        {Children}
    </NavigationContext.Provider>
}


export {NavigationProvider}
export default NavigationContext