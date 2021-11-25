import React,{useState} from 'react'
import {Display} from './Display'
import {ButtonsContainer} from './ButtonsContainer'
import '../assets/styles/Container.css'

export const Container = () => {
    const [displayValue, setDisplayValue] = useState({
        sign: '+',
        firstNum: 0,
        secondNum: 0,
        operator: '',
        result: 0
    });

    const handleClick = (digit) => {
        if(digit === '+-'){
            setDisplayValue({...displayValue, 
                sign: '-'
            });
        } else if (digit === 'C'){
            setDisplayValue({
                sign:'+',
                firstNum:0,
                secondNum: 0,
                operator:'',
                result: 0
            });
        } else if (digit === '/' || 
                   digit === '+' || 
                   digit === 'X' || 
                   digit === '-' || 
                   digit === '=' ||
                   digit === '%'){
            if(firstNum !== 0)
                setDisplayValue({...displayValue, operator: digit})
        } else {
            if(displayValue['operator'] === '' || displayValue['secondNum']=== 0){
                setDisplayValue({...displayValue, firstNum: parseInt(toString(displayValue['firstNum'])+ digit)})
            } else if(displayValue['operator'] === '='){

            } else {
                if(displayValue['operator'] === '+'){
                    setDisplayValue()
                }
            }
        }
        setDisplayValue(digit);
    }
    return (
        <div className="calculator-container">
            <Display value={displayValue}/>
            <ButtonsContainer handleClick={handleClick}/>
        </div>
    )
}
