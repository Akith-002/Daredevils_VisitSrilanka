import React from "react";

const ApplicationImages = ({
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
  handleNext,
  handlePrevious,
  handleFileChange,
  setFieldValue,
}) => {
  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Section 4: Application Images
      </h2>

      {/* Passport Image Upload */}
      <div className="mb-6">
        <label className="block text-sm font-semibold text-gray-700">
          Passport Image
        </label>
        <input
          type="file"
          name="passImage"
          onChange={(e) => handleFileChange(e, setFieldValue, "passImage")}
          onBlur={handleBlur}
          className="w-full text-sm border border-gray-300 rounded-md p-2"
        />
        {errors.passImage && touched.passImage && (
          <p className="text-red-500 text-xs mt-1">{errors.passImage}</p>
        )}
      </div>

      {/* Passport Bio Page Upload */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-900 mb-2">
          Passport Bio Page
        </label>
        <input
          type="file"
          name="passBio"
          onChange={(e) => handleFileChange(e, setFieldValue, "passBio")}
          onBlur={handleBlur}
          className="w-full text-sm border border-gray-300 rounded-md p-2"
        />
        {errors.passBio && touched.passBio && (
          <p className="text-red-500 text-xs mt-1">{errors.passBio}</p>
        )}
      </div>

      {/* Buttons */}
      <div className="flex justify-between mt-6">
        <button
          type="button"
          onClick={handlePrevious}
          className="bg-gray-400 hover:bg-gray-500 text-white px-6 py-2 rounded-md"
        >
          Previous
        </button>
        <button
          type="button"
          onClick={handleNext}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default ApplicationImages;
