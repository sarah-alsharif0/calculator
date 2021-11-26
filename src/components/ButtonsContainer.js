import React from 'react'
import {Button} from './Button'
import '../assets/styles/ButtonsContainer.css'

export const ButtonsContainer = (props) => {
    const buttons = ['C', '+-', '%', '/', '7', '8', '9','X', '4', '5', '6', '-', '1', '2', '3', '+', '0', '=' ]
    return (
        <div className="buttons-container">
            {buttons.map((item, index)=><Button key={new Date().getTime()*index} character={item} handleClick={props.handleClick}/>)}
        </div>
    )
}
