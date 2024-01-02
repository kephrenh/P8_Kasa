import React from "react"

export default function Banner(props) {
    return (
        <div className="banner" style={{backgroundImage: `url(${props.bannerImage})`}}>
            <h1>
               <span>{props.bannerTextLine1}</span>
               <span>{props.bannerTextLine2}</span>
            </h1>
        </div>
    )
}