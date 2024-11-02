import Accordion from "../Components/Accordion"
function AccordionPage(){
    const items=[{
        key:'123',
        lable:'hello',
        content:'Here is more informationHere is more informationHere is more informationHere is more information'
    },
    {
        key:'1234',
        lable:'hello',
        content:'Here is more informationHere is more informationHere is more informationHere is more information'
    },
    {
        key:'12345',
        lable:'hello',
        content:'Here is more informationHere is more informationHere is more informationHere is more informationHere is more informationHere is more information'
    }
    ]


    return <Accordion items={items}/>
}
export default AccordionPage