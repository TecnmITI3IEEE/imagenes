import imagen1 from "../assets/imagenes/imagen1.jpg";
import imagen2 from "../assets/imagenes/imagen2.jpg";
import imagen3 from "../assets/imagenes/imagen3.jpg";
import ieee1 from "../assets/imagenes/IEEE1.jpg";
import ieee2 from "../assets/imagenes/IEEE2.jpg";
import ieee3 from "../assets/imagenes/IEEE3.jpg";
import ieee4 from "../assets/imagenes/IEE4.jpg";

export const HomeScreen = () => { return (
    <section className="home-container">
    
        <div className="titulos">

            <h1>Ramti 3</h1>
            <h2>Robot asistente medico del Tecnm iztapalapa 3</h2>
    
        </div>
        <div className="desc">
            <p>Ramti3 es un robot autonomo con la finalidad de brindar la asistencia medica basica a toda la comunidad del TecNM iztapalapa3 con el cual se busca la prevencion de problemas graves en la salud derivado a una mala constubre de no revisar el estadode
                salud temporal
            </p>
            <p>funcionalidades:</p>
            <ol>
                <li>interaccion con la comunidad</li>
                <li>medi termperatura corporal</li>
                <li>medir presion arterial</li>
                <li>medir la oxigenacion </li>
                <li>brindar ayuda de un kit de primeros auxilios</li>
                <li>medicion de frecuencia cardiaca</li>
    
            </ol>
    
    
        </div>
        <div className="imgRamti">
            <img src={imagen1} alt="" srcset="">
            <img src="{imagen2} alt="" srcset="">
            <img src="{imagen3} alt="" srcset="">
    
        </div>
        <div className="IEEE">
            <h3>Rama Estudiantil del IEEE TecNM Iztapalapa 3</h3>
            <ul>
                <li><a href="">Faceboock</a></li>
                <li><a href="">Instagram</a></li>
                <li><a href="">Correo</a></li>
            </ul>
    
    
        </div>
        <div className="imgIEEE">
            <img src={ieee1} alt="" srcset="">
            <img src={ieee2} alt="" srcset="">
            <img src={ieee3} alt="" srcset="">
            <img src={ieee4} alt="" srcset="">
    
    
        </div>
    
    </section>
    ); }