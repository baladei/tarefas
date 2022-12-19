export const AnotherComponent = () => {

    const handleClick = () => {
        console.log("clicou no botão!")
    };



    return (
        <div id="anothercomponent">
            <p>Segundo Componente</p>
            <button onClick={handleClick}>Evento de click</button>
            <hr />
            <button onClick={() => {console.log("testando")}}>Evento de arrowFunction</button>
            <hr />
        </div>
    )
}