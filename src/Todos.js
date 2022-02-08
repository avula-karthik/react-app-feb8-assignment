import { useState } from "react";

function Todos(){
    let [todo, addTodo] = useState([])
    function formSubmit(event){
        event.preventDefault();
        let formTag = event.target;
        let inputTag = formTag.todo_input ;
        let newTodo = [...todo, inputTag.value];
        addTodo(newTodo);
        inputTag.value = ""

    }
    function clearAll(){
        addTodo([])
    }
    return(
        <div className="todoClass">
        <form onSubmit={formSubmit}>
            <h2>Welcome to your Todo App</h2>
             <input type="text" placeholder="Enter your task : " name="todo_input"/>
             <br />
             <button>Add task</button>
             <br />
             <button onClick={clearAll}>Clear All</button>
        </form>
        {
            todo.map(function(val, index){
                return <div> 
                    <h3>{val} </h3>
                    </div>
            })
        }
        </div>
       
    )
}
export default Todos;