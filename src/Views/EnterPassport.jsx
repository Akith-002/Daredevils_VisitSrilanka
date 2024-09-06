import React from "react";
import NavbarType2 from "../Components/NavbarType2";
import FooterType2 from "../Components/FooterType2";
import { ArrowCircleLeft } from "@phosphor-icons/react";
import { Input, Button } from "@material-tailwind/react";

export function InputWithButton() {
  const [passport, setPassport] = React.useState("");
  const onChange = ({ target }) => setPassport(target.value);

  return (
    <div className="flex w-full max-w-[24rem] space-x-4">
      <Input
        type="text"
        label="Passport number"
        value={passport}
        onChange={onChange}
        className="bg-white"
        containerProps={{
          className: "min-w-0 flex-grow", // Allows the input to take up the available space
        }}
      />
      <Button
        size="sm"
        color={passport ? "blue-1" : "light-blue"}
        disabled={!passport}
        className="rounded px-5 bg-blue-1"
      >
        Submit
      </Button>
    </div>
  );
}

const EnterPassport = () => {
  const [passport, setPassport] = React.useState("");
  const onChange = ({ target }) => setPassport(target.value);

  return (
    <>
      <NavbarType2 />
      <div className="min-h-screen bg-custom-radial text-white flex flex-col">
        {/* Main Content */}
        <div className="flex items-center flex-grow gap-40">
          {/* Left Timeline */}
          <div className="p-6">
            <a href="/visaapproval">
              {" "}
              <ArrowCircleLeft size={64} color="black" />
            </a>
          </div>
          <div className="mr-8">
            <div className="w-[30rem] ">
              <p className="text-black text-[40px] font-extrabold font-inconsolata mb-16">
                Check the status of your visa application
              </p>
              <p className="text-black text-[20px] font-bold mb-5 ml-10 font-inconsolata">
                Enter your Passport number
              </p>
              <div className="flex w-full max-w-[24rem] ml-10 space-x-4">
                <Input
                  type="text"
                  label="Passport number"
                  value={passport}
                  onChange={onChange}
                  className="bg-white"
                  containerProps={{
                    className: "min-w-0 flex-grow",
                  }}
                  color="blue"
                />
                <a href="/visastatus" className="inline-flex">
                  {" "}
                  {/* Use inline-flex to maintain button size */}
                  <Button size="sm" className="rounded px-7 bg-blue-1">
                    Submit
                  </Button>
                </a>
              </div>
            </div>
          </div>
          {/* Right Image */}
          <div className="flex-shrink-0">
            <div className="rounded-lg overflow-hidden">
              <img
                src="../../src/assets/images/airport.png"
                alt="Traveler"
                className="w-[500px] h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      <FooterType2 />
    </>
  );
};

export default EnterPassport;
