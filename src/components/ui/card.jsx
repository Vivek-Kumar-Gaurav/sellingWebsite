import React from "react";

const Card = ({ title, description, children, className }) => {
  return (
    <div className={`bg-white shadow-lg rounded-xl p-6 border border-gray-200 ${className}`}>
      <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
      <p className="text-gray-600 mt-2">{description}</p>
      <div className="mt-4">{children}</div>
    </div>
  );
};

export default Card;
