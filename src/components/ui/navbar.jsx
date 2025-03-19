import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4 text-white flex justify-between">
      <h1 className="text-xl font-bold">AC Repair & Sales</h1>
      <div className="space-x-4">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/services" className="hover:underline">Services</Link>
        <Link to="/products" className="hover:underline">Products</Link>
        <Link to="/contact" className="hover:underline">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
