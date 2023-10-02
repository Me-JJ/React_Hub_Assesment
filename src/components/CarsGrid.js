import React from "react";
import { CarCard } from "./CarCard";
import { useParams } from "react-router-dom";
export function CarsGrid({ cars }) {
  return (
    <div className="flex flex-wrap justify-evenly">
      {cars.map((item, index) => {
        return <CarCard key={index} car={item} />;
      })}
    </div>
  );
}
