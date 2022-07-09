import imagen1 from "../assets/imagenes/imagen1.jpg";
import imagen2 from "../assets/imagenes/imagen2.jpg";
import imagen3 from "../assets/imagenes/imagen3.jpg";
import ieee1 from "../assets/imagenes/IEEE1.jpg";
import ieee2 from "../assets/imagenes/IEEE2.jpg";
import ieee3 from "../assets/imagenes/IEEE3.jpg";
import ieee4 from "../assets/imagenes/IEEE4.jpg";

export const HomeScreen = () => {
 return (
    <section className="home-container">
        <a href="/auth">iniciar sesion</a>
    <div className="titulos">
        <h1>Ramti 3</h1>
        <h2>Robot asistente medico del Tecnm iztapalapa 3</h2>

    </div>
    <div className="desc">
        <p>Ramti3 es un robot autonomo con la finalidad de brindar la asistencia medica basica a toda la comunidad del TecNM iztapalapa3 con el cual se busca la prevencion de problemas graves en la salud derivado a una mala constubre de no revisar el estadode
            salud temporal
        </p>
        <br><br>
        <b>funcionalidades:</b>
        <ol>
            <li>interaccion con la comunidad</li>
            <li>medi termperatura corporal</li>
            <li>medir presion arterial</li>
            <li>medir la oxigenacion </li>
            <li>brindar ayuda de un kit de primeros auxilios</li>
            <li>medicion de frecuencia cardiaca</li>

        </ol>


    </div>
    <div class="imgRamti">
        <img src="imagenes/imagen1.jpg" className="imgC"/>
        <img src="imagenes/imagen2.jpg" className="imgC"/>
        <img src="imagenes/imagen3.jpg" className="imgC"/>

    </div>
    <div className="IEEE">
        <h3>Rama Estudiantil del IEEE TecNM Iztapalapa 3</h3>
    </div>
    <div class="imgIEEE">
        <img src="imagenes/IEEE1.jpg" className="imgC"/>
        <img src="imagenes/IEEE2.jpg" className="imgC"/>
        <img src="imagenes/IEEE3.jpg" className="imgC"/>
        <img src="imagenes/IEEE4.jpg" className="imgC"/>

    </div>
    <div className="redes">
        <b>redes sociales:</b>
        <br>
        <a href=""><img src="imagenes/logoF.png" alt="" /></a>

        </a href=""><img src="imagenes/LogoCorreo.png" alt="" /></a>

        <a href=""><img src="imagenes/Linsta2.png" alt="" /></a>
    </div>
    </section>
    );
}