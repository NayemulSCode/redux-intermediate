import React from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { buyPen } from '../redux'

function PenShop() {
    const numberOfPen = useSelector(state => state.pen.numberOfPen)
    const dispatch = useDispatch()
    return (
        <div>
            <h2>Number of Pen-{numberOfPen}</h2>
            <button onClick={()=> dispatch(buyPen())}>buy Pen</button>
        </div>
    )
}

export default PenShop
