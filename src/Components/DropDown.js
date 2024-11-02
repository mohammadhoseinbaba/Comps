import { useState } from "react"

function DropDown({options ,selection,onSelect}){

const [isOpen,setIsopen]=useState(false)

const handleClick = ()=>{
    setIsopen(!isOpen)


}

const handleOptionClick = (event)=>{
    //close dropdown
    setIsopen(false)
        //what option has the user selected
onSelect(event)

}

    const renderedDropDown = options.map((option)=>{
        return (
        <div onClick={()=>handleOptionClick(option)} key={option.value}>
        {option.lable}</div>
        )
    }) 


let content = 'select...';
if (selection){
    content = selection.lable
}



    return <div>
        <div  onClick={handleClick}>{content}</div>
    {isOpen && <div>{renderedDropDown}</div>}
        </div>
}
export default DropDown