import React from "react"
import Navbar from "./Components/Navbar"
import Main from "./Components/Main"
import data from "./data"

export default function App() {
    const cards = data.map(item => {
        return (
            <Main
                key={item.id}
                {...item}
            />
        )
    })
    return (
        <div>
            <Navbar/>
            {cards}

        </div>
    )
}
