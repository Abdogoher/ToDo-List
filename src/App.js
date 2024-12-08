import { useRef, useState } from 'react';
import './App.css';

function App() {
  const [x, setx] = useState([])
  const inputRef =useRef()
  
  const add = () => {
    const value = inputRef.current.value
    const newData = { completed : false , value}
    setx([...x, newData])
    inputRef.current.value=""
  }

  const itemDone = (index) => {
    const newx = [...x]
    newx[index].completed = !newx[index].completed
    setx(newx)
  }
  const toDelete =(index) => {
    const newx = [...x]
    newx.splice(index, 1)
    setx(newx)
  }
  return (
    <div className="container">
      <h1>Daily Task Schedule</h1>
      <div className="App">
        <h2>Tasks</h2>
        <ul>
          {
            x.map(({ value, completed }, index) => {
              return <div className="div10">
                <li className={completed ? "diffstyle" : ""} name="ggg" onClick={() => itemDone(index)}>{value}</li>
                <button className="btn" onClick={() => toDelete(index)}>Delete</button>
              </div>
            })
          }
        </ul>

        <input ref={inputRef} placeholder='Enter New Task......' autoFocus/>
        <button className="btn1" onClick={add}>Add</button>
      </div>
    </div>
  );
}

export default App;
