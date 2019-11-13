import React from "react"
import ReactPlayer from 'react-player'

import yogaData from "./yogaData.js"
import YogaItem from "./YogaItem.js"

class yogaGenerator extends React.Component {
    constructor() {
        super() 
        this.state = {
            url: "https://www.youtube.com/watch?v=w0cLgFg4Zsw",
            yogaVids: yogaData
        }
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const yogaItems = this.state.yogaVids.map(item => <YogaItem
            key={item.id}
            item={item}
        />)
        const randNum = Math.floor(Math.random() * yogaItems.length)
        const randYogaVid = this.state.yogaVids[randNum]
        this.setState({ url: randYogaVid.url })
        // this.setState({ url: "https://www.youtube.com/watch?v=GQuKiXsDBsU" })
    }

    render() {
        return (
            <div className="main-content">
                <ReactPlayer url={this.state.url} />
                <br />
                <button onClick={this.handleSubmit}>Random</button>
            </div>
        )
    }
}

export default yogaGenerator