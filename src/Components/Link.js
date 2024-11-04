import { useContext } from "react";
import NavigationContext from "../Context/Navigation";

function Link ({to , children }){
    const {navigate} = useContext(NavigationContext)

    const handleclick=(event)=>{
    event.preventDefault(); 

    navigate(to)
    }
return <a onClick={handleclick} href={to}>{children}</a>
}
export default Link