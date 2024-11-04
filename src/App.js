import AccordionPage from "./Pages/AccordionPage"
import DropDownPage from "./Pages/DropDownPage"
import Link from "./Components/Link"
import Route from "./Components/Route"

function App (){
    return(
         
    <div>
<Link to="/accordion" >Accordion</Link>
<Link to="/dropdown">DropDown</Link>
    <div>
<Route path="/accordion">
<AccordionPage/>
</Route>
<Route path="/dropdown">
    <DropDownPage/>
</Route>
    </div>
</div>
)
}
export default App