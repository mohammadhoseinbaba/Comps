import Accordion from "./Components/Accordion"
function AccordionPage(){
    const items=[{
        key:'123',
        lable:'hello',
        content:'Here is more information'
    },
    {
        key:'123',
        lable:'hello',
        content:'Here is more information'
    }
    ]


    return <Accordion items={items}/>
}