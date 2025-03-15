"use client"
import Header from "@/components/global/Header";
import Footer from "@/components/global/Footer";
import ContactInfo from "@/components/contact/ContactInfo";
import ContactForm from "@/components/contact/ContactForm";
import Footer2 from "@/components/global/Footer2";
import { motion } from "framer-motion";
const fadeInUp = {
	initial: { opacity: 0, y: 20 },
	animate: { opacity: 1, y: 0 },
	transition: { duration: 1.5 },
};

const Contact = () => {
    return (
        <div>
            <div className="flex flex-col">
                <div className="flex flex-col p-5">
                    <Header />
                    <motion.div initial="initial" whileInView="animate" viewport={{ once: true }} variants={fadeInUp} className="flex flex-col md:flex-row py-10 px-10">
                        <ContactInfo />
                        <ContactForm />
                    </motion.div>
                </div>
            </div>
            <Footer2 />
        </div>
    );
};

export default Contact;