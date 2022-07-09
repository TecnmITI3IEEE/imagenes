import imagen1 from "../assets/imagenes/imagen1.jpg";
import imagen2 from "../assets/imagenes/imagen2.jpg";
import imagen3 from "../assets/imagenes/imagen3.jpg";
import ieee1 from "../assets/imagenes/IEEE1.jpg";
import ieee2 from "../assets/imagenes/IEEE2.jpg";
import ieee3 from "../assets/imagenes/IEEE3.jpg";
import ieee4 from "../assets/imagenes/IEEE4.jpg";
import insta from "../assets/imagenes/Linsta2.png"
import face from "../assets/imagenes/logoF.png"
import correo from "../assets/imagenes/LogoCorreo.png"
export const HomeScreen = () => {
 return (
    <section className="home-container">
        
    <div className="titulos">
        <h1>Ramti 3</h1>
        <h2>Robot asistente medico del Tecnm iztapalapa 3</h2>

    </div>
    <div className="desc">
        <p>Ramti3 es un robot autonomo con la finalidad de brindar la asistencia medica basica a toda la comunidad del TecNM iztapalapa3 con el cual se busca la prevencion de problemas graves en la salud derivado a una mala constubre de no revisar el estadode
            salud temporal
        </p>

        <b>Funcionalidades:</b>

        <br/><br/>
       
            <p>Interaccion con la comunidad</p>
            <p>Medi termperatura corporal</p>
            <p>Medir presion arterial</p>
            <p>Medir la oxigenacion </p>
            <p>Brindar ayuda de un kit de primeros auxilios</p>
            <p>Medicion de frecuencia cardiaca</p>

      


    </div>
    <div className="imgRamti">
        <div className="scale">
        <img src={imagen1} className="imgC"/>
        </div>
        <div className="scale">
        <img src={imagen2} className="imgC"/>
        </div>
        <div className="scale">
        <img src={imagen3} className="imgC"/>
        </div>
        
        
        

    </div>
    <div className="IEEE">
        <h3>Rama Estudiantil del IEEE TecNM Iztapalapa 3</h3>
    </div>
    <div className="imgIEEE">
        <div className="scale">
            <img src={ieee1} className="imgC"/>
        </div>
        <div className="scale">
        <img src={ieee2} className="imgC"/>
        </div>
        <div className="scale">
        <img src={ieee3} className="imgC"/>
        </div>
        <div className="scale">
        <img src={ieee4} className="imgC"/>
        </div>
        
        
        
        

    </div>
    <div className="redes">
        <b>Redes sociales:</b>
        <br/>
        <a href="https://www.facebook.com/ieeeiti3"><img src={face} alt="" /></a>

        <a href="https://instagram.com/ieee_tecnm_iti3?igshid=YmMyMTA2M2Y="><img src={insta} alt="" /></a>

        <a href=""><img src={correo} alt="" /></a>
    </div>
    </section>
    );p