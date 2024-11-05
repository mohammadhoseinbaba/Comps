import { useState } from "react"
import Button from "../Components/Button"
import Modal from "../Components/Modal"

function Modalpage(){

const [showModal,setShowModal]=useState(false)
const handleClick = ()=>{
    setShowModal(true)
}

    return (
    <div>
        <Button primary onClick={handleClick}>open Modal</Button>
       {showModal && <Modal />} 
        </div>
        )

}
export default Modalpage