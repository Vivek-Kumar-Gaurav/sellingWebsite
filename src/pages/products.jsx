import React from "react";
import { Card, CardContent } from "../components/ui/card";
import Navbar from "../components/ui/navbar";
import Footer from "../components/ui/footer";

const Products = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
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
      <Footer />
    </div>
  );
};

export default Products;
