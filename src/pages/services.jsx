import React from "react";
import { Card, CardContent } from "../components/ui/card";
import Navbar from "../components/ui/navbar";
import Footer from "../components/ui/footer";

const Services = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
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
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Services;
