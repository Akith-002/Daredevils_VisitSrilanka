import React from "react";

const PassportInfo = ({
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
  handlePrevious,
  handleNext,
}) => {
  return (
    <>
      {/* Section 2: Passport Information */}
      <div className="h-4/5">
        <h2 className="text-xl font-semibold mb-4">
          Section 2: Passport Information
        </h2>

        {/* Passport Number */}
        <div>
          <label
            htmlFor="passportNumber"
            className="block text-sm font-medium text-gray-900"
          >
            Passport Number
          </label>
          <input
            type="text"
            id="passportNumber"
            name="passNo"
            value={values.passNo}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`rounded-md border px-2 py-1 ${
              errors.passNo && touched.passNo
                ? "border-red-500"
                : "border-gray-300"
            }`}
            placeholder="Enter your passport number"
          />
          {errors.passNo && touched.passNo && (
            <p className="text-red-500 text-xs">{errors.passNo}</p>
          )}
        </div>

        {/* Country of Passport */}
        <div className="mt-2">
          <label
            htmlFor="countryOfPassport"
            className="block text-sm font-medium text-gray-900"
          >
            Country of Passport
          </label>
          <input
            type="text"
            id="countryOfPassport"
            name="passCountry"
            value={values.passCountry}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`rounded-md border px-2 py-1 ${
              errors.passCountry && touched.passCountry
                ? "border-red-500"
                : "border-gray-300"
            }`}
            placeholder="Enter the country of your passport"
          />
          {errors.passCountry && touched.passCountry && (
            <p className="text-red-500 text-xs">{errors.passCountry}</p>
          )}
        </div>

        {/* Date of Issue and Expiry */}
        <div className="mt-2">
          <label
            htmlFor="dateOfIssue"
            className="block text-sm font-medium text-gray-900"
          >
            Date of Issue
          </label>
          <input
            type="date"
            id="dateOfIssue"
            name="dateOfIssue"
            value={values.dateOfIssue}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`rounded-md border px-2 py-1 ${
              errors.dateOfIssue && touched.dateOfIssue
                ? "border-red-500"
                : "border-gray-300"
            }`}
          />
          {errors.dateOfIssue && touched.dateOfIssue && (
            <p className="text-red-500 text-xs">{errors.dateOfIssue}</p>
          )}
        </div>

        <div className="mt-2">
          <label
            htmlFor="dateOfExpiry"
            className="block text-sm font-medium text-gray-900"
          >
            Date of Expiry
          </label>
          <input
            type="date"
            id="dateOfExpiry"
            name="dateOfExpiry"
            value={values.dateOfExpiry}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`rounded-md border px-2 py-1 ${
              errors.dateOfExpiry && touched.dateOfExpiry
                ? "border-red-500"
                : "border-gray-300"
            }`}
          />
          {errors.dateOfExpiry && touched.dateOfExpiry && (
            <p className="text-red-500 text-xs">{errors.dateOfExpiry}</p>
          )}
        </div>

        {/* Previous and Next buttons */}
        <div className="flex justify-between mt-4">
          <button
            type="button"
            onClick={handlePrevious}
            className="bg-gray-400 text-white px-4 py-2 rounded-md"
          >
            Previous
          </button>
          {values.passNo &&
            values.passCountry &&
            values.dateOfExpiry &&
            values.dateOfIssue && (
              <button
                type="button"
                onClick={handleNext}
                className="bg-blue-600 text-white px-4 py-2 rounded-md"
              >
                Next
              </button>
            )}
        </div>
      </div>
    </>
  );
};

export default PassportInfo;
