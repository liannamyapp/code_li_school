import React from 'react';
import { motion } from 'framer-motion';
import logo from './../image/logoimage.png';

const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.3 } }
};

const item = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
};

const HeroSection = () => {
    return (
        <section className="hero">
            <motion.div
                className="hero-content"
                initial="hidden"
                animate="visible"
                variants={container}
            >
                <motion.img
                    className="logo"
                    src={logo}
                    alt="Logo"
                    width={260}
                    height={80}
                    fetchpriority="high"
                    loading="eager"
                    variants={{ hidden: { scale: 0.8, opacity: 0 }, visible: { scale: 1, opacity: 1 } }}
                    transition={{ duration: 1 }}
                />

                <motion.h2 variants={item}>Code_li_school</motion.h2>
                <motion.p variants={item}>
                    Տեսականից մինչև իրական պրոյեկտներ: Մենք սովորեցնում ենք այն, ինչ պետք է շուկային
                </motion.p>

                <motion.div className="hero-buttons" variants={item}>
                    <motion.a
                        className="btn primary"
                        whileHover={{ scale: 1.1, boxShadow: "0 0 40px rgba(255, 0, 204, 0.8)" }}
                        whileTap={{ scale: 0.95 }}
                        href='https://forms.gle/BaisM2o4YAPVjtH48'
                        target='_blank'
                        
                    >
                        Գրանցվել
                    </motion.a>
                    <motion.a
                        className="btn secondary"
                        whileHover={{ scale: 1.1, boxShadow: "0 0 40px rgba(51, 51, 255, 0.8)" }}
                        whileTap={{ scale: 0.95 }}
                        href='#courses'
                    >
                        Դասընթացներ
                    </motion.a>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default HeroSection;
