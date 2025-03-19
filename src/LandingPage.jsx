import React from "react";
import { Button } from "./components/ui/button";
import { Card, CardContent } from "./components/ui/card";
import { Input } from "./components/ui/input";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <section className="text-center py-16 bg-blue-600 text-white">
        <h1 className="text-4xl font-bold">Reliable AC Repair & Second-Hand ACs</h1>
        <p className="mt-4 text-lg">Get your AC fixed or buy a budget-friendly used AC today!</p>
        <Button className="mt-6 bg-white text-blue-600 hover:bg-gray-200">Contact Us</Button>
      </section>
      
      {/* Services Section */}
      <section className="p-8">
        <h2 className="text-2xl font-bold text-center">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <Card>
            <CardContent className="p-6 text-center">
              <h3 className="text-xl font-semibold">AC Repair</h3>
              <p className="mt-2">Expert repair for all AC brands with warranty.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <h3 className="text-xl font-semibold">Installation</h3>
              <p className="mt-2">Hassle-free AC installation by professionals.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <h3 className="text-xl font-semibold">Used AC Sales</h3>
              <p className="mt-2">High-quality second-hand ACs at affordable prices.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Available ACs */}
      <section className="p-8 bg-gray-200">
        <h2 className="text-2xl font-bold text-center">Available Second-Hand ACs</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <Card>
            <CardContent className="p-6 text-center">
              <h3 className="text-xl font-semibold">LG 1.5 Ton Split AC</h3>
              <p className="mt-2">Price: $250</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <h3 className="text-xl font-semibold">Samsung 1 Ton Window AC</h3>
              <p className="mt-2">Price: $180</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Form */}
      <section className="p-8">
        <h2 className="text-2xl font-bold text-center">Get in Touch</h2>
        <div className="max-w-lg mx-auto mt-6 bg-white p-6 rounded shadow">
          <Input placeholder="Your Name" className="mb-4" />
          <Input placeholder="Your Email" className="mb-4" />
          <Input placeholder="Your Message" className="mb-4" />
          <Button className="w-full">Send Message</Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="p-6 text-center bg-gray-800 text-white mt-6">
        <p>&copy; 2025 AC Repair & Sales. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
