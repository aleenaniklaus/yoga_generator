import React from 'react'


class MainContent extends React.Component {
    constructor() {
        super()
        this.state = {
            submitted: false
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange() {
        this.setState(prevState => {
            return {
                submitted: !prevState.submitted
            }
        })
    }

    render() {
        return (
            <div class="main-content"> 
                <button onClick={this.state.handleChange}>Random</button>
            </div>
        )
    
    }
}

export default MainContent