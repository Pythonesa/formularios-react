import { useRef, useState } from 'react'

export default function NoControlado() {
    const form = useRef(null)
    const [error, setError] = useState('')
    const handleSubmit = (event) => {
        event.preventDefault();

        const data = new FormData(form.current)
        const {todoName, todoDescription, todoState} = Object.fromEntries([...data.entries()])

        if (
            !todoName.trim() || 
            !todoDescription.trim() || 
            !todoState.trim()
        ) return setError('Todos los campos son obligatorios')

        setError('')
    }

    return (
        <div>
            <h2>No controlado</h2>
            <form onSubmit={handleSubmit} ref={form}>
                <input type="text" placeholder="Ingrese el nombre de la tarea" className="form-control mb-2 " name="todoName"/>
                <textarea type="text" placeholder="Ingrese la descripción de la tarea" className="form-control mb-2" name="todoDescription"/>
                <select name="todoState" className="form-select mb-2" defaultValue="Pendiente">
                    <option value="Pendiente">Pendiente</option>
                    <option value="Terminada">Terminada</option>
                </select>
                <button type="submit" className="btn btn-primary">Añadir tarea</button>
                {error !== '' && <p className="text-danger mt-2">{error}</p>}
            </form>
        </div>
    )
}