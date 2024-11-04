import useNavigation from "../Hooks/use-navigation";

function Route({path,children}){
const {currentPath}=useNavigation()
if( path===currentPath ){
    return children
}
return null;
}
export default Route