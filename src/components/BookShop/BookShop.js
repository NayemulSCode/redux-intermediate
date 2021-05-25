import React from 'react'
import { connect } from 'react-redux'
import { buyBook } from '../../redux'

function BookShop(props) {
    return (
        <div>
            <h3>BUY A BOOK-{props.numberOfBooks}</h3>
            <button onClick={props.buyBook}>BUY</button>
        </div>
    )
}
const mapStateToProps = state =>{
    return {
        numberOfBooks: state.book.numberOfBooks
    }
}
const mapDispatchToProps= dispatch =>{
    return{
        buyBook: ()=>dispatch(buyBook())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(BookShop)
