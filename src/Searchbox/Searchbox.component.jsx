import React from 'react'
import './Searchbox.styles.css'


export const Searchbox = (props)=>{
    return (
        <div className="wrap">
            <div className="search">
                <input type="text" className="searchTerm" onChange={props.handleSearch} placeholder="Search for monster..."/>
                <button type="submit" className="searchButton">
                </button>
            </div>
    
        </div>
    )
}