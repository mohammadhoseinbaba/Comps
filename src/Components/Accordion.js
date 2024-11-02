import { useState } from "react";
import {GoChevronDown,GoChevronLeft} from 'react-icons/go'


function Accordion ({items}){
    const [expandedIndex,setExpandedIndex]=useState(-1)

    const handleClick=(nextindex)=>{
        if(expandedIndex===nextindex){
            setExpandedIndex(-1)
        }else{
            setExpandedIndex(nextindex)
        }
    }
    
    const renderedItems = items.map((item,index)=>{
const isExpanded = index===expandedIndex

const icon = <span>
    {isExpanded ? <GoChevronDown/> : <GoChevronLeft/>}
</span>
 
        return (
            <div key={item.id}>
            <div className="flex justify-between p-3 bg-gray-50 border-b items-center cursor-pointer" onClick={()=>handleClick(index)}>
                {item.lable}
                {icon}
                </div>
            {isExpanded && <div className="border-b p-5">{item.content}</div>}
            </div>
        )
    })
    return <div className="border-x border-t rounded">{renderedItems}</div>
}


export default Accordion;