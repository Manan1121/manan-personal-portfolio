'use client'
import React from "react";
import { FormEvent, useState } from "react";
import { useRef } from "react";
import emailjs from '@emailjs/browser';


interface ContactFormState{
    name: string,
    email: string,
    message: string
}

const ContactSection: React.FC = () => {
    const [formState, setFormState] = useState({
      user_name: '',
      user_email: '',
      message: '',
    });
  
    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      emailjs.sendForm('service_yqr1ron', 'template_qazlm6d', e.currentTarget, {
        publicKey: 'vJs27_LrrXbOlFl2H'
    })
        .then((result) => {
            console.log(result.text);
            // Handle success (e.g., showing a success message)
            setFormState({ user_name: '', user_email: '', message: '' }); // Reset form state or handle as needed
        }, (error) => {
            console.log(error.text);
            // Handle errors (e.g., showing an error message)
        });
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormState({
          ...formState,
          [name]: value,
        });
    };

      return (
        <section className="container mx-auto p-4">
          <h2 className="text-xl font-extrabold text-center mb-8">Contact Me</h2>
          <form className="flex flex-col space-y-4" onSubmit={sendEmail}>
            <input 
              type="text" 
              name="user_name" 
              value={formState.user_name} 
              onChange={handleInputChange} 
              placeholder="Your Name" 
              className="px-4 py-2 border rounded-lg"
              required 
            />
            <input 
              type="email" 
              name="user_email" 
              value={formState.user_email} 
              onChange={handleInputChange} 
              placeholder="Your Email" 
              className="px-4 py-2 border rounded-lg"
              required 
            />
            <textarea 
              name="message" 
              value={formState.message} 
              onChange={handleInputChange} 
              placeholder="Your Message" 
              rows={4} 
              className="px-4 py-2 border rounded-lg"
              required 
            />
            <button type="submit" className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors">Send</button>
          </form>
        </section>
      );
    };
    

    export default ContactSection;



