

import tecnm3 from '../imagenes/tecnm3.png';
import IEEEHombres from '../imagenes/IEEEHombres.png';
import IEEEIztapalapaIII from '../imagenes/IEEEIztapalapaIII.png';
import IEEEWoman from '../imagenes/IEEEWoman.png';
import controles from '..imagenes/controles.png';
import sensores from '../imagenes/sensores.png';
import inicio from '../imagenes/inicio.png';
import { signOut } from "firebase/auth";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { auth } from "../firebase/firebase.config";
import styles from '../styles/controllersScreen.module.css';




export const ControllerScreeen = () => {
    const { setAuth } = useContext(AuthContext);
    function handleSignOut() {
        signOut(auth)
            .then((res) => {
                setAuth({ email: "", uid: "", isAuthentificated: false });
            })
            .catch(console.log)
    }

    return (
        <>

        <main className={styles.mainContainer}>
                <div class={styles.containerG}>
                    <div class={styles.cabecera}>
                        <img src={tecnm3} alt="" class={styles.logos}/>
                        <img src={IEEEIztapalapaIII} alt="" class={styles.logos}/>
                        <img src={IEEEHombres} alt="" class={styles.logos}/>
                        <img src={IEEEWoman} alt="" class={styles.logos}/>
                        <br>
                        <h1>Adminstradores</h1>
                    </div>
                <div class={styles.ContainerItems}>

                    <div class={styles.Controles}>
                        <a href="">
                            <img src={controles} alt="" class={styles.iconos}/>
                        </a>

                    </div>
                    <div class={styles.Sensores}>
                        <a href="">
                            <img src={sensores} alt="" class={styles.iconos}/>
                        </a>

                    </div>
                    <div class={styles.inicioPage}>
                        <a href="">
                            <img src={inicio} alt="" class={styles.iconos}/>
                        </a>

                    </div>
                </div>
            </div>
            
        </main>
        </>
    );
}