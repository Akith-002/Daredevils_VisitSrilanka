// import React from "react";
// import { Stepper, Step, Button,Typography } from "@material-tailwind/react";

// const VisaForm = () => {
//   const [activeStep, setActiveStep] = React.useState(0);
//   const [isLastStep, setIsLastStep] = React.useState(false);
//   const [isFirstStep, setIsFirstStep] = React.useState(false);

//   const handleNext = () => !isLastStep && setActiveStep((cur) => cur + 1);
//   const handlePrev = () => !isFirstStep && setActiveStep((cur) => cur - 1);

//   const renderStepContent = () => {
//     switch (activeStep) {
//       case 0:
//         return (
//           <div>
//             <h2>Step 1: Personal Information</h2>
//             {/* Add your form fields for personal information here */}
//             <input type="text" placeholder="Full Name" className="mt-2 block w-full border px-4 py-2" />
//             <input type="email" placeholder="Email" className="mt-2 block w-full border px-4 py-2" />
//           </div>
//         );
//       case 1:
//         return (
//           <div>
//             <h2>Step 2: Passport Details</h2>
//             {/* Add your form fields for passport details here */}
//             <input type="text" placeholder="Passport Number" className="mt-2 block w-full border px-4 py-2" />
//             <input type="date" placeholder="Date of Issue" className="mt-2 block w-full border px-4 py-2" />
//           </div>
//         );
//       case 2:
//         return (
//           <div>
//             <h2>Step 3: Upload Documents</h2>
//             {/* Add your form fields for uploading documents */}
//             <input type="file" className="mt-2 block w-full border px-4 py-2" />
//           </div>
//         );
//       default:
//         return null;
//     }
//   };

//   return (
//     <div>
//       <div className="w-full py-4 px-8">
//         <Stepper
//           activeStep={activeStep}
//           isLastStep={(value) => setIsLastStep(value)}
//           isFirstStep={(value) => setIsFirstStep(value)}
//         >
//           <Step onClick={() => setActiveStep(0)}>1 
//           <div className="absolute -bottom-[4.5rem] w-max text-center">
//             <Typography
//               variant="h6"
//               color={activeStep === 0 ? "blue-gray" : "gray"}
//             >
//               Step 1
//             </Typography>
//             <Typography
//               color={activeStep === 0 ? "blue-gray" : "gray"}
//               className="font-normal"
//             >
//               Details about yout account.
//             </Typography>
//           </div></Step>
//           <Step onClick={() => setActiveStep(1)}>2</Step>
//           <Step onClick={() => setActiveStep(2)}>3</Step>
//         </Stepper>
//         <div className="mt-8">{renderStepContent()}</div>
//         <div className="mt-8 flex justify-between">
//           <Button onClick={handlePrev} disabled={isFirstStep}>
//             Prev
//           </Button>
//           <Button onClick={handleNext} disabled={isLastStep}>
//             Next
//           </Button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default VisaForm;
