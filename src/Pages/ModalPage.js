import { useState } from "react"
import Button from "../Components/Button"
import Modal from "../Components/Modal"

function Modalpage(){

const [showModal,setShowModal]=useState(false)
const handleClick = ()=>{
    setShowModal(true)
}
const handleClose=()=>{
    setShowModal(false)
}
const actionBar = <div><Button primary onClick={handleClose}>I accept</Button></div>
const modal =<Modal onClose={handleClose} actionBar={actionBar}><p>Here is the important agreement to accept</p></Modal>
    return (
    <div>
        <Button primary onClick={handleClick}>open Modal</Button>
       {showModal && modal} 
        </div>
        )

}
export default Modalpage