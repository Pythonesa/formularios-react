

export default function NoControlado() {

    return (
        <div>
            <h2>No controlado</h2>
            <form>
                <input type="text" placeholder="Ingrese el nombre de la tarea" className="form-control mb-2 " name="todoName"/>
                <textarea type="text" placeholder="Ingrese la descripción de la tarea" className="form-control mb-2" name="todoDescription"/>
                <select name="todoState" className="form-select mb-2" defaultValue="Pendiente">
                    <option value="Pendiente">Pendiente</option>
                    <option value="Terminada">Terminada</option>
                </select>
                <button type="submit" className="btn btn-primary">Añadir tarea</button>
            </form>
        </div>
    )
}