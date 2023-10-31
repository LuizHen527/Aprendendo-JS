//atalho rsc

import React, {useState} from 'react';

const Contador = () => {
    const [contador, setContador] = useState(0);

    function handlerIncrementar(){
        setContador(contador + 1);
    }

    function handlerDecrementar(){
        setContador( contador === 0 ? 0 : contador -1)
    }

    return (
        <div>
            <h1>Contador</h1>
            <p>{contador}</p>
            <button 
                onClick={handlerIncrementar}
            >
                Incrementar
            </button>

            <button onClick={() => {
                handlerDecrementar()
            }}
            >
            Degrementar
            </button>
        </div>
    );
};

export default Contador;