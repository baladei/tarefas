export const RenderCond = ({ x }) => {

    return (
        <div>
            {x > 5 && <p>X é maior que 5</p>}
            {x > 5 ? <p>X é um número alto</p> : <p>X é um número baixo</p>}
        </div>
    );
};