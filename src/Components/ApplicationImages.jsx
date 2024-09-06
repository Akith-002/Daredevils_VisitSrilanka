import React, { useEffect } from "react";

const ApplicationImages = ({
  values,
  handleBlur,
  handleFileChange,
  handlePrevious,
  handleSubmit,
  setFieldValue,
}) => {
  // Load existing data from localStorage on mount
  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("applicationImages")) || {};
    for (const key in savedData) {
      if (savedData.hasOwnProperty(key)) {
        setFieldValue(key, savedData[key]);
      }
    }
  }, [setFieldValue]);

  // Save data to localStorage whenever values change
  useEffect(() => {
    const saveDataToLocalStorage = () => {
      localStorage.setItem("applicationImages", JSON.stringify(values));
    };

    saveDataToLocalStorage();
  }, [values]);

  // Custom submit handler to log form data and perform form submission
  const handleFormSubmit = () => {
    // Log the form data to the console
    console.log("Form Data:", values);

    // Perform the actual submit action (e.g., API call, navigation)
    handleSubmit();
  };

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
          onClick={handleFormSubmit}
          className="bg-blue-600 text-white px-4 py-2 rounded-md"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default ApplicationImages;
