import propTypes from "prop-types" ;
import React from "react" ;
function MiniCalculator(props){
    if(props.operation == "add"){
        let sum = props.num1 + props.num2
        return <div className="MiniCalculatorDiv">
            <h1>MiniCalculator</h1>
            <h3>Num 1: {props.num1}</h3>
            <h3>Num 2 : {props.num2}</h3>
            After Addition, Output is <strong>{sum}</strong>
        </div>
    }
    else if(props.operation == "mul"){
        let sum = props.num1 * props.num2
        return <div className="MiniCalculatorDiv">
            <h1>MiniCalculator</h1>
            <h3>Num 1: {props.num1}</h3>
            <h3>Num 2 : {props.num2}</h3>
            After Multiplication, Output is <strong>{sum}</strong>
        </div>
    }
    else if(props.operation == "div"){
        let sum = props.num1 / props.num2
        return <div className="MiniCalculatorDiv">
            <h1>MiniCalculator</h1>
            <h3>Num 1: {props.num1}</h3>
            <h3>Num 2 : {props.num2}</h3>
            After Division, Output is <strong>{sum}</strong>
        </div>
    }
    else if(props.operation == "sub"){
        let sum = props.num1 - props.num2
        return <div className="MiniCalculatorDiv">
            <h1>MiniCalculator</h1>
            <h3>Num 1: {props.num1}</h3>
            <h3>Num 2 : {props.num2}</h3>
            After Substrattion, Output is <strong>{sum}</strong>
        </div>
    }

   
}
MiniCalculator.propTypes ={
    num1 : propTypes.number,
    num2 : propTypes.number
}
export default MiniCalculator ;