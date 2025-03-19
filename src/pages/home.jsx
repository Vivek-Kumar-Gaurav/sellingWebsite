import React from "react";
import { Button } from "../components/ui/button";
import Navbar from "../components/ui/navbar";
import Footer from "../components/ui/footer";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <section className="text-center py-16 bg-blue-600 text-white">
        <h1 className="text-4xl font-bold">Reliable AC Repair & Second-Hand ACs</h1>
        <p className="mt-4 text-lg">Get your AC fixed or buy a budget-friendly used AC today!</p>
        <Button className="mt-6 bg-white text-blue-600 hover:bg-gray-200">Contact Us</Button>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
