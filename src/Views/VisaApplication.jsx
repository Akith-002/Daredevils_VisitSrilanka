import React, { useState } from "react";
import NavbarType2 from "../Components/NavbarType2";
import FooterType2 from "../Components/FooterType2";
import { Stepper, Step, Button, Typography } from "@material-tailwind/react";
import {
  UserIcon,
  GlobeAltIcon,
  PaperAirplaneIcon,
  PhotoIcon,
} from "@heroicons/react/24/outline";
import * as yup from "yup";
import { useFormik } from "formik";
import axios from "axios";
import PersonalInfo from "../Components/PersonalInfo";
import PassportInfo from "../Components/PassportInfo";
import VisaRequestInfo from "../Components/VisaRequestInfo";
import ApplicationImages from "../Components/ApplicationImages";

// Validation schema
const validationSchema = yup.object({
  honorific: yup.string().required("Honorific is required"),
  name: yup.string().required("Name is required"),
  address: yup.string().required("Address is required"),
  dateOfBirth: yup
    .date()
    .min("1950-01-01")
    .max("2005-01-01")
    .required("Date of birth is required"),
  // normal number with digits
  phone: yup
    .string()
    .matches(/^[0-9]+$/, "Phone number must contain only digits")
    .required("Phone number is required"),
  email: yup
    .string()
    .email("Invalid email address")
    .required("Email is required"),
  passNo: yup.string().required("Passport number is required"),
  passCountry: yup.string().required("Country of passport is required"),
  dateOfIssue: yup.date().max(new Date()).required("Date of issue is required"),
  dateOfExpiry: yup
    .date()
    .min(yup.ref("dateOfIssue"))
    .required("Date of expiry is required"),
  visaType: yup.string().required("Type of visa is required"),
  duration: yup.string().required("Duration of stay is required"),
  visaPeriod: yup.string().required("Visa validity period is required"),
  entryType: yup.string().required("Entry type is required"),
  previouslyVisited: yup
    .string()
    .required("Previous visit information is required"),
  extendAssitance: yup.string().required("Assistance information is required"),
  docsReady: yup.string().required("Document information is required"),
  TandCAgree: yup.string().required("Agreement is required"),
  passImage: yup.mixed().required("Passport image is required"),
  passBio: yup.mixed().required("Passport bio page is required"),
});

function VisaApplication() {
  const [step, setStep] = useState(1); // Track which section is currently active
  const [passImage, setPassImage] = useState(null);
  const [passBio, setPassBio] = useState(null);
  const [activeStep, setActiveStep] = React.useState(0);
  const [isLastStep, setIsLastStep] = React.useState(false);
  const [isFirstStep, setIsFirstStep] = React.useState(false);

  const handleFileChange = (e, setFieldValue, fieldName) => {
    const file = e.target.files[0];
    setFieldValue(fieldName, file);
    if (fieldName === "passBio") {
      setPassBio(file);
    } else if (fieldName === "passImage") {
      setPassImage(file);
    }
  };

  const formik = useFormik({
    initialValues: {
      honorific: "",
      name: "",
      address: "",
      dateOfBirth: "",
      phone: "",
      email: "",
      passNo: "",
      passCountry: "",
      dateOfExpiry: "",
      dateOfIssue: "",
      visaType: "",
      duration: "",
      visaPeriod: "",
      entryType: "",
      previouslyVisited: "",
      extendAssitance: "",
      docsReady: "",
      TandCAgree: "",
      passImage: null,
      passBio: null,
    },
    validationSchema,
    onSubmit: async (values) => {
      const formData = new FormData();

      // Append all form fields to the FormData object
      formData.append("honorific", values.honorific);
      formData.append("name", values.name);
      formData.append("address", values.address);
      formData.append("dateOfBirth", values.dateOfBirth);
      formData.append("phone", values.phone);
      formData.append("email", values.email);
      formData.append("passNo", values.passNo);
      formData.append("passCountry", values.passCountry);
      formData.append("dateOfIssue", values.dateOfIssue);
      formData.append("dateOfExpiry", values.dateOfExpiry);
      formData.append("visaType", values.visaType);
      formData.append("duration", values.duration);
      formData.append("visaPeriod", values.visaPeriod);
      formData.append("entryType", values.entryType);
      formData.append("previouslyVisited", values.previouslyVisited);
      formData.append("extendAssitance", values.extendAssitance);
      formData.append("docsReady", values.docsReady);
      formData.append("TandCAgree", values.TandCAgree);

      // Append images to the FormData object
      if (values.passImage) {
        formData.append("passImage", values.passImage);
      }
      if (values.passBio) {
        formData.append("passBio", values.passBio);
      }

      // Log the FormData object
      for (var pair of formData.entries()) {
        console.log(pair[0] + ", " + pair[1]);
      }

      try {
        // Submit form data to the API endpoint
        const response = await axios.post(
          "https://a818-112-134-213-205.ngrok-free.app/applicant",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );

        // Log success message and API response
        console.log("Form submitted successfully:", response.data);
        alert("Form submitted successfully!");

        // Optionally reset the form or navigate to another page
        setStep(1); // Reset the step or use another action like redirecting
      } catch (error) {
        // Log error and show an error message
        console.error("Error submitting form:", error);
        alert("An error occurred while submitting the form. Please try again.");
      }
    },
  });

  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    setFieldValue,
    handleSubmit,
  } = formik;

  const handleNext = () => {
    setStep(step + 1);
    if (!isLastStep) {
      setActiveStep((cur) => cur + 1);
    }
  };

  const handlePrevious = () => {
    setStep(step - 1);
    if (!isFirstStep) {
      setActiveStep((cur) => cur - 1);
    }
  };

  const handleCancel = () => {
    setStep(1);
    window.location.href = "/visaapproval";
  };

  return (
    <div className="bg-backgroundImage">
      <NavbarType2 />

      <section className="mt-20 mb-24 flex flex-col justify-center items-center">
        <h1 className="text-4xl text-center font-semibold">Visa Application</h1>

        <Stepper
          activeStep={activeStep}
          isLastStep={(value) => setIsLastStep(value)}
          isFirstStep={(value) => setIsFirstStep(value)}
          className="w-2/3 my-12"
        >
          <Step onClick={() => setActiveStep(0)}>
            <UserIcon className="h-5 w-5" />
            <div className="absolute -bottom-[4.5rem] w-max text-center">
              <Typography
                variant="h6"
                color={activeStep === 0 ? "blue-gray" : "gray"}
              >
                Step 1
              </Typography>
              <Typography
                color={activeStep === 0 ? "blue-gray" : "gray"}
                className="font-normal"
              >
                Personal Information
              </Typography>
            </div>
          </Step>
          <Step onClick={() => setActiveStep(1)}>
            <GlobeAltIcon className="h-5 w-5" />
            <div className="absolute -bottom-[4.5rem] w-max text-center">
              <Typography
                variant="h6"
                color={activeStep === 1 ? "blue-gray" : "gray"}
              >
                Step 2
              </Typography>
              <Typography
                color={activeStep === 1 ? "blue-gray" : "gray"}
                className="font-normal"
              >
                Passport Information
              </Typography>
            </div>
          </Step>
          <Step onClick={() => setActiveStep(2)}>
            <PaperAirplaneIcon className="h-5 w-5" />
            <div className="absolute -bottom-[4.5rem] w-max text-center">
              <Typography
                variant="h6"
                color={activeStep === 2 ? "blue-gray" : "gray"}
              >
                Step 3
              </Typography>
              <Typography
                color={activeStep === 2 ? "blue-gray" : "gray"}
                className="font-normal"
              >
                Visa Request Information
              </Typography>
            </div>
          </Step>
          {/* step 4 */}
          <Step onClick={() => setActiveStep(3)}>
            <PhotoIcon className="h-5 w-5" />
            <div className="absolute -bottom-[4.5rem] w-max text-center">
              <Typography
                variant="h6"
                color={activeStep === 3 ? "blue-gray" : "gray"}
              >
                Step 4
              </Typography>
              <Typography
                color={activeStep === 3 ? "blue-gray" : "gray"}
                className="font-normal"
              >
                Application Images
              </Typography>
            </div>
          </Step>
        </Stepper>

        <form onSubmit={handleSubmit} className="mt-8 space-y-4">
          {step === 1 && (
            <PersonalInfo
              values={values}
              errors={errors}
              touched={touched}
              handleChange={handleChange}
              handleBlur={handleBlur}
              handleCancel={handleCancel}
              handleNext={handleNext}
            />
          )}

          {step === 2 && (
            <PassportInfo
              values={values}
              errors={errors}
              touched={touched}
              handleChange={handleChange}
              handleBlur={handleBlur}
              handleFileChange={handleFileChange}
              setFieldValue={setFieldValue}
              handleNext={handleNext}
              handlePrevious={handlePrevious}
            />
          )}

          {step === 3 && (
            <VisaRequestInfo
              values={values}
              errors={errors}
              touched={touched}
              handleChange={handleChange}
              handleBlur={handleBlur}
              handleNext={handleNext}
              handlePrevious={handlePrevious}
            />
          )}

          {step === 4 && (
            <ApplicationImages
              values={values}
              errors={errors}
              touched={touched}
              handleChange={handleChange}
              handleBlur={handleBlur}
              handleNext={handleSubmit} // Final submit
              handlePrevious={handlePrevious}
              handleFileChange={handleFileChange}
              setFieldValue={setFieldValue}
            />
          )}
        </form>
      </section>

      <FooterType2 />
    </div>
  );
}

export default VisaApplication;
