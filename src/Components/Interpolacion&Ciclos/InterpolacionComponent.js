import React from 'react'
import { PropsComponent } from '../PropsComponent/PropsComponent';
import './InterpolacionComponent.css'

export const InterpolacionComponent = () => {
    const peliculas = [
        { nombre: "Morbius", imagen: "https://hips.hearstapps.com/vidthumb/images/morbius-official-trailer-1635860706.jpg?crop=0.706xw:1.00xh;0.115xw,0&resize=980:*" },
        { nombre: "Red Rocket", imagen: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/red-rocket-1626340196.jpeg?crop=1xw:1xh;center,top&resize=980:*" },
        { nombre: "The Batman", imagen: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/the-batman-robert-pattinson-1598170347.jpg?crop=0.810xw:1.00xh;0.0609xw,0&resize=980:*" },
        { nombre: "Pinocho de Guillermo del Toro", imagen: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pinocho-de-guillermo-del-toro-391473872-large-1665936039.jpg?crop=1xw:1xh;center,top&resize=980:*" },
        { nombre: "Red", imagen: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/red-pixar-pelicula-1626189109.jpg?crop=1xw:1xh;center,top&resize=980:*" }];

        // const peliculas = [];
    return (
        <>
            <h4> Probando la interpolación y los ciclos en react </h4>
            <h6> Utilizando películas manualmente</h6>
            <div className='container-peliculas'>
            {peliculas.length > 0 ?
            (
                <>
                <div className='container-children' style={{ background: `url(${peliculas[0].imagen}) no-repeat center center` }}>
                    <div className='cover-background'>
                        {peliculas[0].nombre}
                    </div>
                </div>
                <div className='container-children' style={{ background: `url(${peliculas[1].imagen}) no-repeat center center` }}>
                    <div className='cover-background'>
                        {peliculas[1].nombre}
                    </div>
                </div>
                </>
            ) : (<p>No se encontraron películas</p>) }
            </div>
            <h6> Utilizando .map()</h6>
            <div className='container-peliculas'>
                {peliculas.length > 0 ?
                    (peliculas.map((pelicula, indice) => {
                        return (<div className='container-children' key={indice} style={{ background: `url(${pelicula.imagen}) no-repeat center center` }}>
                            <div className='cover-background'>
                                {pelicula.nombre}
                            </div>
                        </div>)
                    })) 
                    :  (<p>No se encontraron películas</p>)

                }
            </div>
            <PropsComponent nombre='Ivan René' apellido='Monroy Santos' edad={22} salud={{'RH':  'O+', 'Cedula': '123123654', 'Alergias': 'Ninguna', 'Estado': 'Medio' }} />
        </>
    )
}
