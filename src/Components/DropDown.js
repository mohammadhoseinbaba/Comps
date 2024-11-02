import { useState } from "react"

function DropDown({options}){

const [isOpen,setIsopen]=useState(false)

const handleClick = ()=>{
    setIsopen(!isOpen)
}


    const renderedDropDown = options.map((option)=>{
        return (
        <div key={option.value}>
        {option.lable}</div>
        )
    }) 
    return <div>
        <div onClick={handleClick}>Select...</div>
    {isOpen && <div>{renderedDropDown}</div>}
        </div>
}
export default DropDown