import React from "react"
import Footer from "./components/Footer"
import Header from "./components/Header"
import MainContent from "./components/MainContent"

class App extends React.Component {
    constructor(){
        super()
    }

    render() {
        return (
            <main>
                <Header />
                <MainContent />
                <Footer />
            </main>
        )
    }
}

export default App