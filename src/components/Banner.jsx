import React from "react"

export default function Banner(props) {
    return (
        <div className="banner" style={{backgroundImage: `url(${props.bannerImage})`}}>
            <h1>{props.bannerText}</h1>
        </div>
    )
}