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
                        Creadora del programa <strong>"Resonancia Emocional Nutritiva"</strong>
                    </p>

                    <div className="row mt-4">
                        <div className="col-md-6">
                            <div className="specialties">
                                <h4>Especialización en:</h4>
                                <div className="specialty-tags">
                                    <span>Trastornos del ánimo</span>
                                    <span>Adultos</span>
                                    <span>Rupturas</span>
                                    <span>Miedos</span>
                                    <span>Dependencia emocional</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="experience-areas">
                                <h4>Experiencia en:</h4>
                                <ul>
                                    <li>Malestar anímico persistente</li>
                                    <li>Conflictos relacionales</li>
                                    <li>Autoestima disfuncional</li>
                                    <li>Sensación de estancamiento</li>
                                    <li>Desregulación emocional</li>
                                    <li>Procesos de desarrollo y transformación personal</li>
                                </ul>
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
                                <p>"Quiero dejar de perderme en mi relación de pareja"</p>
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-6">
                            <div className="reason-card">
                                <p>"Antes podía hacer muchas cosas, ahora ya no"</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Method Section */}
            <section className="method-section">
                <div className="container">
                    <h2>Acerca del método</h2>
                    <h3>¿Qué propone la Resonancia Emocional Nutritiva?</h3>

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
                            <h4>¿Este método es adecuado si me siento agotado o estresado?</h4>
                            <p>
                                Sí. El método Resonancia Emocional Nutritiva es especialmente adecuado cuando hay agotamiento emocional, estrés sostenido o sensación de saturación. El trabajo terapéutico apunta a comprender qué sostiene ese desgaste, regular la sobrecarga emocional y recuperar vitalidad y claridad interna, respetando los tiempos y el contexto de cada persona.
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
                                className={`pricing-card ${selectedPrice === 25 ? 'selected' : ''}`}
                                onClick={() => setSelectedPrice(25)}
                            >
                                <h3>Consulta Informativa</h3>
                                <p className="price">$25 USD</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div
                                className={`pricing-card featured ${selectedPrice === 60 ? 'selected' : ''}`}
                                onClick={() => setSelectedPrice(60)}
                            >
                                <h3>Psicoterapia Individual</h3>
                                <p className="price">$60 USD</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div
                                className={`pricing-card ${selectedPrice === 70 ? 'selected' : ''}`}
                                onClick={() => setSelectedPrice(70)}
                            >
                                <h3>Psicoterapia de Pareja</h3>
                                <p className="price">$70 USD</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div
                                className={`pricing-card ${selectedPrice === 70 ? 'selected' : ''}`}
                                onClick={() => setSelectedPrice(70)}
                            >
                                <h3>Psicoterapia Familiar</h3>
                                <p className="price">$70 USD</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div
                                className={`pricing-card ${selectedPrice === 30 ? 'selected' : ''}`}
                                onClick={() => setSelectedPrice(30)}
                            >
                                <h3>Psicoterapia Grupal</h3>
                                <p className="price">$30 USD</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div
                                className={`pricing-card program ${selectedPrice === 700 ? 'selected' : ''}`}
                                onClick={() => setSelectedPrice(700)}
                            >
                                <h3>Programa: Resonancia Emocional Nutritiva</h3>
                                <p className="price">$700 USD</p>
                                <p className="duration">3 meses</p>
                            </div>
                        </div>
                    </div>

                    <div className="service-benefits">
                        <p>✓ Evaluación y acompañamiento del estado de ánimo</p>
                        <p>✓ Cada sesión aporta a la atención de personas de bajos recursos</p>
                    </div>

                    {/* Payment Method - Right below pricing */}
                    <div className="payment-method-section">
                        <h3>Método de pago</h3>
                        {!selectedPrice && (
                            <p className="payment-instruction-select">
                                Por favor, selecciona una consulta arriba para continuar con el pago
                            </p>
                        )}

                        <div className="row g-3 justify-content-center">
                            <div className="col-lg-6 col-md-8">
                                {selectedPrice ? (
                                    <a
                                        href={`https://www.paypal.com/paypalme/SantinoConsigli/${selectedPrice}`}
                                        className="payment-card paypal"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <svg className="payment-icon" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.983 5.05-4.349 6.797-8.647 6.797h-2.19c-.524 0-.968.382-1.05.9l-1.12 7.106zm14.146-14.42a3.35 3.35 0 0 0-.607-.541c-.013.076-.026.175-.041.254-.93 4.778-4.005 7.201-9.138 7.201h-2.19a.563.563 0 0 0-.556.479l-1.187 7.527h-.506l-.24 1.516a.56.56 0 0 0 .554.647h3.882c.46 0 .85-.334.922-.788.06-.26.76-4.852.816-5.09a.932.932 0 0 1 .923-.788h.58c3.76 0 6.705-1.528 7.565-5.946.36-1.847.174-3.388-.777-4.471z"/>
                                        </svg>
                                        <span>Pagar ${selectedPrice} USD con PayPal</span>
                                    </a>
                                ) : (
                                    <div className="payment-card paypal disabled">
                                        <svg className="payment-icon" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.983 5.05-4.349 6.797-8.647 6.797h-2.19c-.524 0-.968.382-1.05.9l-1.12 7.106zm14.146-14.42a3.35 3.35 0 0 0-.607-.541c-.013.076-.026.175-.041.254-.93 4.778-4.005 7.201-9.138 7.201h-2.19a.563.563 0 0 0-.556.479l-1.187 7.527h-.506l-.24 1.516a.56.56 0 0 0 .554.647h3.882c.46 0 .85-.334.922-.788.06-.26.76-4.852.816-5.09a.932.932 0 0 1 .923-.788h.58c3.76 0 6.705-1.528 7.565-5.946.36-1.847.174-3.388-.777-4.471z"/>
                                        </svg>
                                        <span>Selecciona una consulta para pagar</span>
                                    </div>
                                )}
                            </div>
                        </div>

                        {selectedPrice && (
                            <p className="payment-note">
                                Después de realizar el pago, envía el comprobante por WhatsApp para coordinar tu consulta.
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