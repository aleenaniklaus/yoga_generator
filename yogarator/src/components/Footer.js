import React from 'react'
import Moment from 'react-moment'

class Footer extends React.Component {
    constructor() {
        super()
        this.state = {
            year: ""
        }
    }

    render() {
        const date = new Date()
        return (
            <footer class="main-content footer">
                yogaGenerator <Moment format="YYYY">{date}</Moment>
            </footer>
        )
    }
}

export default Footer