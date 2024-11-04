import { createContext, useState , useEffect} from "react";

const NavigationContext=createContext()
const NavigationProvider=({children})=>{
const [currentPath , setCurrrentPath ]=useState(window.location.pathname)

useEffect(()=>{
    const handler =()=>{
setCurrrentPath(window.location.pathname)
    }
    window.addEventListener('popState',handler)
return ()=>{
    window.removeEventListener('popState', handler)
}

},[])

const navigate = (to)=>{
window.history.pushState({},'',to)
setCurrrentPath(to)
}

    return <NavigationContext.Provider value={{currentPath , navigate }}>
        {children}
    </NavigationContext.Provider>
}


export {NavigationProvider}
export default NavigationContext