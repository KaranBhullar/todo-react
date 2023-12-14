import { useState } from "react";
import Checkbox from "../Components/Checkbox";
import Input from "../Components/Input";

function Todo() {
    const [input, setInput] = useState('')
    const [todoList, setTodoList] = useState<string[]>([])
    return(
        <div>
            <h1>WORKING</h1>
            <Input input={setInput}/>
            <button onClick={btnClick}>Add To List</button>
            <Checkbox list={todoList} />
        </div>
    );
    function btnClick() {
        if(input.trim() == '') {return;}
        setTodoList(currList => [...currList, input])
    }
    
}

export default Todo;