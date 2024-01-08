import { useState } from 'react';
import '../components/create-todo.css';

export function CreateTodo(){
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    return(
        <div className='outer-box'>

            <div className='box'>
                <h1 className='heading'>Todo List</h1>
            </div>

            <div className='box'>
            <input type="text" placeholder="Add a title" className='title-box' onChange={(e) => {
                const value = e.target.value;
                setTitle(e.target.value);
            }}/>
            </div>

            <div className='box'>
            <input type="text" placeholder="Add description"
            className='title-box' onChange={(e) => {
                const value = e.target.value;
                setDescription(e.target.value);
            }}/>
            </div>

            <div className='box'>
            <button className='btn' onClick={() => {
                fetch("http://localhost:3000/todo", {
                    method: "POST",
                    body: JSON.stringify({
                        title: title,
                        decription: description,
                        completed: false

                    }),
                    headers: {
                        "Content-type": "application/json"
                    }
                })
                .then(async function(res){
                    const json = await res.json();
                    alert("Todo added!");
                })
            }}>Add todo</button>
            </div>

        </div>
    )
}