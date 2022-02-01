import react, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Input from './components/Input';
import Todo from './components/Todo';


function App() {
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
      setTodos([...todos , {todo: todo, checked: false}]);
      setTodo('');
  }

  const changeInput = (e) => {
    setTodo(e.currentTarget.value);
  }

  const toggleDone = (e) => {
    setTodos(todos.map((item, key) => {
      if(key == e.currentTarget.id) {
        item.checked = !item.checked;
      }
        return item;
    }))
  }

  return (
    <div className="wrapper">
      <div className="todobox">
        <div className="title">My To-Do List</div>
        <Input changeInput={changeInput} addTodo={addTodo} todo={todo} />
        <div className="out-box">
            {todos.length > 0 && todos.map((item, key) => <Todo item={item} done={toggleDone} id={key}/>)}
            {todos.length === 0 && <div className="out">Empty list</div>}
        </div>
      </div>
    </div>
  );
}

export default App;
