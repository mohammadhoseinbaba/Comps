function Table({fruits}){
  
const renderedfruits = fruits.map((fruit)=>{
return( 

    <tr className="border-b" key={fruit.name}>
        <td className="p-3">{fruit.name}</td>
        <td className={fruit.color}></td>
        <td className="p-3">{fruit.score}</td>
    </tr>
)
  
})
return (
    <tabel > 
        <thead>
    <tr>
        <th>Fruits</th>
        <th>Color</th>
        <th>Score</th>
    </tr>
    </thead>
    <tbody>
    <div>{renderedfruits}</div>
    </tbody>
    </tabel>
  )}
export default Table