import React, { useState } from "react";
import { NavbarwithSearch } from "./components/Navbar";
import { CarsGrid } from "./components/CarsGrid";
import cars from "./CarSpec.json";
const App = () => {
  const [results, setResult] = useState(cars);

  return (
    <div className="container mx-auto bg-blue-50">
      <NavbarwithSearch setResult={setResult} />
      <CarsGrid cars={results} />
    </div>
  );
};

export default App;
