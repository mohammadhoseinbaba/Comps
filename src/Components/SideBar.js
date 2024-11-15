import Link from "./Link"


function SideBar(){
const links=[
    {lable:'Dropdown', path:'/'},
    {lable:'Accordion' , path:'/accordion'},
    {lable:'button' , path:'/button'},
    {lable:'modal' , path:'/modalpage'},
    {lable:'table' , path:'/tablepage'},
    {lable:'counter' , path:'/counter'}
]

const renderedLinks = links.map((link)=>{
    return <Link key={link.path} to={link.path} className='mb-3' activeClassName='font-bold border-l-4 border-blue-500 pl-2'>{link.lable}</Link>
})
return <div  className="sticky top-0 overflow-y-scroll flex flex-col items-start">{renderedLinks}</div>
}
export default SideBar