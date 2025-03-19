import React from "react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import Navbar from "../components/ui/navbar";
import Footer from "../components/ui/footer";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <section className="p-8">
        <h2 className="text-2xl font-bold text-center">Get in Touch</h2>
        <div className="max-w-lg mx-auto mt-6 bg-white p-6 rounded shadow">
          <Input placeholder="Your Name" className="mb-4" />
          <Input placeholder="Your Email" className="mb-4" />
          <Input placeholder="Your Message" className="mb-4" />
          <Button className="w-full">Send Message</Button>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Contact;
