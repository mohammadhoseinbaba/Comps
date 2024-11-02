import { useState } from "react";
import {GoChevronDown,GoChevronLeft} from 'react-icons/go'



function Accordion ({items}){
    const [expandedIndex,setExpandedIndex]=useState(0)
    
    const renderedItems = items.map((item,index)=>{
const isExpanded = index===expandedIndex

const icon = <span>
    {isExpanded ? <GoChevronDown/> : <GoChevronLeft/>}
</span>
 
        return (
            <div key={item.id}>
            <div onClick={()=>setExpandedIndex(index)}>
                {icon}
                {item.lable}
                </div>
            {isExpanded && <div>{item.content}</div>}
            </div>
        )
    })
    return <div>{renderedItems}</div>
}


export default Accordion;