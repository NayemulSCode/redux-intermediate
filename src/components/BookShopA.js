import React from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { buyBook } from '../redux'

function BookShopA() {
    const numberOfBooks = useSelector(state => state.book.numberOfBooks)
    const dispatch = useDispatch()
    return (
        <div>
            <h2>Number of books:{numberOfBooks} </h2>
            <button onClick={()=> dispatch(buyBook())} >Buy Books</button>
        </div>
    )
}

export default BookShopA
