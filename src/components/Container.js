import React,{useState} from 'react'
import {Display} from './Display'
import {ButtonsContainer} from './ButtonsContainer'
import '../assets/styles/Container.css'

export const Container = () => {
    const [data, setData] = useState({
        firstNum: 0,
        secondNum: null,
        operator: ''
    });
    const isOperator = (op) => {
        return (op === '/' ||
                op === 'X' || 
                op === '+' || 
                op === '-' || 
                op === '%')
    }
    const handleOperator = (op) => {
        if(data['secondNum'] === null){
            setData({...data, operator: op})
        } else {
            handleEqual();
            setData({...data, operator: op})
            console.log(data['secondNum'])
        }
    }
    const handleEqual = () => {
        if(data['secondNum']!== null){
            if(data['operator'] === '+'){
                setData({firstNum: Number(data['firstNum'])+Number(data['secondNum']), secondNum:null})
            } else if(data['operator'] === '-'){
                setData({firstNum: data['firstNum']-data['secondNum'], secondNum:null})
            } else if(data['operator'] === 'X'){
                setData({firstNum: data['firstNum']*data['secondNum'], secondNum:null})
            } else if(data['operator'] === '/'){
                setData({firstNum: data['firstNum']/data['secondNum'], secondNum:null})
            } else if(data['operator'] === '%'){
                setData({firstNum: data['firstNum']%data['secondNum'], secondNum:null})
            } 
        }
    }
    const handleNumber = (num) => {
        if(data['operator'] === ''){
            if(data['firstNum'] === 0){
                setData({...data, firstNum: parseInt(num)});
            } else {
                if(data['firstNum'].toString().length < 12)
                setData({...data, firstNum: parseInt(data['firstNum']+num)})
            }
            // console.log(data['firstNum']);
        } else {
            if(data['secondNum'] === null){
                setData({...data, secondNum: parseInt(num)});
            } else {
                if(data['secondNum'].toString().length < 12)
                setData({...data, secondNum: parseInt(data['secondNum']+num)})
            }
            // console.log(data['secondNum']);
        }
    }
    const handleClick = (character) => {
        console.log(character);
        if(character === '+-'){
            setData({...data, 
                firstNum: data['firstNum']*-1
            });
        } else if (character === 'C'){
            setData({
                firstNum:0,
                secondNum: 0,
                operator:''
            });
        } else if (!isNaN(character)){
            handleNumber(character);
        } else if (isOperator(character)){
            handleOperator(character);
        } else if (character === '='){
            handleEqual();
        }
    }
    return (
        <div className="calculator-container">
            <Display value={data}/>
            <ButtonsContainer handleClick={handleClick}/>
        </div>
    )
}
