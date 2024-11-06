
function Table({fruits , config , keyFN}){


    const renderedHeaders=config.map((column)=>{
    return <th key={column.label}>{column.lable}</th>
  })


const renderedfruits = fruits.map((rowdata)=>{
    const renderedcolumns = config.map((column)=>{
        return <td key={column.lable}>{column.render(rowdata)}</td>
    }
        )
return( 

    <tr className="border-b" key={keyFN}>
{renderedcolumns}
    </tr>
)
  
})
return (
    <tabel className='table-auto border-spacing-2'> 
        <thead>
        <tr className="border-b-2">{renderedHeaders}</tr>
    </thead>
    <tbody>
    {renderedfruits}
    </tbody>
    </tabel>
  )}
export default Table