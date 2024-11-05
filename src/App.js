import AccordionPage from "./Pages/AccordionPage"
import DropDownPage from "./Pages/DropDownPage"
import Route from "./Components/Route"
import SideBar from "./Components/SideBar"
import ButtonPage from "./Pages/ButtonPage"
import Modalpage from "./Pages/ModalPage"
import TablePage from "./Pages/TablePage"


function App (){
    return(
         
    <div className="container mx-auto grid grid-cols-6 gap-4 mt-4">
<SideBar/>
    <div className="col-span-5">
<Route path="/accordion">
<AccordionPage/>
</Route>
<Route path="/">
    <DropDownPage/>
</Route>
<Route path="/button">
    <ButtonPage/>
</Route>
<Route path="/modalpage">
    <Modalpage/>
</Route>
<Route path="/tablepage">
    <TablePage/>
</Route>
    </div>
</div>
)
}
export default App