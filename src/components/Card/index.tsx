import React from "react";
import "./styles.css";

export type CardProps = {
    name: string
    time: string
}

export function Card(props: CardProps) {
    return(
        <div className="card">
            <strong className="box">{props.name}</strong>
            <small className="box">{props.time}</small>
        </div>
    )
}