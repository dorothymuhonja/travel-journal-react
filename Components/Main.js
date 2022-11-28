import React from "react"

export default function Main(props) {
    return (
        <div className="card">
            <img src={props.imageUrl} className="card-img"/>
            <div className="card-content">
                <div className="card-location">
                    <span><img src={props.locationIcon} className="location-icon" /></span>
                    <span>{props.location}</span>
                    <span><a href={props.googleMapsUrl}>View on Google Maps</a></span>
                </div>
                <h1 className="card-title">{props.title}</h1>
                
                <div className="card-dates">
                    <span>{props.startDate}</span> - <span>{props.endDate}</span>

                </div>
                <p>{props.description}</p>

                <hr/>
            
            </div>
            
        </div>
        
    )
}

