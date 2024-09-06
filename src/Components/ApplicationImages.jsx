import React from "react";

const ApplicationImages = ({
  values,
  handleBlur,
  handleFileChange,
  handlePrevious,
  handleSubmit,
  setFieldValue,
}) => {
  return (
    <div className="h-4/5">
      <h2 className="text-xl font-semibold mb-4">Section 4: Images</h2>

      {/* Personal Image */}
      <div>
        <label
          htmlFor="personalPhoto"
          className="block text-sm font-medium text-gray-900"
        >
          Personal Image
        </label>
        <input
          type="file"
          name="personalPhoto"
          id="personalPhoto"
          onBlur={handleBlur}
          className="mt-1 block w-full text-sm text-gray-500"
          onChange={(e) => handleFileChange(e, setFieldValue, "personalPhoto")}
        />
      </div>

      {/* Scanned Passport Copy */}
      <div className="mt-4">
        <label
          htmlFor="scanPassport"
          className="block text-sm font-medium text-gray-900"
        >
          Scanned Copy of Passport
        </label>
        <input
          type="file"
          name="scanPassport"
          id="scanPassport"
          onBlur={handleBlur}
          className="mt-1 block w-full text-sm text-gray-500"
          onChange={(e) => handleFileChange(e, setFieldValue, "scanPassport")}
          required
        />
      </div>

      {/* Previous and Submit buttons */}
      <div className="flex justify-between mt-4">
        <button
          type="button"
          onClick={handlePrevious}
          className="bg-gray-400 text-white px-4 py-2 rounded-md"
        >
          Previous
        </button>
        <button
          type="button"
          onClick={handleSubmit}
          className="bg-blue-600 text-white px-4 py-2 rounded-md"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default ApplicationImages;
