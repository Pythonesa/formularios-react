import {useState} from 'react'

export default function Controlado() {
    const [todo, setTodo] = useState({
        todoName: '',
        todoDescription: '',
        todoState: 'Pendiente'
    })

    const handleSubmit = (event) => {
        event.preventDefault();

    }

    const handleOnChange = (event) => {
        setTodo({
            ...todo,
            [event.target.name]: event.target.value
        })
    }

    return (
        <div>
            <h2>Controlado</h2>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder="Ingrese el nombre de la tarea" 
                    className="form-control mb-2 " 
                    name="todoName"
                    value={todo.todoName}
                    onChange={handleOnChange}
                />
                <textarea 
                    type="text" 
                    placeholder="Ingrese la descripción de la tarea" 
                    className="form-control mb-2" 
                    name="todoDescription"
                    value={todo.todoDescription}
                    onChange={handleOnChange}
                />
                <select 
                    name="todoState" 
                    className="form-select mb-2" 
                    value={todo.todoState}
                    onChange={handleOnChange}
                >
                    <option value="Pendiente">Pendiente</option>
                    <option value="Terminada">Terminada</option>
                </select>
                <button type="submit" className="btn btn-primary">Añadir tarea</button>
            </form>
        </div>
    )
}