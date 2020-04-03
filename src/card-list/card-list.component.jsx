import React from 'react'
import './card-list.styles.css'

export const CardList = (props) => {
    return (
        <div className="card-list">
            {props.monsters.map(montser => { 
                return (
                    <div key={montser.id}>
                        <h1 >{montser.name}</h1>
                        <h3>{montser.email}</h3>
                    </div>
                )
                }
            )}
        </div>
    )
}