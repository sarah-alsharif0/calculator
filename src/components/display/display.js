import React from 'react'
import '../display/display.css'

export const Display = (props) => {
    return (
        <div className="display-container">
            {props.value['secondNum']!==null?props.value['secondNum']:props.value['firstNum']}
        </div>
    )
}
