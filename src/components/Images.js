import car from "../assets/imagem1.jpg"

export const Images = () => {
    return(
        <div className="imagens">
            <img src="/imagem2.jpg" alt="imagem2" />
            <img src={car} alt="imagem1" />
        </div>
    );
};