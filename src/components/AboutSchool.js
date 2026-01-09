import { useNavigate } from "react-router-dom";

import founderImg from "../image/founder.jpg"; // քո նկարն այստեղ


export default function AboutSchool() {
    const navigate = useNavigate();

    return (
    <>
            <section className="about-school">
                <div className="about-container">

                    <div className="about-image">
                        <img src={founderImg} alt="Լիաննա Գալստյան" />
                    </div>

                    <div className="about-content">
                        <h1>Code Li School</h1>

                        <p className="subtitle">
                            Հիմնադիր տնօրեն՝ <strong>Լիաննա Գալստյան</strong>
                        </p>

                        <p>
                            <strong>Code Li School</strong>-ը հիմնադրվել է <strong>2021 թվականին</strong>
                            ՝ նպատակ ունենալով ստեղծել ժամանակակից, գործնական և որակյալ
                            կրթական միջավայր վեբ ծրագրավորման ոլորտում։
                        </p>

                        <p>
                            Կենտրոնում ուսուցումը կառուցված է իրական նախագծերի,
                            անհատական մոտեցման և երկարամյա փորձի հիման վրա։
                            Մեր նպատակը ոչ միայն գիտելիք տալն է, այլ մասնագետ ձևավորելը։
                        </p>

                        <button className="btn" onClick={() => navigate("/")}>
                            ← Վերադառնալ գլխավոր էջ
                        </button>
                    </div>

                </div>

            </section>
           
    </>
    );
}
