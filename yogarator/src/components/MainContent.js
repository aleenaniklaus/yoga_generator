import React from 'react'

class MainContent extends React.Component {
    constructor() {
        super()
        this.state = {
            submitted: false
        }
    }

    handleChange() {
        this.setState(prevState => {
            return {
                submitted: true
            }
        })
    }

    render() {
        return (
            <div id="main-content">
                <form>
                    Focus: <input type="text" name="focus" /><br />
                    Level: <input type="text" name="level" /><br />
                    Duration: <input type="text" name="duration" /><br />
                    Peak Pose: <input type="text" name="peak" /><br />
                    <input type="submit" value="Submit" onClick={this.handleChange}></input>
                </form>
            </div>
        )
    
    }
}

export default MainContent