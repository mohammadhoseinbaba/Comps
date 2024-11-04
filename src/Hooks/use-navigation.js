import { useContext } from "react";
import NavigationContext from "../Context/Navigation";
function useNavigation(){
return useContext(NavigationContext)
}

export default useNavigation