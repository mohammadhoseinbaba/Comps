import Table from '../Components/Table'
function TablePage(){


    const fruits = [
{name:'Orange' , color:'bg-orange-500',score:5},
{name:'Apple' , color:'bg-red-300',score:3},
{name:'Banana' , color:'bg-yellow-500',score:1},
{name:'Lime' , color:'bg-green-500',score:4}
    ]
const config=[
   {lable:'name',
    render : (fruit)=>fruit.name
   },
   {lable:'color',
    render :(fruit)=> <div className={`p-3 m-2 ${fruit.color}`}/>
   },
   {lable:'score',
    render:(fruit)=>fruit.score 
   }
]

const keyFN=(fruit)=>{
return fruit.name
}
    return <div><Table fruits={fruits} config={config} keyFN={keyFN}/></div>
}
export default TablePage