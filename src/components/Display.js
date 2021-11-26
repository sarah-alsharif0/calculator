import React from 'react'
import '../assets/styles/Display.css'

export const Display = (props) => {
    return (
        <div className="display-container">
            {props.value['secondNum']?props.value['secondNum']:props.value['firstNum']}
        </div>
    )
}
