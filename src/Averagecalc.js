import { useState } from "react";

function Averagecalc() {
    let avg =0;
    let sum = 0;
    let [inputnos, changeFun] = useState([])
    function formSubmit(event) {
        event.preventDefault();
        let formTag = event.target;
        let inputTag = formTag.inp_no;
        let newinputnos = [...inputnos, inputTag.value];
        changeFun(newinputnos);
        inputTag.value = ""

    }
    function averageFun(event) {
        inputnos.map(function(val,index){
            sum += Number(val);
        })
        avg = sum/inputnos.length;
        document.getElementById("avgshow").innerHTML = `Avg is ${avg}`

    }
    return (
        <div className="averagecalc">
            <h1>Welcome to Average Calculator</h1>
            <form onSubmit={formSubmit}>
                <input type="number" placeholder="Enter No." name="inp_no" />
                <button>Add</button>
                <button onClick={averageFun}>Average</button>
                <h3 id="avgshow"></h3>
            </form>{
                inputnos.map(function (val) {
                    return <p className="inlinep">{val} </p>
                })
            }
        </div>
    )
}
export default Averagecalc