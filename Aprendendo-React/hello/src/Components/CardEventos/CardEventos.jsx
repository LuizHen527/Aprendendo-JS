import React from "react";
import './CardEventos.css';

const CardEvento = ({title, text}) => {

    return (
        <div className="card-evento">
            <h1 className="card-evento__titulo">{title}</h1>
            <p className="card-evento__texto">{text}</p>
            <p className="card-evento__button card-evento__button--bloqueado">Conectar</p>
        </div>
    );
};

export default CardEvento;