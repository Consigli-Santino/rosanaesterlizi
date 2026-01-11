import React, { useState } from 'react';
import { WhatsAppFloating } from './WhatsAppContact';
import profileImg from '../../assets/fotoperfil.jpg';
import heroImg from '../../assets/mamafotolanding.jpeg';
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
                        <h1>Psicóloga Online para Artistas, Empresarios y Empresarias</h1>
                        <h2 className="subtitle">Acompañamiento psicológico profesional en contextos de alta exigencia</h2>
                        <p className="hero-description">
                            Psicoterapia online orientada al cuidado de la salud mental de personas que crean, lideran y toman decisiones.
                            Atención psicológica para artistas, músicos, empresarios y empresarias, desde una perspectiva integral y humana.
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
                                    <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                                    <path d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.235.235 0 0 1 .02-.022z"/>
                                </svg>
                            </div>
                            <h3>Psicoterapia para artistas y músicos</h3>
                            <p>Estrés creativo, exposición, autoexigencia, ansiedad, bloqueos emocionales y vínculos.</p>
                        </div>
                        <div className="audience-item">
                            <div className="audience-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7Zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-5.784 6A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216Z"/>
                                    <path d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"/>
                                </svg>
                            </div>
                            <h3>Psicoterapia para empresarios y empresarias</h3>
                            <p>Liderazgo, toma de decisiones, burnout, presión laboral, soledad y equilibrio vida–trabajo.</p>
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
                            Programa de telepsicoterapia grupal orientado al fortalecimiento emocional,
                            la prevención del desgaste psíquico y el cuidado de la salud mental en contextos
                            de alta demanda.
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
                        <h3>Lic. Rosana Esterlizi – Psicoterapeuta Familiar y Grupal</h3>
                        <p>
                            Psicóloga con más de 27 años de experiencia clínica en atención individual,
                            de pareja, familia y grupos. Formación nacional e internacional. Acompañamiento
                            psicológico para artistas, músicos, empresarios y empresarias.
                        </p>
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
            <section className="faq-section">
                <div className="container-full">
                    <h2>Preguntas frecuentes</h2>
                    <div className="faq-list">
                        <div className={`faq-item ${openFaq === 0 ? 'open' : ''}`}>
                            <button className="faq-question" onClick={() => toggleFaq(0)}>
                                <h3>¿La psicoterapia online es efectiva?</h3>
                                <span className="faq-icon">{openFaq === 0 ? '−' : '+'}</span>
                            </button>
                            <div className="faq-answer">
                                <p>Sí, cuenta con evidencia clínica y permite sostener procesos terapéuticos profundos.</p>
                            </div>
                        </div>
                        <div className={`faq-item ${openFaq === 1 ? 'open' : ''}`}>
                            <button className="faq-question" onClick={() => toggleFaq(1)}>
                                <h3>¿Puedo atenderme desde otro país?</h3>
                                <span className="faq-icon">{openFaq === 1 ? '−' : '+'}</span>
                            </button>
                            <div className="faq-answer">
                                <p>Sí, realizo psicoterapia online para personas que se encuentran fuera de Argentina.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="contact-section">
                <div className="contact-content">
                    <h2>Contacto</h2>
                    <h3>Solicitar entrevista o consulta</h3>
                    <a
                        href="https://wa.me/5493516971458?text=Hola!%20Me%20gustar%C3%ADa%20agendar%20una%20sesi%C3%B3n%20online."
                        className="btn-contact"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Agendar sesión online
                    </a>
                </div>
            </section>

            {/* Floating WhatsApp Button */}
            <WhatsAppFloating message="Hola! Me gustaría agendar una sesión online." />
        </>
    );
};

export default LandingPage;
