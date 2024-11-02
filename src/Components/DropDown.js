import { useState } from "react"

function DropDown({options}){

const [isOpen,setIsopen]=useState(false)

const handleClick = ()=>{
    setIsopen(!isOpen)

    //what option has the user selected
}

const handleOptionClick = ()=>{
    console.log('i should close')
    setIsopen(false)
}
    const renderedDropDown = options.map((option)=>{
        return (
        <div onClick={handleOptionClick} key={option.value}>
        {option.lable}</div>
        )
    }) 
    return <div>
        <div  onClick={handleClick}>Select...</div>
    {isOpen && <div>{renderedDropDown}</div>}
        </div>
}
export default DropDown