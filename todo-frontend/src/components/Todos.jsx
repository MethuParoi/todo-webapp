import '../components/create-todo.css';


export function Todos({todos}) {

    return(
        <div>
            {todos.map((todo) => {
                return(
                    // eslint-disable-next-line react/jsx-key
                    <div>
                        <div className='todo-outer-box'>
                        <div className='todo-box'>
                        <h2 className="todo-comp todo-title">{todo.title}</h2>
                        <h2 className="todo-comp todo-desc">{todo.description}</h2>
                        </div>
                        
                        <div className='todo-box'>
                        <button className="todo-btn">{todo.completed == true ? "Completed" : "Mark as Complete" }</button>
                        </div>
                    </div>
                    </div>
                )
            })}
        </div>
    )
}