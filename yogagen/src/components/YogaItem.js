import React from "react"
import ReactPlayer from 'react-player'

function YogaItem(props) {
    return (
        <div>
            <ReactPlayer url={props.item.url}/>
        </div>
    )
}

export default YogaItem