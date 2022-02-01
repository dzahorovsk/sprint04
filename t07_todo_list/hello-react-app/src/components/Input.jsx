import react, {useState} from 'react';

function Input({changeInput, addTodo, todo}) {

    return (
        <div className="input-box">
            <div className="input"><input type="text" placeholder="add new items" onChange={changeInput} value={todo}></input></div> 
            <div className="button" onClick={addTodo}>+</div>
        </div>
    );
}

export default Input;