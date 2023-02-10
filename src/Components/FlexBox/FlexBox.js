import React from "react";
import './FlexBox.css';

const FlexBox = () => {
    return (
        <>
            <div className="body-flex">
                <h4>Aprendiendo FlexBox con René</h4>
                <h6> Propiedades básicas</h6>
                <section className="container-flex-global">
                    <div className="container-flex">
                        Caja 1
                    </div>
                    <div className="container-flex">
                        Caja 2
                    </div>
                    <div className="container-flex">
                        Caja 3
                    </div>
                    <div className="container-flex">
                        Caja 4
                    </div>
                    <div className="container-flex">
                        Caja 5
                    </div>
                    <div className="container-flex">
                        Caja 6
                    </div>
                    <div className="container-flex">
                        Caja 7
                    </div>
                    <div className="container-flex">
                        Caja 8
                    </div>
                    <div className="container-flex">
                        Caja 9
                    </div>
                    <div className="container-flex">
                        Caja 10
                    </div>
                </section>
            </div>
            <div className="body-flex2">
                <h6> Segundo ejemplo</h6>
                <section className="container-flex-global2">
                    <div className="container-flex2">
                        Caja 1
                    </div>
                    <div className="container-flex2">
                        Caja 2
                    </div>
                    <div className="container-flex2">
                        Caja 3
                    </div>
                    <div className="container-flex2">
                        Caja 4
                    </div>
                    <div className="container-flex2">
                        Caja 5
                    </div>
                    <div className="container-flex2">
                        Caja 6
                    </div>
                    <div className="container-flex2">
                        Caja 7
                    </div>
                    <div className="container-flex2">
                        Caja 8
                    </div>
                    <div className="container-flex2">
                        Caja 9
                    </div>
                    <div className="container-flex2">
                        Caja 10
                    </div>
                    <div className="container-flex2">
                        Caja 11
                    </div>
                    <div className="container-flex2">
                        Caja 12
                    </div>
                    <div className="container-flex2">
                        Caja 13
                    </div>
                </section>
            </div>

            <div className="body-flex3">
                <h6> Asignando estilos a elementos individuales dentro de mi contenedor flexible</h6>
                <section className="container-flex-global3">
                    <div className="container-flex3 cf1">
                        Caja 1
                    </div>
                    <div className="container-flex3 cf2">
                        Caja 2
                    </div>
                    <div className="container-flex3 cf3">
                        Caja 3
                    </div>
                </section>
            </div>

            <div className="body-flex4">
                <h6>  Maquetando una web </h6>
                <section className="container-flex-global4">
                    <div className="container-flex4 cfw1">
                        Cabecera
                    </div>
                    <div className="container-flex4 cfw2">
                        Menu
                    </div>
                    <div className="container-flex4 cfw3">
                        Contenido
                    </div>
                    <div className="container-flex4 cfw4">
                        Barra lateral
                    </div>
                    <div className="container-flex4 cfw5">
                        Footer
                    </div>

                </section>
            </div>

        </>
    )
}

export default FlexBox;