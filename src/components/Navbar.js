import { Navbar, Typography, Button, Input } from "@material-tailwind/react";

import { DropDown } from "./DropDown";
import cars from "../CarSpec.json";
import { useState } from "react";

export function NavbarwithSearch({ setResult }) {
  const RelevanceList = ["Micro", "Suv", "Sedan", "Hatchback"];
  const All_Brands_List = ["Hyundai", "Honda", "Toyota", "Mahindra"];

  const [input, setInput] = useState("");

  const handleChange = () => {
    // console.log(input);
    const filter_cars = cars.filter((car) => {
      return car.Name.toLowerCase().includes(input.toLowerCase());
    });
    setResult(filter_cars);
  };
  return (
    <Navbar className=" mx-auto max-w-screen-xl px-4 py-3 mb-5">
      <div className=" flex flex-wrap items-center justify-between gap-y-4 text-blue-gray-900">
        <Typography
          as="a"
          href="#"
          variant="h6"
          className="mr-4 ml-2 cursor-pointer py-1.5"
        >
          Car Seller
        </Typography>
        <div className="ml-auto flex gap-1 md:mr-4">
          <DropDown title="Relevance" list={RelevanceList} />
          <DropDown title="All Brands" list={All_Brands_List} />
        </div>
        <div className="relative flex w-full gap-2 md:w-max">
          <Input
            type="search"
            label="Type here..."
            className="pr-20"
            containerProps={{
              className: "min-w-[288px]",
            }}
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
            }}
          />
          <Button
            size="sm"
            className="!absolute right-1 top-1 rounded"
            onClick={handleChange}
          >
            Search
          </Button>
        </div>
      </div>
    </Navbar>
  );
}
