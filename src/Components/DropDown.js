import { useState , useEffect , useRef} from "react"
import {GoChevronDown , GoChevronLeft} from 'react-icons/go'
import Panel from "./Panel"

function DropDown({options ,value, onChange}){

const [isOpen,setIsopen]=useState(false)

const divEL = useRef()


useEffect(()=>{
const handler=(event)=>{
    console.log(divEL)
}
document.addEventListener('click',handler,true)

return ()=>{
    document.removeEventListener('click',handler)
}
},[])


const handleClick = ()=>{
    setIsopen(!isOpen)


}

const handleOptionClick = (event)=>{
        //close dropdown
    setIsopen(false)
        //what option has the user selected
onChange(event)

}

    const renderedDropDown = options.map((option)=>{
        return (
        <div className="hover:bg-sky-100 rounded cursor-pointer p-1" onClick={()=>handleOptionClick(option)} key={option.value}>
        {option.lable}</div>
        )
    }) 

    return <div ref={divEL} className="w-48 relative">
        <Panel className="flex justify-between items-center  cursor-pointer " onClick={handleClick}>{value?.lable||'select'}{isOpen ? <GoChevronDown/> : <GoChevronLeft/>}</Panel>
    {isOpen && <Panel className="absolute top-full ">{renderedDropDown}</Panel>}
        </div>
}
export default DropDown