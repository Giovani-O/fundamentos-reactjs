export function Post(props) { // Named export, garante a consistência das nomenclaturas
    return (
        <div>
            <strong>{props.author}</strong>
            <p>{props.content}</p>
        </div>
    )
}