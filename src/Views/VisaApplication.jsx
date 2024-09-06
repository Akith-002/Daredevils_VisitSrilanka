import React, { useState } from "react";
import NavbarType2 from "../Components/NavbarType2";
import FooterType2 from "../Components/FooterType2";
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
  phone: yup
    .string()
    .matches(/^\d+$/, "Phone number is not valid")
    .required("Phone number is required"),
  email: yup
    .string()
    .email("Invalid email address")
    .required("Email is required"),
  passNo: yup.string().required("Passport number is required"),
  passCountry: yup.string().required("Country of passport is required"),
  dateOfExpiry: yup.date().required("Date of expiry is required"),
  dateOfIssue: yup.date().required("Date of issue is required"),
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
  const [passImage, setpassImage] = useState(null);
  const [passBio, setpassBio] = useState(null);

  const handleFileChange = (e, setFieldValue, fieldName) => {
    const file = e.target.files[0];
    setFieldValue(fieldName, file);
    if (fieldName === "passBio") {
      setpassBio(file);
    } else if (fieldName === "passImage") {
      setpassImage(file);
    }
  };

  // const handleSubmit = async (values) => {
  //   const formData = new FormData();
  //   formData.append('name', values.name);
  //   formData.append('email', values.email);
  //   formData.append('address', values.address);
  //   formData.append('idCardPhoto', idCardPhoto);
  //   formData.append('personalPhoto', personalPhoto);

  //   try {
  //     const response = await axios.post('/api/upload', formData, {
  //       headers: {
  //         'Content-Type': 'multipart/form-data',
  //       },
  //     });
  //     console.log('Form submitted successfully:', response.data);
  //   } catch (error) {
  //     console.error('Error submitting form:', error);
  //   }
  // };

  // Formik setup
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
    onSubmit: (values) => {
      // Handle form submission
      console.log(values);
      console.log("Form submitted successfully");
    },
  });

  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    setFieldValue,
  } = formik;

  const handleNext = () => {
    setStep(step + 1);
  };

  const handlePrevious = () => {
    setStep(step - 1);
  };

  // when cancel button is clicked redirect to home page
  const handleCancel = () => {
    setStep(1);
    window.location.href = "/visaapproval";
  };

  return (
    <div className="bg-backgroundImage">
      <NavbarType2 />

      <section className="mt-16 mb-24">
        <h1 className="text-2xl font-semibold">Visa Application</h1>

        {/* Form */}
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
              handlePrevious={handlePrevious}
              handleNext={handleNext}
            />
          )}

          {step === 3 && (
            <VisaRequestInfo
              values={values}
              errors={errors}
              touched={touched}
              handleChange={handleChange}
              handleBlur={handleBlur}
              handleCancel={handleCancel}
              handleNext={handleNext}
            />
          )}

          {step === 4 && (
            <ApplicationImages
              values={values}
              handleBlur={handleBlur}
              handleFileChange={handleFileChange}
              handlePrevious={handlePrevious}
              handleSubmit={handleSubmit}
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
