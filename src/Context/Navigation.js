import { createContext, useState , useEffect} from "react";

const NavigationContext=createContext()
const NavigationProvider=({children})=>{
const [currentPath , setCurrrentPath ]=useState(window.location.pathname)
useEffect(()=>{
    const handler =()=>{
setCurrrentPath(window.location.pathname)
    }
    window.addEventListener('popstate',handler)
return ()=>{
    window.removeEventListener('popstate', handler)
}

},[])

    return <NavigationContext.Provider value={{}}>
        {currentPath}
        {children}
    </NavigationContext.Provider>
}


export {NavigationProvider}
export default NavigationContext