import DropDown from "../Components/DropDown"
import { useState } from "react"

function DropDownPage(){

    const [selection,setSelection]=useState(null)

const handleSelect =(option)=>{
setSelection(option)
}

    const options =[
        {lable:'Red',value: ' red'},
        {lable:'Blue' , value:'blue'},
        {lable:'Green' , value:'green'}
]
   return(
    <div className="flex">
        <DropDown options={options} value={selection} onChange={handleSelect}></DropDown>
    </div>

   )
}



export default DropDownPage