import React from "react";
import NavbarType2 from "../Components/NavbarType2";
import FooterType2 from "../Components/FooterType2";
import { ArrowCircleLeft } from "@phosphor-icons/react";
import { Input, Button } from "@material-tailwind/react";

export function InputWithButton() {
  const [passport, setPassport] = React.useState("");
  const onChange = ({ target }) => setPassport(target.value);

  const TABLE_ROWS = [
    {
      applicantId: 4,
      honorifics: "Mr.",
      name: "Baragama Arachchige Akith Chandinu",
      address: "155/7, Gramasanwardana Road, Molligoda, Wadduwa",
      dateOfBirth: "2002-03-01T00:00:00.000Z",
      phoneNo: 767221011,
      email: "akith.chandinu@gmail.com",
      passNo: "N11399729",
      passCountry: "Sri Lanka",
      dateOfExpiry: "2034-05-27T00:00:00.000Z",
      dateOfIssue: "2024-05-27T00:00:00.000Z",
      passImage:
        "https://zenko.syd1.digitaloceanspaces.com/applicants/Baragama%20Arachchige%20Akith%20Chandinu_1725640355050/image1.png",
      visaType: "Tourist",
      duration: "30 days",
      visaPeriod: "30 days",
      entryType: "Single Entry",
      previouslyVisited: "No",
      extendAssistance: "No",
      docReady: "Yes",
      TandCAgree: "Yes",
      passBio:
        "https://zenko.syd1.digitaloceanspaces.com/applicants/Baragama%20Arachchige%20Akith%20Chandinu_1725640355050/image2.png",
      interPolCheck: "under review",
      adminApproveStatus: "Approved",
      submitEmailSentStatus: null,
      approveEmailSentStatus: null,
      createdAt: "2024-09-06T16:32:36.000Z",
      updatedAt: "2024-09-06T16:32:36.000Z",
    },
    {
      applicantId: 5,
      honorifics: "Mr.",
      name: "Akith",
      address: "155/7 , colombo",
      dateOfBirth: "2005-01-01T00:00:00.000Z",
      phoneNo: 767221011,
      email: "akith.chandinu@gmail.com",
      passNo: "n1232431",
      passCountry: "Sri Lanka",
      dateOfExpiry: "2025-01-06T00:00:00.000Z",
      dateOfIssue: "2024-01-01T00:00:00.000Z",
      passImage:
        "https://zenko.syd1.digitaloceanspaces.com/applicants/Akith_1725642036535/a18a35b0c1b26b46f5fc0d4bd6970227.jpg",
      visaType: "Tourist",
      duration: "30 days",
      visaPeriod: "30 days",
      entryType: "Single Entry",
      previouslyVisited: "Yes",
      extendAssistance: "No",
      docReady: "Yes",
      TandCAgree: "Yes",
      passBio:
        "https://zenko.syd1.digitaloceanspaces.com/applicants/Akith_1725642036535/passport-1.jpeg",
      interPolCheck: null,
      adminApproveStatus: "Approved",
      submitEmailSentStatus: null,
      approveEmailSentStatus: null,
      createdAt: "2024-09-06T17:00:37.000Z",
      updatedAt: "2024-09-06T17:00:37.000Z",
  
    },
  ];
  
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
