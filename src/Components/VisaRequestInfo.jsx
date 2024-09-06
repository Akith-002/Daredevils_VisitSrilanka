import React from "react";

const VisaRequestInfo = ({
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
  handlePrevious,
  handleNext,
}) => {
  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow-lg rounded-lg h-auto">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Section 3: Visa Request Information
      </h2>

      {/* Type of Visa */}
      <div className="mb-4">
        <label className="block text-sm font-semibold text-gray-700">
          Type of Visa
        </label>
        <div className="flex space-x-4 mt-2">
          {["Tourist", "Standard Visiting Visa"].map((type) => (
            <label key={type} className="flex items-center">
              <input
                type="radio"
                name="visaType"
                value={type}
                onChange={handleChange}
                onBlur={handleBlur}
                checked={values.visaType === type}
                className="form-radio h-4 w-4 text-blue-600 border-gray-300"
              />
              <span className="ml-2 text-gray-900">{type}</span>
            </label>
          ))}
        </div>
        {errors.visaType && touched.visaType && (
          <p className="text-red-500 text-xs mt-1">{errors.visaType}</p>
        )}
      </div>

      {/* Duration of Stay */}
      <div className="mb-4">
        <label className="block text-sm font-semibold text-gray-700">
          Duration of Stay
        </label>
        <select
          name="duration"
          value={values.duration}
          onChange={handleChange}
          onBlur={handleBlur}
          className={`w-full mt-2 rounded-md border px-3 py-2 ${
            errors.duration && touched.duration
              ? "border-red-500"
              : "border-gray-300"
          }`}
        >
          <option value="" disabled>
            -- Select Duration of Stay --
          </option>
          {["30 days", "60 days", "3 months", "6 months", "1 year or more"].map(
            (duration) => (
              <option key={duration} value={duration}>
                {duration}
              </option>
            )
          )}
        </select>
        {errors.duration && touched.duration && (
          <p className="text-red-500 text-xs mt-1">{errors.duration}</p>
        )}
      </div>

      {/* Visa Validity Period */}
      <div className="mb-4">
        <label className="block text-sm font-semibold text-gray-700">
          Visa Validity Period
        </label>
        <select
          name="visaPeriod"
          value={values.visaPeriod}
          onChange={handleChange}
          onBlur={handleBlur}
          className={`w-full mt-2 rounded-md border px-3 py-2 ${
            errors.visaPeriod && touched.visaPeriod
              ? "border-red-500"
              : "border-gray-300"
          }`}
        >
          <option value="" disabled>
            -- Select Visa Validity Period --
          </option>
          {[
            "30 days",
            "6 months",
            "1 year",
            "2 years",
            "5 years",
            "10 years or more",
          ].map((validity) => (
            <option key={validity} value={validity}>
              {validity}
            </option>
          ))}
        </select>
        {errors.visaPeriod && touched.visaPeriod && (
          <p className="text-red-500 text-xs mt-1">{errors.visaPeriod}</p>
        )}
      </div>

      {/* Entry Type */}
      <div className="mb-4">
        <label className="block text-sm font-semibold text-gray-700">
          Entry Type
        </label>
        <div className="flex space-x-4 mt-2">
          {["Single Entry", "Multiple Entry"].map((entry) => (
            <label key={entry} className="flex items-center">
              <input
                type="radio"
                name="entryType"
                value={entry}
                onChange={handleChange}
                onBlur={handleBlur}
                checked={values.entryType === entry}
                className="form-radio h-4 w-4 text-blue-600 border-gray-300"
              />
              <span className="ml-2 text-gray-900">{entry}</span>
            </label>
          ))}
        </div>
        {errors.entryType && touched.entryType && (
          <p className="text-red-500 text-xs mt-1">{errors.entryType}</p>
        )}
      </div>

      {/* Have You Visited Previously */}
      <div className="mb-4">
        <label className="block text-sm font-semibold text-gray-700">
          Have You Visited Previously?
        </label>
        <div className="flex space-x-4 mt-2">
          {["Yes", "No"].map((option) => (
            <label key={option} className="flex items-center">
              <input
                type="radio"
                name="previouslyVisited"
                value={option}
                onChange={handleChange}
                onBlur={handleBlur}
                checked={values.previouslyVisited === option}
                className="form-radio h-4 w-4 text-blue-600 border-gray-300"
              />
              <span className="ml-2 text-gray-900">{option}</span>
            </label>
          ))}
        </div>
        {errors.previouslyVisited && touched.previouslyVisited && (
          <p className="text-red-500 text-xs mt-1">
            {errors.previouslyVisited}
          </p>
        )}
      </div>

      {/* Need Assistance with Extending */}
      <div className="mb-4">
        <label className="block text-sm font-semibold text-gray-700">
          Do You Need Assistance with Extending?
        </label>
        <div className="flex space-x-4 mt-2">
          {["Yes", "No"].map((option) => (
            <label key={option} className="flex items-center">
              <input
                type="radio"
                name="extendAssitance"
                value={option}
                onChange={handleChange}
                onBlur={handleBlur}
                checked={values.extendAssitance === option}
                className="form-radio h-4 w-4 text-blue-600 border-gray-300"
              />
              <span className="ml-2 text-gray-900">{option}</span>
            </label>
          ))}
        </div>
        {errors.extendAssitance && touched.extendAssitance && (
          <p className="text-red-500 text-xs mt-1">{errors.extendAssitance}</p>
        )}
      </div>

      {/* Have All Necessary Documents */}
      <div className="mb-4">
        <label className="block text-sm font-semibold text-gray-700">
          Do You Have All the Necessary Documents?
        </label>
        <div className="flex space-x-4 mt-2">
          {["Yes", "No"].map((option) => (
            <label key={option} className="flex items-center">
              <input
                type="radio"
                name="docsReady"
                value={option}
                onChange={handleChange}
                onBlur={handleBlur}
                checked={values.docsReady === option}
                className="form-radio h-4 w-4 text-blue-600 border-gray-300"
              />
              <span className="ml-2 text-gray-900">{option}</span>
            </label>
          ))}
        </div>
        {errors.docsReady && touched.docsReady && (
          <p className="text-red-500 text-xs mt-1">{errors.docsReady}</p>
        )}
      </div>

      {/* Agree to Terms and Conditions */}
      <div className="mb-4">
        <label className="block text-sm font-semibold text-gray-700">
          Do You Agree to the Terms and Conditions?
        </label>
        <div className="flex space-x-4 mt-2">
          {["Yes", "No"].map((option) => (
            <label key={option} className="flex items-center">
              <input
                type="radio"
                name="TandCAgree"
                value={option}
                onChange={handleChange}
                onBlur={handleBlur}
                checked={values.TandCAgree === option}
                className="form-radio h-4 w-4 text-blue-600 border-gray-300"
              />
              <span className="ml-2 text-gray-900">{option}</span>
            </label>
          ))}
        </div>
        {errors.TandCAgree && touched.TandCAgree && (
          <p className="text-red-500 text-xs mt-1">{errors.TandCAgree}</p>
        )}
      </div>

      {/* Previous and Next buttons */}
      <div className="flex justify-between mt-6">
        <button
          type="button"
          onClick={handlePrevious}
          className="bg-gray-400 text-white px-4 py-2 rounded-md hover:bg-gray-500"
        >
          Previous
        </button>
        {values.visaType &&
          values.duration &&
          values.visaPeriod &&
          values.entryType &&
          values.previouslyVisited &&
          values.extendAssitance &&
          values.docsReady &&
          values.TandCAgree && (
            <button
              type="button"
              onClick={handleNext}
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
            >
              Next
            </button>
          )}
      </div>
    </div>
  );
};

export default VisaRequestInfo;
