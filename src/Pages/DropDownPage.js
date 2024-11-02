import DropDown from "../Components/DropDown"

function DropDownPage(){
    const options =[
        {lable:'Red',value: ' red'},
        {lable:'Blue' , value:'blue'},
        {lable:'Green' , value:'green'}
]
   return(
    <div>
        
        <DropDown options={options}></DropDown>
    </div>

   )
}



export default DropDownPage