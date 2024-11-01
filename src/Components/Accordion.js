function Accordion ({items}){
    const renderedItems = items.map((item)=>{
        return (
            <div>
            <div>{item.id}</div>
            <div>{item.lable}</div>
            <div>{item.content}</div>
            </div>
        )
    })
    return <div>{renderedItems}</div>
}


export default Accordion;