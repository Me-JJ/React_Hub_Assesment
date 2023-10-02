import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { UsersIcon } from "@heroicons/react/24/solid";
import { TruckIcon } from "@heroicons/react/24/solid";
import { HeartIcon } from "@heroicons/react/24/solid";
import { ExclamationCircleIcon } from "@heroicons/react/24/solid";
import { LifebuoyIcon } from "@heroicons/react/24/solid";

const fillHeart = (event) => {};
export function CarCard({ car }) {
  const placeholderImage =
    "https://resources.workable.com/wp-content/uploads/2022/01/Not-finding-the-right-candidates.png";

  const onImageError = (e) => {
    e.target.src = placeholderImage;
  };
  return (
    <Card className="w-96 m-5 bg-white">
      <CardHeader shadow={false} floated={false} className="h-full">
        <img
          src={car.imgUrl ? car.imgUrl : placeholderImage}
          alt="card"
          onImageError={onImageError}
          className="h-full w-full object-cover"
        />
      </CardHeader>
      <CardBody>
        <div className="mb-2 flex items-center justify-between">
          <Typography color="black" className="font-medium">
            {car.Name}
          </Typography>

          <Typography
            color="black"
            className="font-medium border-dashed border-2 border-blue-50 rounded-lg px-2"
          >
            {car.ModelYear}
          </Typography>
        </div>

        <div className="grid grid-cols-2">
          <Typography
            variant="small"
            color="black"
            className="font-normal opacity-75 "
          >
            <UsersIcon className="h-3 w-3 text-blue-500 inline-block"></UsersIcon>
            {` ${car.Seater} people`}
          </Typography>
          <Typography
            variant="small"
            color="black"
            className="font-normal opacity-75"
          >
            <TruckIcon className="h-3 w-3 text-blue-500 inline-block" />
            {" " + car.Type}
          </Typography>
          <Typography
            variant="small"
            color="black"
            className="font-normal opacity-75"
          >
            <ExclamationCircleIcon className="h-3 w-3 text-blue-500 inline-block" />
            {` ${car.Mileage} km / litre`}
          </Typography>
          <Typography
            variant="small"
            color="black"
            className="font-normal opacity-75 "
          >
            <LifebuoyIcon className="h-3 w-3 text-blue-500 inline-block" />
            {" " + car.GearType}
          </Typography>
        </div>
      </CardBody>
      <hr className=" mb-2"></hr>
      <CardFooter className="pt-0">
        <div className="grid grid-cols-2">
          <Typography
            variant="small"
            color="black"
            className="font-normal opacity-75"
          >
            {<span className="text-lg">${car.Rent}</span>} / month
          </Typography>
          <div className="flex flex-row justify-end ">
            <HeartIcon
              className="h-7 w-7 text-red-200 mx-4"
              onClick={fillHeart}
            />
            <Button ripple={false} className="text-white bg-blue-400" size="sm">
              Rent Now
            </Button>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
