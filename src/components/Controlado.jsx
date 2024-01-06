import {useState} from 'react'

export default function Controlado() {
    const [todo, setTodo] = useState({
        todoName: '',
        todoDescription: '',
        todoState: 'Pendiente',
        todoPriority: true
    })

    const [error, setError] = useState(false)

    const {todoName, todoDescription, todoState, todoPriority} = todo
    const ShowError = () => <div className="alert alert-danger">Todos los campos son obligatorios</div>

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!todoName.trim() || !todoDescription.trim() || !todoState.trim()) return setError(true)
        setError(false)
    }


    function handleOnChange(event) {
        const {name, value, type, checked} = event.target
        setTodo({
            ...todo,
            [name]: type === 'checkbox' ? checked : value
        })
    }

    return (
        <div>
            <h2>Controlado</h2>
            {error && <ShowError />}
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder="Ingrese el nombre de la tarea" 
                    className="form-control mb-2 " 
                    name="todoName"
                    value={todoName}
                    onChange={handleOnChange}
                />
                <textarea 
                    type="text" 
                    placeholder="Ingrese la descripción de la tarea" 
                    className="form-control mb-2" 
                    name="todoDescription"
                    value={todoDescription}
                    onChange={handleOnChange}
                />
                <div className="form-check mb-2">
                    <input
                        type='checkbox'
                        name="todoPriority"
                        id="todoPriority"
                        className="form-check-input"
                        onChange={handleOnChange}
                        checked={todoPriority}
                    />
                    <label htmlFor="todoPriority">Prioritario</label>
                </div>
                <select 
                    name="todoState" 
                    className="form-select mb-2" 
                    value={todoState}
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