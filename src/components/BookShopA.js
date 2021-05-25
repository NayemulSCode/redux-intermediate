import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { buyBook } from '../redux'

function BookShopA() {
    const [number, setNumber] = useState(1)
    const numberOfBooks = useSelector(state => state.book.numberOfBooks)
    const dispatch = useDispatch()
    return (
        <div>
            <h2>Number of books:{numberOfBooks} </h2>
            <input type="text" value={number} onChange ={e => setNumber(e.target.value)} />
            <button onClick={()=> dispatch(buyBook(number))} >Buy {number} Books</button>
        </div>
    )
}

export default BookShopA
