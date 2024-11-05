import Table from '../Components/Table'
function TablePage(){


    const fruits = [
{name:'Orange' , color:'bg-orange-500',score:5},
{name:'Apple' , color:'bg-red-300',score:3},
{name:'Banana' , color:'bg-yellow-500',score:1},
{name:'Lime' , color:'bg-green-500',score:4}
    ]

    return <div><Table fruits={fruits}/></div>
}
export default TablePage