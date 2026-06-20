import React, { useState } from 'react';
import { WhatsAppFloating } from './WhatsAppContact';
import heroImg from '../../assets/mamafotolanding.jpeg';
import turnitoLogo from '../../assets/turnito-logo.png';
import './LandingPage.css';

const LandingPage = () => {
    const [selectedPrice, setSelectedPrice] = useState(null);

    return (
        <>
            {/* Hero Section - Only first image, larger */}
            <section className="hero-section">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 col-md-10 text-center">
                            <div className="hero-image-large">
                                <img src={heroImg} alt="Rosana Esterlizi - Psicóloga" />
                            </div>
                            <div className="hero-text">
                                <h1>Rosana Beatriz Esterlizi</h1>
                                <h2 className="subtitle">Psicóloga Clínica Sistémica</h2>
                                <p className="tagline">✨ De la transformación al autocuidado consciente</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section className="about-section">
                <div className="container">
                    <h2 className="text-center mb-4">Sobre mí</h2>
                    <h3 className="text-center mb-4">Psicóloga · Psicomotricista · Escritora · Conferencista</h3>

                    <div className="about-highlights">
                        <div className="highlight-item">
                            <span className="highlight-number">27</span>
                            <span className="highlight-label">años de experiencia</span>
                        </div>
                        <div className="highlight-item">
                            <span className="highlight-number">900+</span>
                            <span className="highlight-label">casos clínicos</span>
                        </div>
                    </div>

                    <p className="about-description text-center">
                        Creadora del programa:
                    </p>
                    <p className="about-description text-center">
                        <strong>
                            "Resonancia Emocional Nutritiva"
                        </strong>
                    </p>


                    <div className="about-grid-section row g-3 mt-3 align-items-start">
                        {/* Especialización */}
                        <div className="col-lg-5 col-md-6">
                            <div className="about-card-compact">
                                <h4 className="about-card-title">Especialización en:</h4>
                                <div className="specialty-tags">
                                    <span>Trastornos del ánimo</span>
                                    <span>Adultos</span>
                                    <span>Rupturas</span>
                                    <span>Miedos</span>
                                    <span>Dependencia emocional</span>
                                    <span>Familia</span>
                                    <span>Niños</span>
                                    <span>Adolescentes</span>
                                    <span>Grupo</span>
                                </div>
                            </div>
                        </div>
                        {/* Experiencia */}
                        <div className="col-lg-7 col-md-6">
                            <div className="about-card-compact">
                                <h4 className="about-card-title">Experiencia en:</h4>
                                <div className="row g-1">
                                    <div className="col-6">
                                        <div className="exp-item">Malestar anímico persistente</div>
                                        <div className="exp-item">Conflictos relacionales</div>
                                        <div className="exp-item">Autoestima disfuncional</div>
                                    </div>
                                    <div className="col-6">
                                        <div className="exp-item">Sensación de estancamiento</div>
                                        <div className="exp-item">Desregulación emocional</div>
                                        <div className="exp-item">Transformación personal</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Consultation Reasons */}
            <section className="consultation-reasons">
                <div className="container">
                    <h2>¿En qué situación puedo acompañarte?</h2>
                    <div className="row g-3 justify-content-center">
                        <div className="col-lg-5 col-md-6">
                            <div className="reason-card">
                                <p>Cuando deseas reconectar con vos y los demás.</p>
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-6">
                            <div className="reason-card">
                                <p>Cuando deseas encontrar la transformación de tu interior en armonía con tu contexto y la naturaleza.</p>
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-6">
                            <div className="reason-card">
                                <p>"Cuando ya no querés atravesar tus dificultades en soledad y buscás un espacio para expresarte, conectar y sentirte acompañado/a junto a otros."</p>
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-6">
                            <div className="reason-card">
                                <p>"Cuando te cuesta poner límites y terminás postergándote."</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Program Section */}
            <section className="method-section">
                <div className="container">
                    <h2>Acerca del programa</h2>

                    <p className="method-description">
                        Un acompañamiento profesional que atiende <strong>mente, emoción y cuerpo</strong>, donde desde un rol activo y en resonancia con otros me encuentro, me reconozco y me renuevo.
                    </p>

                    <div className="method-approach">
                        <h4>Desde un enfoque sistémico acompaño procesos terapéuticos orientados a:</h4>
                        <ul>
                            <li>Las fortalezas que sostienen la salud emocional</li>
                            <li>Recuperar o construir recursos internos</li>
                            <li>Promover un autocuidado consciente</li>
                        </ul>
                    </div>

                    <div className="method-faq">
                        <div className="faq-item">
                            <h4>¿Este programa es adecuado si me siento estresado?</h4>
                            <p>
                                Sí, puede ser una buena opción si te sentís estresado, ya que el programa trabaja en la reducción de las tensiones acumuladas que afectan la salud y la calidad de vida. A través de un abordaje integral, busca ayudarte a recuperar el equilibrio interno, promoviendo la regulación en diferentes niveles: conductual, emocional, alimentario y vincular, favoreciendo un mayor bienestar en la vida cotidiana.
                            </p>
                        </div>
                        <div className="faq-item">
                            <h4>¿Este programa es adecuado si me preocupa un familiar (hijo, sobrino, pareja, etc.)?</h4>
                            <p>
                                Sí. El programa toma como punto de partida las situaciones, problemas o necesidades que te preocupan respecto de ese familiar, para comprenderlas mejor y orientar intervenciones y estrategias de acompañamiento adecuadas.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="testimonials-section">
                <div className="container">
                    <h2>Comentarios de pacientes</h2>
                    <div className="row g-3">
                        <div className="col-lg-4 col-md-6">
                            <div className="testimonial-card">
                                <p className="testimonial-text">
                                    "Hola Rooo... Debo volver a terapia 🧡. Donde me río tanto más allá de las lágrimas. SOS lo más!!"
                                </p>
                                <p className="testimonial-author">— María Gabriela Gómez</p>
                                <p className="testimonial-date">07/02/26</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="testimonial-card">
                                <p className="testimonial-text">
                                    "Infinitamente Agradecido! SOS una genia! Abrazos"
                                </p>
                                <p className="testimonial-author">— Matías Nicolás Druetta</p>
                                <p className="testimonial-date">26/01/25</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="testimonial-card">
                                <p className="testimonial-text">
                                    "Aprecio y agradezco todo lo que haces por mí, que te hayas cruzado en mi camino, son actos de amor"
                                </p>
                                <p className="testimonial-author">— Claudia Gutiérrez</p>
                                <p className="testimonial-date">17/10/24</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services & Pricing Section */}
            <section className="services-section">
                <div className="container">
                    <h2>Agenda tu hora</h2>
                    <p className="services-subtitle">Online / 60 minutos</p>

                    <div className="row g-3">
                        <div className="col-lg-4 col-md-6">
                            <div
                                className={`pricing-card ${selectedPrice === 'informativa' ? 'selected' : ''}`}
                                onClick={() => setSelectedPrice(prev => prev === 'informativa' ? null : 'informativa')}
                            >
                                <h3>Consulta Informativa</h3>
                                <p className="price">$30.000</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div
                                className={`pricing-card featured ${selectedPrice === 'individual' ? 'selected' : ''}`}
                                onClick={() => setSelectedPrice(prev => prev === 'individual' ? null : 'individual')}
                            >
                                <h3>Psicoterapia Individual</h3>
                                <p className="price">$45.000</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div
                                className={`pricing-card ${selectedPrice === 'pareja' ? 'selected' : ''}`}
                                onClick={() => setSelectedPrice(prev => prev === 'pareja' ? null : 'pareja')}
                            >
                                <h3>Psicoterapia de Pareja</h3>
                                <p className="price">$55.000</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div
                                className={`pricing-card ${selectedPrice === 'familiar' ? 'selected' : ''}`}
                                onClick={() => setSelectedPrice(prev => prev === 'familiar' ? null : 'familiar')}
                            >
                                <h3>Psicoterapia Familiar</h3>
                                <p className="price">$55.000</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div
                                className={`pricing-card ${selectedPrice === 'grupal' ? 'selected' : ''}`}
                                onClick={() => setSelectedPrice(prev => prev === 'grupal' ? null : 'grupal')}
                            >
                                <h3>Psicoterapia Grupal</h3>
                                <p className="price">$20.000</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div
                                className={`pricing-card program ${selectedPrice === 'programa' ? 'selected' : ''}`}
                                onClick={() => setSelectedPrice(prev => prev === 'programa' ? null : 'programa')}
                            >
                                <h3>Programa:</h3>
                                <h4>Resonancia Emocional Nutritiva</h4>
                                <p className="price">$360.000</p>
                                <p className="duration">3 meses</p>
                            </div>
                        </div>
                    </div>
                    <div className="service-benefits mb-4">
                        <p>✓ Evaluación y acompañamiento del estado de ánimo</p>
                        <p>✓ Cada sesión aporta a la atención de personas de recursos limitados</p>
                        <p>✓ Tu participación también ayuda a que personas que hoy tienen recursos limitados accedan a acompañamiento psicológico.</p>
                    </div>
                    <div className="method-approach">
                       <p>¿Te animas a realizar un proceso Terapéutico diferente?</p>
                        <p>¿Te animas a incluir a otros, familiares, amigos en tu proceso?</p>
                        <p>Te invito a dar el primer paso: </p>
                        <p>Es facil, sencillo, pero diferente.
                            Agenda un turno y comenemos a trabajar juntos.</p>
                    </div>

                    {/* Payment Method */}
                    <div className="payment-method-section">
                        <h3>Método de pago</h3>
                        {!selectedPrice && (
                            <p className="payment-instruction-select">
                              Si desea una atención, debe seleccionar una consulta arriba para continuar con el pago
                            </p>
                        )}

                        <div className="row g-3 justify-content-center">
                            <div className="col-lg-6 col-md-8">
                                {selectedPrice ? (
                                    <a
                                        href="https://mpago.la/"
                                        className="payment-card mercadopago"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <svg className="payment-icon" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="24" cy="24" r="24" fill="#009EE3"/>
                                            <path d="M10 24C10 16.268 16.268 10 24 10C31.732 10 38 16.268 38 24C38 31.732 31.732 38 24 38C16.268 38 10 31.732 10 24Z" fill="#009EE3"/>
                                            <path d="M24 14C18.477 14 14 18.477 14 24C14 29.523 18.477 34 24 34C29.523 34 34 29.523 34 24C34 18.477 29.523 14 24 14ZM28.5 26.5H25.5V29.5H22.5V26.5H19.5V23.5H22.5V20.5H25.5V23.5H28.5V26.5Z" fill="white"/>
                                        </svg>
                                        <span>Pagar con Mercado Pago</span>
                                    </a>
                                ) : (
                                    <div className="payment-card mercadopago disabled">
                                        <svg className="payment-icon" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="24" cy="24" r="24" fill="#cccccc"/>
                                            <path d="M24 14C18.477 14 14 18.477 14 24C14 29.523 18.477 34 24 34C29.523 34 34 29.523 34 24C34 18.477 29.523 14 24 14ZM28.5 26.5H25.5V29.5H22.5V26.5H19.5V23.5H22.5V20.5H25.5V23.5H28.5V26.5Z" fill="white"/>
                                        </svg>
                                        <span>Seleccioná una consulta para pagar</span>
                                    </div>
                                )}
                            </div>
                        </div>

                        {selectedPrice && (
                            <p className="payment-note">
                                Después de realizar el pago, enviá el comprobante por WhatsApp para coordinar tu consulta.
                            </p>
                        )}

                        <div className="text-center mt-4">
                            <a
                                href="https://turnito.app/c/rosanaesterlizi"
                                className="btn-turnito"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <span className="turnito-logo-wrapper">
                                    <img src={turnitoLogo} alt="Turnito" className="turnito-icon" />
                                </span>
                                Agendar turno en Turnito
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="contact-section">
                <div className="container">
                    <h2>Contacto</h2>
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