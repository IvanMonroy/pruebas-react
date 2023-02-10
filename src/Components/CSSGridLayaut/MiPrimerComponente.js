import React from "react";
import './MiPrimerComponente.css';

const MiPrimerComponente = () => {
    return (
        <>
            <h4>Aprendiendo CSS Grid Layaut con René</h4>
            <h6>Asignando estilos individuales a los hijos del grid</h6>
            <div className='container-global'>
                <div className='container c1'>
                    Caja 1
                </div>
                <div className='container c2'>
                    Caja 2
                </div>
                <div className='container c3'>
                    Caja 3
                </div>
                <div className='container c4'>
                    Caja 4
                </div>
                <div className='container c5'>
                    Caja 5
                </div>
                <div className='container c6'>
                    Caja 6
                </div>
                <div className='container c7'>
                    Caja 7
                </div>
                <div className='container c8'>
                    Caja 8
                </div>
            </div>
            <h6>Utilizando <strong>grid-area</strong></h6>
            <div className='container-global'>
                <div className='container a1'>
                    Caja 1
                </div>
                <div className='container a2'>
                    Caja 2
                </div>
                <div className='container a3'>
                    Caja 3
                </div>
                <div className='container a4'>
                    Caja 4
                </div>
                <div className='container a5'>
                    Caja 5
                </div>
            </div>
            <h6>Utilizando <strong>template-area</strong></h6>
            <div className='container-globalA'>
                <div className='containerA t1'>
                    Cabecera
                </div>
                <div className='containerA t2'>
                    Menú
                </div>
                <div className='containerA t3'>
                    Contenido
                </div>
                <div className='containerA t4'>
                    Barra Lateral
                </div>
                <div className='containerA t5'>
                    Footer
                </div>
            </div>


        </>
    );
}

export default MiPrimerComponente;