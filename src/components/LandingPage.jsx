import React, { useState } from 'react';
import { WhatsAppFloating } from './WhatsAppContact';
import profileImg from '../../assets/fotoperfil.jpg';
import heroImg from '../../assets/mamafotolanding.jpeg';
import turnitoLogo from '../../assets/turnito-logo.png';
import global66Logo from '../../assets/global66-logo.png';
import './LandingPage.css';

const LandingPage = () => {
    const [openFaq, setOpenFaq] = useState(null);

    const toggleFaq = (index) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    return (
        <>
            {/* Hero Section */}
            <section className="hero-section">
                <div className="hero-content">
                    <div className="hero-text">
                        <h1>Psicoterapia online, claridad mental y acción corporal</h1>
                        <h2 className="subtitle">Acompañamiento psicológico profesional con enfoque sistémico psicomotriz</h2>
                        <p className="hero-description">
                            La psicoterapia online que se ofrece integra un enfoque sistémico psicomotriz tecnológico positivo junto al método de resonancia emocional nutritiva, brinda beneficios logísticos y un dispositivo especialmente diseñado para recuperar la vitalidad, gestión emocional, fortalecer la capacidad de discernimiento y favorecer el logro de resultados tangibles alineados con los objetivos terapéuticos deseados.
                        </p>
                        <p className="hero-note">
                            <strong>Modalidad flexible:</strong> Atención individual, vincular o grupal. Puedes comenzar en cualquier modalidad y rotar según tus necesidades.
                        </p>
                    </div>
                    <div className="hero-image">
                        <img src={heroImg} alt="Rosana Esterlizi - Psicóloga Online" />
                    </div>
                </div>
            </section>

            {/* Target Audience Section */}
            <section className="audience-section">
                <div className="container-full">
                    <h2>¿Para quién es este espacio?</h2>
                    <div className="audience-grid">
                        <div className="audience-item">
                            <div className="audience-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z"/>
                                </svg>
                            </div>
                            <h3>Para quienes requieran recuperar la vitalidad psíquica</h3>
                            <p>Personas dispuestas a enfrentarse a sus problemas con acompañamiento profesional.</p>
                        </div>
                        <div className="audience-item">
                            <div className="audience-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                                    <path d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.235.235 0 0 1 .02-.022z"/>
                                </svg>
                            </div>
                            <h3>Para quienes necesitan resultados tangibles</h3>
                            <p>Resultados alineados a los objetivos deseados con acompañamiento profesional.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Modalities Section */}
            <section className="modalities-section">
                <div className="container-full">
                    <h2>Modalidades de atención psicológica</h2>
                    <div className="modalities-grid">
                        <div className="modality-item">
                            <div className="modality-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z"/>
                                </svg>
                            </div>
                            <h3>Psicoterapia individual online</h3>
                            <p>Espacio clínico personalizado para adultos.</p>
                        </div>
                        <div className="modality-item">
                            <div className="modality-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8Zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022ZM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816ZM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z"/>
                                </svg>
                            </div>
                            <h3>Psicoterapia de pareja online</h3>
                            <p>Cuidado emocional y prevención de conflictos vinculares.</p>
                        </div>
                        <div className="modality-item">
                            <div className="modality-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7Zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-5.784 6A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216ZM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"/>
                                </svg>
                            </div>
                            <h3>Psicoterapia grupal online</h3>
                            <p>Procesos grupales terapéuticos y dispositivos de acompañamiento.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Resonancia Program Section */}
            <section className="resonancia-section">
                <div className="resonancia-content">
                    <div className="resonancia-text">
                        <h2>Programa Resonancia Emocional Nutritiva</h2>
                        <p>
                            Un dispositivo flexible que incluye enfoque sistémico psicomotriz positivo tecnológico en escenarios terapéuticos diferentes (individuales, vinculares o de telepsicoterapia grupal) orientado al fortalecimiento emocional.
                        </p>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section className="about-section">
                <div className="about-content">
                    <div className="about-image">
                        <img src={profileImg} alt="Rosana Esterlizi - Psicóloga" />
                    </div>
                    <div className="about-text">
                        <h2>Sobre mí</h2>
                        <h3>Rosana Esterlizi: Psicóloga – Psicomotricista – Escritora</h3>
                        <ul className="about-list">
                            <li>Formación en posgrados nacionales e internacionales.</li>
                            <li>Cuenta con 27 años de experiencia en la atención clínica individual, de pareja, familiar y grupal, con un abordaje sistémico/psicomotriz como eje del trabajo. Incluyendo las terapias Guías prácticas personalizadas en pasos para trabajar los problemas y síntomas.</li>
                            <li>Acompaña el bienestar emocional de empresarias/os, artistas y personas vinculadas al ámbito del espectáculo, atendiendo las particularidades subjetivas y vinculares de estos contextos.</li>
                            <li>La psicoterapia se complementa en paralelo con IA entrenada en psicología positiva.</li>
                            <li>Es creadora del programa "Resonancia Emocional Nutritiva", un espacio de telepsicoterapia grupal orientado al cuidado de la salud mental y al fortalecimiento de recursos emocionales.</li>
                            <li>Integra BePositive Partner como Psicóloga Positiva.</li>
                            <li>Posee amplia experiencia en el trabajo con docentes, formando parte de equipos de Salud Mental del centro de Salud de la unión de educadores de la provincia de Córdoba.</li>
                            <li>Autora de los libros "Los Liaros, superhéroes de las Aves" y "La Sarina, Superhéroes de las mariposas", ambos de uso docente (ecoliteratura). Participa en ferias de libros y talleres de lectura en escuelas.</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Why Online Section */}
            <section className="why-online-section">
                <div className="container-full">
                    <h2>¿Por qué psicoterapia online?</h2>
                    <p className="why-online-text">
                        La terapia online permite acceder a atención psicológica profesional desde cualquier lugar,
                        con flexibilidad horaria y continuidad del proceso terapéutico.
                    </p>
                </div>
            </section>

            {/* FAQ Section */}

            {/* Initial Consultation Section */}
            <section className="consultation-section">
                <div className="consultation-content">
                    <h2>Consulta inicial informativa</h2>
                    <p className="consultation-price">USD 25</p>
                    <p className="consultation-description">
                        Una sesión orientativa para conocer el espacio terapéutico y evaluar tu proceso.
                    </p>

                    <div className="payment-options">
                        <h3>Métodos de pago</h3>

                        <div className="payment-buttons">
                            <a
                                href="https://www.paypal.com/paypalme/SantinoConsigli/25"
                                className="btn-payment paypal"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <svg className="payment-icon" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.983 5.05-4.349 6.797-8.647 6.797h-2.19c-.524 0-.968.382-1.05.9l-1.12 7.106zm14.146-14.42a3.35 3.35 0 0 0-.607-.541c-.013.076-.026.175-.041.254-.93 4.778-4.005 7.201-9.138 7.201h-2.19a.563.563 0 0 0-.556.479l-1.187 7.527h-.506l-.24 1.516a.56.56 0 0 0 .554.647h3.882c.46 0 .85-.334.922-.788.06-.26.76-4.852.816-5.09a.932.932 0 0 1 .923-.788h.58c3.76 0 6.705-1.528 7.565-5.946.36-1.847.174-3.388-.777-4.471z"/>
                                </svg>
                                PayPal
                            </a>

                            <a
                                href="https://www.global66.com"
                                className="payment-link global66"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <div className="payment-logo">
                                    <img src={global66Logo} alt="Global66" className="global66-logo" />
                                </div>
                                <div className="payment-details">
                                    <strong>Transferencia Global66</strong>
                                    <p>Usuario: <span className="highlight">SANCON1141</span></p>
                                </div>
                            </a>
                        </div>

                        <p className="payment-note">
                            Después de realizar el pago, envía el comprobante por WhatsApp para coordinar tu consulta inicial.
                        </p>

                        <a
                            href="https://turnito.app/c/rosanaesterlizi"
                            className="btn-turnito"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img src={turnitoLogo} alt="Turnito" className="turnito-icon" />
                            Agendar turno en Turnito
                        </a>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="contact-section">
                <div className="contact-content">
                    <h2>Contacto</h2>
                    <h3>Consultas y coordinación</h3>
                    <a
                        href="https://wa.me/5493516971458?text=Hola!%20Me%20gustar%C3%ADa%20realizar%20una%20consulta."
                        className="btn-contact"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Contactar por WhatsApp
                    </a>
                </div>
            </section>

            {/* Floating WhatsApp Button */}
            <WhatsAppFloating message="Hola! Me gustaría agendar una sesión online." />
        </>
    );
};

export default LandingPage;
