import react, {useState} from 'react';

function Todo({item, done, id}) {
    return (
        <div className="out" key={id}>
            <div className="label" className={item.checked ? 'itemDone' : ''}>{item.todo}</div>
            <div className="check"><input type="checkbox" checked={item.checked} onClick={done} id={id}></input></div>
        </div>
    );
}

export default Todo;