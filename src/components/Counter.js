import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../counterReducer'

const Counter = () => {
//     const count = useSelector((state) => state.reduxCounter.counterValue)

// console.log("countcount ",count)

    const dispatch = useDispatch()

    return (
        <div className='p-5'>
            <button
                // onClick={() => dispatch(increment())}
            >
                Increment
            </button>
            {/* <span className='px-3'>{count}</span> */}
            <button
                // onClick={() => dispatch(decrement())}
            >
                Decrement
            </button>
        </div>
    )
}

export default Counter