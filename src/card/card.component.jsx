import React from 'react'
import './card.styles.css'

export const Card = (props)=>{
    return(
        <div className="card">
            <img src={`https://robohash.org/${props.monster.id}?set=set2`}
                alt={`monster ${props.monster.id} avatar`}
                >
            </img>
            <h3 >{props.monster.name}</h3>
            <h4>{props.monster.email}</h4>
        </div>
    )
}