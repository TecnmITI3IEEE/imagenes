import styles from '../styles/homeScreen.module.css';
import ie from '../imagenes/ie.png';
import IEEEHombres from '../imagenes/IEEEHombres.png';
import IEEEIztapalapaIII from '../imagenes/IEEEIztapalapaIII.png';
import IEEEWoman from '../imagenes/IEEEWoman.png';
import IEEE1 from '../imagenes/IEEE1.jpg';
import IEEE2 from '../imagenes/IEEE2.jpg';
import IEEE3 from '../imagenes/IEEE3.jpg';
import IEEE4 from '../imagenes/IEEE4.jpg';
import carrito1 from '../imagenes/carrito1.jpg';
import carrito2 from '../imagenes/carrito2.jpg';
import LogoInsta from '../imagenes/LogoInsta.png';
import LogoFaceboock from '../imagenes/LogoFaceboock.png';
import LogoCorreo from '../imagenes/LogoCorreo.png';
import tecnm3 from '../imagenes/tecnm3.png';
import TecNM_logo from '../imagenes/TecNM_logo.png';





export const HomeScreen = () => {
    return (
        <main className={styles.mainContainer}>
            <div className={styles.cabecera}>
                
                <img src={IEEEHombres} alt="" className={styles.logo} />
                <img src={IEEEIztapalapaIII} alt="" className={styles.logo} />
                <img src={TecNM_logo} alt="" className={styles.logo} />
                <img src={IEEEWoman} alt="" className={styles.logo} />
                <img src={tecnm3} alt="" className={styles.logo} />
                <h1 className={styles.titulo}>
                    Robot Asistente Medico del TecNM Iztapalapas3
                </h1>

            </div>
            <div className={styles.home}>


                <div className={styles.inFlex}>
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
                        <img src={carrito1} alt="" className={styles.Ramti} />
                        <img src={carrito2} alt="" className={styles.Ramti} />
                    </div>

                </div>
                <div className={styles.inFlex}>
                    <div className={styles.Imgram}>
                        <img src={IEEE1} alt="" className={styles.Rama} />
                        <img src={IEEE2} alt="" className={styles.Rama} />
                        <img src={IEEE3} alt="" className={styles.Rama} />
                        <img src={IEEE4} alt="" className={styles.Rama} />


                    </div>
                    <div className={styles.map}>
                        <iframe className={styles.map} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3764.7469080654582!2d-98.98804918466621!3d19.336785748747193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ce1d66790d48ab%3A0x511207a1a7a61918!2sTecNM%20Campus%20Iztapalapa%20III!5e0!3m2!1ses-419!2smx!4v1657605727834!5m2!1ses-419!2smx"
                            width="100%" height="330px" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

                    </div>




                </div>
            </div>
            <div className={styles.redes}>
                <div>
                    <a href="https://www.instagram.com/ieee_tecnm_iti3/"> <img src={LogoInsta} alt="" className={styles.imgredes} />
                    </a>
                    <a href="https://www.facebook.com/ieeeiti3"> <img src={LogoFaceboock} alt="" className={styles.imgredes} />
                    </a>
                    <a href=""> <img src={LogoCorreo} alt="" className={styles.imgredes} />
                    </a>

                </div>


            </div>
        </main>
    );
}
/*
const Body = () => {
    return (
        <Container>
            <section className={styles.body}>
                <article className={styles.mainContent}>
                    <div className={styles.proyectDescription}>
                        <h3 className={styles.subtitle}>QUE ES RAMTI3?</h3>
                        <p>Ramti3 es un robot autonomo con la finalidad de brindar la asistencia medica basica a toda la comunidad del TecNM <Link className={styles.link} to="/controllers">iztapalapa</Link> 3 con el cual se busca la prevencion de problemas graves en la salud derivado a una mala constubre de no revisar el estadode salud temporal.</p>
                    </div>
                    <div className={styles.functionalities}>
                        <h3 className={styles.subtitle}>FUNCIONALIDADES</h3>
                        <ul>
                            <li className={styles.listItem}>
                                Interaccion con la comunidad.
                            </li>
                            <li className={styles.listItem}>
                                Medir termperatura corporal.
                            </li>
                            <li className={styles.listItem}>
                                Medir presion arterial.
                            </li>
                            <li className={styles.listItem}>
                                Medir la oxigenacion.
                            </li>
                            <li className={styles.listItem}>
                                Brindar ayuda de un kit de primeros auxilios.
                            </li>
                        </ul>
                    </div>
                    <div className={styles.ramiContainer}>
                        <img src={RAMI} alt="rami" className={styles.rami}/>
                    </div>
                </article>
                <aside className={styles.aside}>
                    <article className={styles.imagesContainer}>
                        <h3 className={styles.subtitle}>RAMA ESTUDIANTIL IEEE</h3>
                        <img src={IEEEPHOTO1} alt="photo1" className={styles.photo} />
                        <Link to="/" className={styles.galeryLink}>VER GALERIA DE FOTOS</Link>
                    </article>
                    <article className={styles.extraContainer}>
                        {/*
                                EXTRA CONTAINER
                        }
                        <iframe className={styles.map} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3764.7469080654582!2d-98.98804918466621!3d19.336785748747193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ce1d66790d48ab%3A0x511207a1a7a61918!2sTecNM%20Campus%20Iztapalapa%20III!5e0!3m2!1ses-419!2smx!4v1657605727834!5m2!1ses-419!2smx" width="600" height="450" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </article>
                </aside>
            </section>
        </Container>

    );
}

const Header = () => {
    return (
        <header className={styles.header}>
            <Container>
                <>
                    <img
                        src={IEEELOGO}
                        alt="ieeeLogo"
                        className={styles.logoImg}
                    />
                </>
            </Container>
        </header>
    );
}

interface ContainerProps {
    children: React.ReactElement | []
}

const Container = ({ children }: ContainerProps) => {
    return (
        <article className={styles.container}>
            {
                children
            }
        </article>
    );
}

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <section className={styles.socialContainer}>
                <article>
                    Siguenos en nuestras redes!
                </article>
                <article className={styles.iconsContainer}>
                    <a href="https://www.facebook.com/ieeeiti3" target="__blank">

                        <img
                            src={facebookLogo}
                            alt="facebook-logo"
                            className={styles.socialLogo}
                        />
                    </a>
                    <a href="https://www.instagram.com/ieee_tecnm_iti3/" target="__blank">
                        <img
                            src={instagramLogo}
                            alt="instagram-logo"
                            className={styles.socialLogo}
                        />

                    </a>
                </article>
            </section>
        </footer>
    );
}

const Banner = () => {
    return (
        <section className={styles.banner}>
            <h1 className={styles.title}>Robot asistente medico del Tecnm iztapalapa 3</h1>
        </section>
    );
}
*/