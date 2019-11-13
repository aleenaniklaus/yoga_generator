import React from "react"

class ImageTest extends React.Component {
    constructor() {
        super() 
        this.state = {
            img: "https://picsum.photos/id/237/200/300",
            allImages: []
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount() {
        fetch("https://picsum.photos/v2/list")
            .then(response => response.json())
            .then(response => {
                const {id} = response.data
                this.setState({ allImages: id })
            })
    }

    handleSubmit(event) {
        event.preventDefault()
        const randNum = Math.floor(Math.random() * this.state.allImages.length)
        const randImg = this.state.allImages[randNum].url
        this.setState({ img: randImg }) 
    }

    render() {
        return (
            <div onSubmit={this.handleSubmit}>
                <img src={this.state.img} alt="" /> 
                <br />
                <button>Random</button>
            </div>
        )
    }
}

export default ImageTest