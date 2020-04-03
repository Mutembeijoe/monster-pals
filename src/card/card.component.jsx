import React from 'react'
import './card.styles.css'

export const Card = (props)=>{
    return(
        <div>
            <h1 >{props.monster.name}</h1>
            <h3>{props.monster.email}</h3>
        </div>
    )
}