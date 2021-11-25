import React from 'react'
import '../assets/styles/Button.css'

export const Button = (props) => {
    const click = () => {
        console.log('clicked');
        props.handleClick(props.digit);
        
    }
    return (
        <button onClick={click} className={props.digit === '='?"equal-button":"button"}>
            {props.digit}
        </button>
    )
}
