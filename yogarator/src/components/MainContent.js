import React from 'react'

function MainContent() {
    return (
        <div id="mainSetting">
            <form>
                Focus: <input type="text" name="focus" /><br />
                Level: <input type="text" name="level" /><br />
                Duration: <input type="text" name="duration" /><br />
                Peak Pose: <input type="text" name="peak" /><br />
                <input type="submit" value="Submit"></input>
            </form>
        </div>
    )
}

export default MainContent