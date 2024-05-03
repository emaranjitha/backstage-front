import React from 'react';
import "./RandomText.css";


const RandomText=({test, message})=> {
    return (
        <div className='test'>
            <h1>{test}</h1>
            <h2>{message}</h2>
        </div>
    )
}



export default RandomText

