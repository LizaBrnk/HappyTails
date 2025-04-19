import React, { useEffect } from "react";
import '../../App.css';
import Footer from '../Footer';
import './AboutUs.css'; 
import { useLocation } from 'react-router-dom';

function AboutUs() {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0); // Прокручуємо вгору при кожному завантаженні компонента (або зміні маршруту)

        const hash = location.hash;
        if (hash) {
            const targetElement = document.querySelector(hash);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    }, [location.pathname, location.hash]); // Залежності: шлях та хеш

    return (
        <>
            <div className="about-us-container">
                <section className="mission-section">
                    <h2 id="our-mission">Our Mission</h2>
                    <p>At HappyTails, our mission is simple yet profound: to provide a safe haven and find loving forever homes for abandoned, neglected, and homeless animals. We believe that every creature deserves kindness, care, and a chance at a happy life. Through rescue efforts, temporary shelter, and a dedicated adoption program, we strive to make a tangible difference in the lives of vulnerable animals within our community and beyond.</p>
                    <div className="image-container">
                        <img src="/images/welfare-cat.jpg" alt="Welfare Cat" />
                        <p className="caption">Meet Whiskers, a gentle soul waiting for a calm home.</p>
                    </div>
                </section>

                <section className="story-section">
                    <h2 id="our-story">Our Story</h2>
                    <p>HappyTails began as a small initiative fueled by the passion of a few dedicated animal lovers in Kyiv. Witnessing the growing number of stray and abandoned animals, they decided to take action. What started with fostering animals in their own homes and organizing small adoption events has grown into a recognized non-profit organization. Over the years, we have rescued countless animals, provided them with necessary medical care, and connected them with loving families. Our journey has been filled with challenges, but the joy of seeing an animal find its forever home makes every effort worthwhile.</p>
                    <div className="image-container">
                        <img src="/images/dog.jpg" alt="Happy Dog" />
                        <p className="caption">Meet Buddy. Even with his cone, he's hoping for brighter days and a loving touch.</p>
                    </div>
                </section>

                <section className="values-section">
                    <h2 id="our-values">Our Core Values</h2>
                    <ul>
                        <li><strong>Compassion:</strong> We approach every animal with empathy, understanding, and a deep commitment to their well-being.</li>
                        <li><strong>Respect:</strong> We believe in treating all living beings with dignity and respect.</li>
                        <li><strong>Hope:</strong> We strive to offer hope to animals in need and work tirelessly to create better futures for them.</li>
                        <li><strong>Community:</strong> We recognize the importance of collaboration with volunteers, fosters, donors, and the wider community to achieve our goals.</li>
                        <li><strong>Transparency:</strong> We are committed to operating with honesty and openness in all our activities and financial dealings.</li>
                    </ul>
                    <div className="image-container">
                        <img src="/images/shelter-cat.jpg" alt="Shelter Cat" />
                        <p className="caption">Little Luna dreams of sunny windows and warm laps.</p>
                    </div>
                </section>

                <section className="get-involved-section">
                    <h2 id="get-involved">Get Involved</h2>
                    <p>We rely on the generosity and support of compassionate individuals like you to continue our work. There are many ways to get involved with HappyTails, including:</p>
                    <ul>
                        <li><strong>Adopting:</strong> Give a deserving animal a loving forever home.</li>
                        <li><strong>Fostering:</strong> Provide temporary care for an animal in your home.</li>
                        <li><strong>Volunteering:</strong> Donate your time and skills to help with various tasks.</li>
                        <li><strong>Donating:</strong> Your financial contributions directly support our rescue efforts, medical care, and shelter operations.</li>
                    </ul>
                    <p>Together, we can make a difference in the lives of animals in need.</p>
                    <div className="image-container">
                        <img src="/images/not-dog.jpg" alt="Not Dog" />
                        <p className="caption">This sweet face belongs to Oliver, hoping for a second chance.</p>
                    </div>
                </section>
            </div>
            <Footer/>
        </>
    );
}

export default AboutUs;