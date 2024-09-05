import {
    Card,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";
  
  export default function MapCard({ infoWindowData }) {
    const { photoUrl, name, address } = infoWindowData;
  
    return (
      <Card className="mt-6 w-64 h-auto overflow-hidden rounded-lg shadow-lg  bg-white">
        {/* Image Row */}
        <div className="relative flex w-full h-48 overflow-hidden justify-center items-center bg-gray-100 rounded-t-lg">
          <img
            src={photoUrl}
            alt="image1"
            className="w-11/12 h-full mt-4 rounded-md"
          />
        </div>
  
        <CardBody className="px-6 py-4">
          <Typography variant="h5" color="blue-gray" className="mb-2 font-bold text-lg">
            {name}
          </Typography>
          <Typography className="text-gray-600">
            {address}
          </Typography>
        </CardBody>
  
        
      </Card>
    );
  }
  