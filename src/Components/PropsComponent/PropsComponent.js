import React from 'react'
import PropTypes from 'prop-types';
import './PropsComponent.css'

export const PropsComponent = ({ nombre, apellido, edad, salud }) => {
    console.log(salud);

    return (
        <div className='props-component'>
            <div className='props-component-header'>
                <h6>Enviando propiedades desde otros componentes</h6>
            </div>
            <img src='https://i.pinimg.com/originals/32/0a/8f/320a8f78d6083c7851245a58cec9c28b.gif' className="App-logo" alt="logo" id='img-col' />
            <p>Desde el componente InterpolacionComponent se han enviado los siguiente parámetros:</p>
                <ul>
                    <li>Nombre: {nombre}</li>
                    <li>Apellido: {apellido} </li>
                    <li>Edad: {edad}</li>
                </ul>
                <strong className='center-text'> Datos generales</strong>
                <ul>
                    <li>
                        RH: {salud.RH}
                    </li>
                    <li>
                        Cédula: {salud.Cedula}
                    </li>
                    <li>
                        Alergias: {salud.Alergias}
                    </li>
                    <li>
                        Estado de salug en general: {salud.Estado}
                    </li>
                </ul>
               
        </div>

    )
}

PropsComponent.propTypes = {
    nombre: PropTypes.string.isRequired,
    apellido: PropTypes.string.isRequired,
    edad:  PropTypes.number,
    salud: PropTypes.shape({
        RH: PropTypes.string.isRequired,
        
    })
}

PropsComponent.defaultProps ={
    nombre: "Juan Antonio"
}