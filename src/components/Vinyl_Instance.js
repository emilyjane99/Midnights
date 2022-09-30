import React from "react";

export default function Vinyl_Instance({img, color, name}){
    return (
        <div className = {color}>
            <img src={img} />
            <h1>{name}</h1>
        </div>

    );
}