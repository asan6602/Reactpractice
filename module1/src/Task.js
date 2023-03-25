export const Task = (props) => {
    return (
    <div className ="task">
        <h1>{props.id} {props.taskName}</h1>
        <button onClick={() => props.deleteTask(props.id)}>X</button>
    </div>
    );
}

