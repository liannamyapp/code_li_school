import React, { useState } from "react";


const coursesData = [
    {
        id: 1,
        icon: "💻",
        title: "HTML & CSS",
        shortDesc: "Կառուցիր վեբ ծրագրավորման ամուր հիմքը։",
        fullDesc:
            "Այս դասընթացում դու կսովորես HTML և CSS՝ 0-ից։ Կկառուցես responsive, ժամանակակից կայքեր և կհասկանաս վեբի հիմունքները։",
    },
    {
        id: 2,
        icon: "⚡",
        title: "JavaScript, React, Node.js, Express.js",
        shortDesc: "Կայքերդ դարձրու ինտերակտիվ և դինամիկ։",
        fullDesc:
            "JavaScript-ի միջոցով կսովորես աշխատել DOM-ի, event-ների և logic-ի հետ։ Կկառուցես իրական ինտերակտիվ ֆունկցիոնալություն։",
    },
    {
        id: 3,
        icon: "📱",
        title: "Responsive Design",
        shortDesc: "Կայքեր, որոնք գեղեցիկ են բոլոր սարքերում։",
        fullDesc:
            "Դու կսովորես mobile-first մոտեցում, flexbox, grid և media queries՝ կայքերը բոլոր էկրաններին ճիշտ աշխատեցնելու համար։",
    },
    {
        id: 4,
        icon: "🚀",
        title: "Real Projects",
        shortDesc: "Իրական նախագծեր՝ իրական փորձ։",
        fullDesc:
            "Դասընթացի ընթացքում կաշխատես իրական նախագծերի վրա, կստեղծես պորտֆոլիո և պատրաստ կլինես աշխատանքի շուկայի համար։",
    },
];

export default function CoursesSection() {
    const [selectedCourse, setSelectedCourse] = useState(null);

    return (
        <section className="courses" id="courses">
            <div className="container">
                <h2>Դասընթացներ</h2>

                <div className="courses-grid">
                    {coursesData.map((course) => (
                        <div
                            key={course.id}
                            className="course-card"
                            onClick={() => setSelectedCourse(course)}
                        >
                            <div className="course-icon">{course.icon}</div>
                            <h3 className="course-title">{course.title}</h3>
                            <p className="course-desc">{course.shortDesc}</p>

                            <button
                                className="course-btn"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setSelectedCourse(course);
                                }}
                            >
                                Մանրամասն
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            {/* MODAL */}
            {selectedCourse && (
                <div
                    className="course-modal"
                    onClick={() => setSelectedCourse(null)}
                >
                    <div
                        className="modal-content"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <h3>{selectedCourse.title}</h3>
                        <p>{selectedCourse.fullDesc}</p>

                        <a href='https://forms.gle/tx8aaDhYGVnw7vsk7' target='_blank' rel="noreferrer" className="btn course-btn">
                            Գրանցվել
                        </a>
                    </div>
                </div>
            )}
        </section>
    );
}
