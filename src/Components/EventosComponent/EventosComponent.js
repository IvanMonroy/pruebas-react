import React from 'react'
import './EventosComponent.css'

export const EventosComponent = () => {
    let countOneClick = 0;
    const eventoClick = (e, nombre) => {
        console.log(e);
        countOneClick += 1;
        document.getElementById("countClick").innerText = countOneClick;
        return countOneClick === 1 ? document.getElementById("textEvent").innerHTML += `, ${nombre}  🖱️` : "";
    }

    const eventoDobleClick = () => {
        document.getElementById("textEventD").innerHTML += `Doble click!!! 🚵🏽`;

    }

    const eventoMouse = (e, estado) => {
        document.getElementById("estado-elemento").innerText = estado;
    }

    const focusElement = e => {
        document.getElementById("estado-foco").innerText = "enfocado";
    }

    const blurElement = e => {
        document.getElementById("estado-foco").innerText = "desenfocado";
    }

    return (
        <div className='eventos-component'>
            <h6> Apendiendo a utilizar funciones en react - EventosComponent </h6>
            Función onclick
            <div>
                <button onClick={e => eventoClick(e, "René")} className="button">Click me!!!</button>
                <p id='textEvent'>Esté botón se ha clickado <strong id='countClick'>{countOneClick}</strong>  veces </p>
            </div>

            Función ondoubleclick
            <div>
                <button onDoubleClick={eventoDobleClick} className="button">Double Click me!!!</button>
                <p id='textEventD'> </p>
            </div>

            Utilizando onmouseover y onmouseleave
            <div id='box-element-over' onMouseEnter={e => eventoMouse(e, "dentro")} onMouseLeave={e => eventoMouse(e, "fuera")}>
                <p>Elemento mouse</p>
            </div>
            <p>En este momento el mouse se encuentra: <strong id='estado-elemento'> fuera </strong> del elemento </p>

            <div id='container-focus'>
                Utilizando onfocus y onblur
                <div id='' >
                    <input type="text" placeholder="Escribe tu nombre" onFocus={e => focusElement(e)} onBlur={e => blurElement(e)} />
                </div>
                <p>En este momento el mouse se encuentra: <strong id='estado-foco'> desenfocado </strong> del elemento </p>

            </div>



        </div>
    )
}
