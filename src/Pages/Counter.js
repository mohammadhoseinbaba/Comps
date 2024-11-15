import { useState } from "react"

const Counter = ({ initialValue }) => {
    const [counter, setCounter] = useState(initialValue)
    const [valueToAdd, setValueToAdd] = useState(0)
    const handleChange = (event) => {
        const value = parseInt(event.target.value) || 0
        setValueToAdd(value)

    }
    const handleSubmit = (e) => {
        e.preventDefault()
        setCounter(counter + valueToAdd)
        setValueToAdd(0)
    }
    return (
        <div>
            <div>
                <div>{`The Number is ${counter}`}</div>
                <button type="button" style={{ border: '1px solid black', borderRadius: '10px', padding: '10px', margin: '10px' }} onClick={() => { setCounter(counter + 1) }}>increment</button>
                <button style={{ border: '1px solid black', borderRadius: '10px', padding: '10px', margin: '10px' }} onClick={() => { setCounter(counter - 1) }}>Decrement</button>
            </div>
            <form onSubmit={handleSubmit}>
                <label>Add a lot</label>
                <input type="number" value={valueToAdd || ''} onChange={handleChange}></input>
                <button >Add it!</button>
            </form>
        </div>
    )
}
export default Counter