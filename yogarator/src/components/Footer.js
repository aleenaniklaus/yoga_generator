import React from 'react'

class Footer extends React.Component {
    constructor() {
        super()
        this.state = {
            year: 2019
        }
    }

    render() {
        return (
            <footer id="footer">
                yogaGenerator {this.state.year}
            </footer>
        )
    }
}

export default Footer