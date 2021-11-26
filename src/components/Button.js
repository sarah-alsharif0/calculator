import React from 'react'
import '../assets/styles/Button.css'

export const Button = (props) => {
    const click = () => {
        props.handleClick(props.character);
    }
    return (
        <button onClick={click} className={props.character === '='?"equal-button":"button"}>
            {props.character}
        </button>
    )
}
