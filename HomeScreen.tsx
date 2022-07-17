import styles from '../styles/homeScreen.module.css';
import ie from '../assets/ie.png';
import IEEEHombres from '../assets/IEEEHombres.png';
import IEEEIztapalapaIII from '../assets/IEEEIztapalapaIII.png';
import IEEEWoman from '../assets/IEEEWoman.png';
import IEEE1 from '../assets/IEEE1.png';
import IEEE2 from '../assets/IEEE2.png';
import IEEE3 from '../assets/IEEE3.png';
import IEEE4 from '../assets/IEEE4.png';
import carrito1 from '../assets/carrito1.png';
import carrito2 from '../assets/carrito2.png';
import LogoInsta from '../assets/LogoInsta.png';
import LogoFaceboock from '../assets/LogoFaceboock.png';
import LogoCorreo from '../assets/LogoCorreo.png';
import tecnm3 from '../assets/tecnm3.png';
import TecNM_logo from '../assets/TecNM_logo.png';

import IEEEPHOTO1 from "../assets/IEEE1.fad663f4.jpg";
import RAMI from '../assets/rami.jpg';
export const HomeScreen = () => {
    return (
        <div className={styles.cabecera}>
        <img src={ie} alt="" className={styles.logo} />
        <img src={IEEEHombres} alt="" className={styles.logo} />
        <img src={IEEEIztapalapaIII} alt="" className={styles.logo} />
        <img src={IEEEWoman} alt="" className={styles.logo} />
        <img src={tecnm3} alt="" className={styles.logo} />
        <img src={TecNM_logo} alt="" className={styles.logo} />
        <h1 className={styles.titulo}>
            Robot Asistente Medico del TecNM Iztapalapas3
        </h1>

    </div>
    <div className={styles.home}>


        <div className={styles.in-flex}>
            <h2 className={styles.titulo}>
                QUE ES RAMTI3?
            </h2>

            <p className={styles.texto}>Ramti3 es un robot autonomo con la finalidad de brindar la asistencia medica basica a toda la comunidad del TecNM iztapalapa 3 con el cual se busca la prevencion de problemas graves en la salud derivado a una mala constubre de no revisar el
                estadode salud temporal.</p>
            <h3 className={styles.titulo}>Funcionalidades:</h3>
            <div className={styles.Lista}>

                <ul className={styles.lista}>
                    <li className={styles.texto}>
                        Interaccion con la comunidad.
                    </li>
                    <li className={styles.texto}>
                        Medir termperatura corporal.
                    </li>
                    <li className={styles.texto}>
                        Medir presion arterial.
                    </li>
                    <li className={styles.texto}>
                        Medir la oxigenacion.
                    </li>
                    <li className={styles.texto}>
                        Brindar ayuda de un kit de primeros auxilios <a href="/auth">.</a>
                    </li>
                </ul>

            </div>

            <div className={styles.ramti}>
                <img src={carrito1} alt="" className={styles.Ramti}/>
                <img src={carrito2} alt="" className={styles.Ramti}/>
            </div>

        </div>
        <div className={styles.in-flex}>
            <div className={styles.Imgram}>
                <img src={IEEE1} alt="" className={styles.Rama}/>
                <img src={IEEE2} alt="" className={styles.Rama}/>
                <img src={IEEE3} alt="" className={styles.Rama}/>
                <img src={IEEE4} alt="" className={styles.Rama}/>


            </div>
            <div className={styles.map}>
                <iframe className={styles.map} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3764.7469080654582!2d-98.98804918466621!3d19.336785748747193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ce1d66790d48ab%3A0x511207a1a7a61918!2sTecNM%20Campus%20Iztapalapa%20III!5e0!3m2!1ses-419!2smx!4v1657605727834!5m2!1ses-419!2smx"
                    width="100%" height="330px" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

            
    </div>
    <div className={styles.redes}>
        <div>
            <a href="https://www.instagram.com/ieee_tecnm_iti3/"> <img src={LogoInsta} alt="" className={styles.imgredes}/>
            </a>
            <a href="https://www.facebook.com/ieeeiti3"> <img src={LogoFaceboock} alt="" className={styles.imgredes}/>
            </a>
            <a href=""> <img src={LogoCorreo} alt="" className={styles.imgredes}/>
            </a>

        </div>


    </div>
    );
}


