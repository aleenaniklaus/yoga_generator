import React from 'react'
import Moment from 'react-moment'

class Header extends React.Component {
    constructor() {
        super() 
        this.state = {
            date: ""
        }
    }
   
    
    render() {
        const date = new Date()
        return (
            <header className="header main-content">
                <Moment format='MMMM Do'>{date}</Moment>
                <h2>Yogarator</h2>
            </header>
        )
    }
}

export default Header