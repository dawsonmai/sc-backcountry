"use client"
import Header from "@/components/global/Header";
import Footer from "@/components/global/Footer";
import ContactInfo from "@/components/contact/ContactInfo";
import ContactForm from "@/components/contact/ContactForm";

const Contact = () => {
    return (
        <div>
            <div className="flex flex-col">
                <div className="flex flex-col p-5">
                    <Header />
                    <div className="flex flex-col md:flex-row py-10 px-10">
                        <ContactInfo />
                        <ContactForm />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Contact;