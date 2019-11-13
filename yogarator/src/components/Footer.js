import React from 'react'
import Moment from 'react-moment'

function Footer() {
    const date = new Date()
    return (
        <footer class="main-content footer">
            yogaGenerator App <Moment format="YYYY">{date}</Moment>
        </footer>
    )
}

export default Footer