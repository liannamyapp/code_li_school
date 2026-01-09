import React from 'react';
import { motion } from 'framer-motion';

const reasons = [
    { icon: '⚡', title: 'Արագ և որակով ուսուցում' },
    { icon: '🏆', title: 'Մասնագիտական փորձ ունեցող դասավանդողներ' },
    { icon: '📘', title: 'Մանրամասն և համապարփակ ուսուցողական նյութ' },
    { icon: '💰', title: 'Կատարած վճարից հետվերադարձ մինչև 100.000 ՀՀ դրամ' },
];
const containerVariants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.2 }
    }
};

const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
};

const WhySection = () => {
    return (
        <section className="why">
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                >
                    Ինչու՞ սովորել մեզ մոտ
                </motion.h2>
                <motion.div
                    className="why-grid"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {reasons.map((item, i) => (
                        <motion.div
                            key={i}
                            className="why-item"
                            variants={itemVariants}
                            whileHover={{ scale: 1.2, rotate: 5 }}
                        >
                            <span className="why-icon">{item.icon}</span>
                            <p>{item.title}</p>
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
};

export default WhySection;