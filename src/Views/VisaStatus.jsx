import React from "react";
import NavbarType2 from "../Components/NavbarType2";
import { ArrowCircleLeft } from "@phosphor-icons/react";
import {
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineIcon,
  Typography,
  TimelineHeader,
} from "@material-tailwind/react";
import {
  BellIcon,
  ArchiveBoxIcon,
  CurrencyDollarIcon,
} from "@heroicons/react/24/solid";
import FooterType2 from "../Components/FooterType2"
const VisaStatus = () => {
  return (
    <>
      <NavbarType2 />
      <div className="min-h-screen bg-custom-radial text-white flex flex-col">
        {/* Main Content */}
        <div className="flex items-center flex-grow gap-40">
          {/* Left Timeline */}
          <div className="p-6">
            <ArrowCircleLeft size={64} color="black"></ArrowCircleLeft>
          </div>
          <div className="mr-8">
            {" "}
            {/* Add margin-right to create space */}
            <div className="w-[25rem] ">
              <Timeline>
                <TimelineItem className=" h-36 relative top-6">
                  <TimelineConnector className="!w-[78px]" />
                  <TimelineHeader className="relative rounded-xl  py-3 pl-4 pr-8 ">
                    <TimelineIcon className="p-3 bg-blue-500 ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>{" "}
                    </TimelineIcon>
                    <div className="flex flex-col gap-0.5">
                      <Typography
                        variant="small"
                        className="font-extrabold font-inconsolata"
                        color="black"
                      >
                        Step 1
                      </Typography>
                      <Typography
                        className="font-inconsolata"
                        color="blue-gray"
                      >
                        Application Submitted
                      </Typography>
                      <Typography className="font-inconsolata" color="green">
                        Completed
                      </Typography>
                    </div>
                  </TimelineHeader>
                </TimelineItem>

                <TimelineItem className="h-36 relative top-6">
                  <TimelineConnector className="!w-[78px]" />
                  <TimelineHeader className="relative rounded-xl   py-3 pl-4 pr-8 ">
                    <TimelineIcon className="p-3 bg-blue-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>{" "}
                    </TimelineIcon>
                    <div className="flex flex-col gap-0.5">
                      <Typography
                        variant="small"
                        className="font-extrabold font-inconsolata"
                        color="black"
                      >
                        Step 2
                      </Typography>
                      <Typography
                        className="font-inconsolata"
                        color="blue-gray"
                      >
                        In review/processing
                      </Typography>
                      <Typography className="font-inconsolata" color="green">
                        Completed
                      </Typography>
                    </div>
                  </TimelineHeader>
                </TimelineItem>
                <TimelineItem className="h-32">
                  <TimelineConnector className="!w-[78px]" />
                  <TimelineHeader className="relative py-3 pl-4 pr-8 ">
                    <TimelineIcon className="p-3 bg-red-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>{" "}
                    </TimelineIcon>
                    <div className="flex flex-col gap-0.5">
                      <Typography
                        variant="small"
                        className="font-extrabold font-inconsolata"
                        color="black"
                      >
                        Step 2
                      </Typography>
                      <Typography
                        className="font-inconsolata"
                        color="blue-gray"
                      >
                        Rejected
                      </Typography>
                      <Typography className="font-inconsolata" color="red">
                        Completed
                      </Typography>
                    </div>
                  </TimelineHeader>
                </TimelineItem>
                <TimelineItem className="h-36 relative top-6">
                  <TimelineConnector className="!w-[78px]" />
                  <TimelineHeader className="relative rounded-xl py-3 pl-4 pr-8 ">
                    <TimelineIcon className="p-3 bg-gray-500">
                      <svg height="24" width="24">
                        <circle strokeWidth="3" fill="white" />
                      </svg>{" "}
                    </TimelineIcon>
                    <div className="flex flex-col gap-0.5">
                      <Typography
                        variant="small"
                        className="font-extrabold font-inconsolata"
                        color="black"
                      >
                        Step 4
                      </Typography>
                      <Typography
                        className="font-inconsolata"
                        color="blue-gray"
                      >
                        In review/processing
                      </Typography>
                      <Typography className="font-inconsolata" color="gray">
                        Pending
                      </Typography>
                    </div>
                  </TimelineHeader>
                </TimelineItem>
              </Timeline>
            </div>
          </div>
          {/* Right Image */}
          <div className="flex-shrink-0 ">
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
      <FooterType2/>
    </>
  );
};

export default VisaStatus;
