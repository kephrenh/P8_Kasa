import React from "react"

export default function HomeHeader(props) {
    return (
        <header className="header" style={{backgroundImage: `url(${props.bannerImage})`}}>
            <h1>{props.bannerText}</h1>
        </header>
    )
}