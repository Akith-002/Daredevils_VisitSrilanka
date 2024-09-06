import React from "react";
import NavbarType2 from "../Components/NavbarType2";
import { ArrowCircleLeft, ArrowRight } from "@phosphor-icons/react";
import {
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineIcon,
  Typography,
  TimelineHeader,
} from "@material-tailwind/react";
import FooterType2 from "../Components/FooterType2";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

const VisaStatus = () => {
  const [open, setOpen] = React.useState(false); // State to control dialog visibility

  const handleOpen = () => setOpen(!open); // Toggle the dialog

  const steps = {
    step1: {
      title: "Application Submitted",
      status: "Completed",
      color: "green",
    },
    step2: {
      title: "In review/processing",
      status: "Completed",
      color: "green",
    },
    step3: {
      title: "Approved",
      status: "Rejected",
      color: "red",
    },
    step4: {
      title: "Issued",
      status: "Pending",
      color: "gray",
    },
  };

  return (
    <>
      <NavbarType2 />
      <div className="min-h-screen bg-custom-radial text-white flex flex-col">
        {/* Main Content */}
        <div className="flex items-center flex-grow gap-40">
          {/* Left Timeline */}
          <div className="p-6">
            <a href="/passportcheck">
              {" "}
              <ArrowCircleLeft size={64} color="black" />
            </a>
          </div>
          <div className="mr-8">
            <div className="w-[25rem]">
              <Timeline>
                {Object.keys(steps).map((step, index) => (
                  <TimelineItem key={index} className="h-36 relative top-6">
                    <TimelineConnector className="!w-[78px]" />
                    <TimelineHeader className="relative rounded-xl py-3 pl-4 pr-8">
                      <TimelineIcon
                        className={`p-3 ${
                          steps[step].status === "Completed"
                            ? "bg-blue-500"
                            : steps[step].status === "Rejected"
                            ? "bg-red-500"
                            : "bg-gray-500"
                        }`}
                      >
                        {steps[step].status === "Completed" ? (
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
                          </svg>
                        ) : steps[step].status === "Rejected" ? (
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
                          </svg>
                        ) : (
                          <svg height="24" width="24">
                            <circle strokeWidth="3" fill="white" />
                          </svg>
                        )}
                      </TimelineIcon>
                      <div className="flex flex-col gap-0.5">
                        <Typography
                          variant="small"
                          className="font-extrabold font-inconsolata"
                          color="black"
                        >
                          Step {index + 1}
                        </Typography>
                        <Typography
                          className="font-inconsolata"
                          color="blue-gray"
                        >
                          {steps[step].title}
                        </Typography>
                        <div className="flex items-center gap-4">
                          <Typography
                            className="font-inconsolata"
                            color={steps[step].color}
                          >
                            {steps[step].status}
                          </Typography>

                          {/* Appeal button for rejected step */}
                          {steps[step].status === "Rejected" && (
                            <button
                              className="bg-blue-500 text-white px-3 flex items-center py-1 rounded hover:bg-blue-600"
                              onClick={handleOpen} // Use handleOpen to toggle dialog
                            >
                              Appeal <ArrowRight size={16} />
                            </button>
                          )}
                        </div>
                      </div>
                    </TimelineHeader>
                  </TimelineItem>
                ))}
              </Timeline>
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

      {/* Dialog Component */}
      <Dialog
        open={open} // Control visibility
        handler={handleOpen}
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}
      >
        <DialogHeader>Appeal Visa Decision</DialogHeader>
        <DialogBody>
          If your visa application has been rejected, you can submit an appeal
          here.
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button variant="gradient" color="blue" onClick={handleOpen}>
            <span>Submit Appeal</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
};

export default VisaStatus;
