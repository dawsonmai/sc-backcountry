"use client"
import Header from "@/components/global/Header";
import Footer from "@/components/global/Footer";
import ContactInfo from "@/components/contact/ContactInfo";
import ContactForm from "@/components/contact/ContactForm";

const Contact = () => {
    return (
        <div>
            <div className="flex flex-col p-10">
                <div className="flex flex-col min-h-[calc(100dvh)] pb-10">
                    <Header />
                    <div className="flex flex-row pt-10">
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