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
      <div className="max-w-xl mx-auto p-6 bg-white shadow-lg rounded-lg h-auto">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Section 2: Passport Information
        </h2>

        {/* Passport Number */}
        <div className="mb-6">
          <label
            htmlFor="passportNumber"
            className="block text-sm font-medium text-gray-900 mb-2"
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
            className={`w-full rounded-md border px-3 py-2 text-sm focus:outline-none focus:ring ${
              errors.passNo && touched.passNo
                ? "border-red-500 focus:ring-red-500"
                : "border-gray-300 focus:ring-blue-500"
            }`}
            placeholder="Enter your passport number"
          />
          {errors.passNo && touched.passNo && (
            <p className="text-red-500 text-xs mt-1">{errors.passNo}</p>
          )}
        </div>

        {/* Country of Passport */}
        <div className="mb-6">
          <label
            htmlFor="countryOfPassport"
            className="block text-sm font-medium text-gray-900 mb-2"
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
            className={`w-full rounded-md border px-3 py-2 text-sm focus:outline-none focus:ring ${
              errors.passCountry && touched.passCountry
                ? "border-red-500 focus:ring-red-500"
                : "border-gray-300 focus:ring-blue-500"
            }`}
            placeholder="Enter the country of your passport"
          />
          {errors.passCountry && touched.passCountry && (
            <p className="text-red-500 text-xs mt-1">{errors.passCountry}</p>
          )}
        </div>

        {/* Date of Issue */}
        <div className="mb-6">
          <label
            htmlFor="dateOfIssue"
            className="block text-sm font-medium text-gray-900 mb-2"
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
            className={`w-full rounded-md border px-3 py-2 text-sm focus:outline-none focus:ring ${
              errors.dateOfIssue && touched.dateOfIssue
                ? "border-red-500 focus:ring-red-500"
                : "border-gray-300 focus:ring-blue-500"
            }`}
          />
          {errors.dateOfIssue && touched.dateOfIssue && (
            <p className="text-red-500 text-xs mt-1">{errors.dateOfIssue}</p>
          )}
        </div>

        {/* Date of Expiry */}
        <div className="mb-6">
          <label
            htmlFor="dateOfExpiry"
            className="block text-sm font-medium text-gray-900 mb-2"
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
            className={`w-full rounded-md border px-3 py-2 text-sm focus:outline-none focus:ring ${
              errors.dateOfExpiry && touched.dateOfExpiry
                ? "border-red-500 focus:ring-red-500"
                : "border-gray-300 focus:ring-blue-500"
            }`}
          />
          {errors.dateOfExpiry && touched.dateOfExpiry && (
            <p className="text-red-500 text-xs mt-1">{errors.dateOfExpiry}</p>
          )}
        </div>

        {/* Previous and Next buttons */}
        <div className="flex justify-between mt-6">
          <button
            type="button"
            onClick={handlePrevious}
            className="bg-gray-400 hover:bg-gray-500 text-white px-6 py-2 rounded-md"
          >
            Previous
          </button>
          {/* Display Next button only if all fields are filled */}
          {values.passNo &&
            values.passCountry &&
            values.dateOfIssue &&
            values.dateOfExpiry && (
              <button
                type="button"
                onClick={handleNext}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md"
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
