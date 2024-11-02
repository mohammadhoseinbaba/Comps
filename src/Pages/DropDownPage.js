import DropDown from "../Components/DropDown"
import { useState } from "react"

function DropDownPage(){

    const [selection,setSelection]=useState(null)

const handSelect =(option){
setSelection(option)
}

    const options =[
        {lable:'Red',value: ' red'},
        {lable:'Blue' , value:'blue'},
        {lable:'Green' , value:'green'}
]
   return(
    <div>
        
        <DropDown options={options} selection={selection} onSelect={handSelect}></DropDown>
    </div>

   )
}



export default DropDownPage