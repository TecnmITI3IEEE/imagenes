import styles from '../styles/sensoresScreen.module.css'; 
import IEEEHombres from '../imagenes/IEEEHombres.png';
 import IEEEIztapalapaIII from '../imagenes/IEEEIztapalapaIII.png'; 
 import IEEEWoman from '../imagenes/IEEEWoman.png';

import tecnm3 from '../imagenes/tecnm3.png';
 
export const SensoresScreen = () => {
    return(
        <main className={styles.mainContainer}>
            <div className={styles.cabecera}>
                <img src={IEEEHombres} alt= className={styles.logos}/>
                <img src={tecnm3} alt= className={styles.logos}/>
                <img src={IEEEIztapalapaIII} alt= className={styles.logos}/>
            
                <img src={IEEEWoman} alt= className={styles.logos}/>
                <h1>Sensores</h1>
            </div>
            <div className={styles.containerG}>
                <div className={styles.containerItems}>
                    <div className={styles.temperatura}>
                        <b>Temperatura</b>
                        <b>33.2°C</b>
                    </div>
                    <div className={styles.oxigenacion}>
                        <b>Oxigenación</b>
                        <b>95%</b>
                    </div>
                    <div className={styles.presion}>
                        <b>Presión</b>
                        <b>120/80</b>
                    </div>
                    <button>enviar</button>
                </div>
            
            </div>
        </main>>
    );
}

