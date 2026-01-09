import React from 'react';
import { motion } from 'framer-motion';
import notebook from './../image/Notebook.png'
import hraman from '../image/hraman.jpg'
const WelcomeSection = () => {
    return (
        <section className="welcome">
            <div className="container">
                <motion.div
                    className="welcome-text"
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                >
                    <motion.h2
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        Բարի գալուստ «Վեբ ծրագրավորում» դասընթացներ
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                    >
                        «Վեբ ծրագրավորում սկսնակների համար» մասնագիտության ուսումնական ծրագիրը հավաստագրված է որպես լրացուցիչ կրթության մոդուլային ծրագիր և երաշխավորված է ՀՀ կրթության, գիտության, մշակույթի և սպորտի նախարարության 2025թ. հուլիսի 16-ի N 1639-Ա/2 հրամանով։              

                </motion.p>
                <motion.div
                    className="welcome-buttons"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                >
                    <motion.a  href={hraman}  target='_blank'  rel='noreferrer' className="btn primary" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                        Տեսնել հրամանը
                    </motion.a>
                    <motion.a href='/about' className="btn secondary" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                        Մեր մասին
                    </motion.a>
                </motion.div>
            </motion.div>
            <motion.div
                className="welcome-image"
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
            >
                <img src={notebook} alt="notebook" />
            </motion.div>
        </div>
        </section >
    );
};

export default WelcomeSection;