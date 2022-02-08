import propTypes from "prop-types";
import React from "react";
function AddNos(props){
    return(
        <div className="propDiv">
            <h2>Proptypes</h2>
            <h3>Num 1 : {props.num1}</h3>
            <h3>Num 2 : {props.num2}</h3>
            <h3>Sum is {props.num1 + props.num2} </h3>
        </div>
    )
}
AddNos.propTypes = {
    num1 : propTypes.number,
    num2 : propTypes.number
}

export default AddNos;