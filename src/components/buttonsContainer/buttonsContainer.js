import React from 'react'
import {Button} from '../button/button.js'
import '../buttonsContainer/buttonsContainer.css'

export const ButtonsContainer = (props) => {
    const buttons = ['C', '+-', '%', '/', '7', '8', '9','X', '4', '5', '6', '-', '1', '2', '3', '+', '0', '=' ]
    return (
        <div className="buttons-container">
            {buttons.map((item, index)=><Button key={index} character={item} handleClick={props.handleClick}/>)}
        </div>
    )
}
