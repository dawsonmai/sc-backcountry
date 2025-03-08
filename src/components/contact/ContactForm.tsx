import { useState, ChangeEvent, FormEvent } from "react";

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const [responseMessage, setResponseMessage] = useState("");

    // Specify ChangeEvent for input/textarea fields
    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Specify FormEvent for form submission
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const response = await fetch("http://localhost:5000/send-email", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const result = await response.json();
            setResponseMessage(result.message);
        } catch (error) {
            setResponseMessage("Error sending message. Please try again.");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>Name:</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} required />

            <label>Email:</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />

            <label>Message:</label>
            <textarea name="message" value={formData.message} onChange={handleChange} required />

            <button type="submit">Send</button>

            <p>{responseMessage}</p>
        </form>
    );
};

export default ContactForm;
