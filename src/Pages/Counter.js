import { useReducer } from "react"

const reducer = (state, action) => {

    if (action.type === 'increment') {
        return {
            ...state,
            count: state.count + 1,
        }
    }
    if (action.type === 'decrement') {
        return {
            ...state,
            count: state.count - 1
        }
    }
    if(action.type==='value-change'){
        return{
            ...state,
            valueToAdd:action.payload
        }
    }
    return state;   
}

const Counter = ({ initialValue }) => {

    const [state, dispatch] = useReducer(reducer, {
        count: initialValue
        , valueToAdd: 0
    })
    console.log(state)
    // const [counter, setCounter] = useState(initialValue)
    // const [valueToAdd, setValueToAdd] = useState(0)

    const handleIncrement = () => {
        dispatch({
            type: 'increment'
        })
    }
    const handleDecrement = () => {
        dispatch({
            type: 'decrement'
        })
    }

    const handleChange = (event) => {
        const value = parseInt(event.target.value) || 0
dispatch({
    type:'value-change',
    payload:value
})
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        // setCounter(counter + valueToAdd)
        // setValueToAdd(0)
    }
    return (
        <div>
            <div>
                <div>The Number is {state.count}</div>
                <button type="button" style={{ border: '1px solid black', borderRadius: '10px', padding: '10px', margin: '10px' }} onClick={handleIncrement}>increment</button>
                <button style={{ border: '1px solid black', borderRadius: '10px', padding: '10px', margin: '10px' }} onClick={handleDecrement}>Decrement</button>
            </div>
            <form onSubmit={handleSubmit}>
                <label>Add a lot</label>
                <input type="number" value={state.valueToAdd || ''} onChange={handleChange}></input>
                <button >Add it!</button>
            </form>
        </div>
    )
}
export default Counter