import React from "react";

const PersonalInfo = ({
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
  handleCancel,
  handleNext,
}) => {
  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow-lg rounded-lg h-auto">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Section 1: Personal Information
      </h2>

      {/* Honorific with Radio Buttons */}
      <div className="mb-6">
        <div className="flex space-x-4 mt-2">
          {["Mr.", "Mrs.", "Miss."].map((honorific) => (
            <label key={honorific} className="flex items-center space-x-2">
              <input
                type="radio"
                name="honorific"
                value={honorific}
                onChange={handleChange}
                onBlur={handleBlur}
                checked={values.honorific === honorific}
                className="form-radio text-blue-600"
              />
              <span className="text-gray-700">{honorific}</span>
            </label>
          ))}
        </div>
        {errors.honorific && touched.honorific && (
          <p className="text-red-500 text-xs mt-1">{errors.honorific}</p>
        )}
      </div>

      {/* Name Field */}
      <div className="mb-6">
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-900 mb-2"
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
          className={`w-full rounded-md border px-3 py-2 text-sm focus:outline-none focus:ring ${
            errors.name && touched.name
              ? "border-red-500 focus:ring-red-500"
              : "border-gray-300 focus:ring-blue-500"
          }`}
          placeholder="Enter your name"
        />
        {errors.name && touched.name && (
          <p className="text-red-500 text-xs mt-1">{errors.name}</p>
        )}
      </div>

      {/* Address Field */}
      <div className="mb-6">
        <label
          htmlFor="address"
          className="block text-sm font-medium text-gray-900 mb-2"
        >
          Address
        </label>
        <input
          type="text"
          id="address"
          name="address"
          value={values.address}
          onChange={handleChange}
          onBlur={handleBlur}
          className={`w-full rounded-md border px-3 py-2 text-sm focus:outline-none focus:ring ${
            errors.address && touched.address
              ? "border-red-500 focus:ring-red-500"
              : "border-gray-300 focus:ring-blue-500"
          }`}
          placeholder="Enter your address"
        />
        {errors.address && touched.address && (
          <p className="text-red-500 text-xs mt-1">{errors.address}</p>
        )}
      </div>

      {/* Date of Birth Field */}
      <div className="mb-6">
        <label
          htmlFor="dateOfBirth"
          className="block text-sm font-medium text-gray-900 mb-2"
        >
          Date of Birth
        </label>
        <input
          type="date"
          id="dateOfBirth"
          name="dateOfBirth"
          value={values.dateOfBirth}
          onChange={handleChange}
          onBlur={handleBlur}
          className={`w-full rounded-md border px-3 py-2 text-sm focus:outline-none focus:ring ${
            errors.dateOfBirth && touched.dateOfBirth
              ? "border-red-500 focus:ring-red-500"
              : "border-gray-300 focus:ring-blue-500"
          }`}
        />
        {errors.dateOfBirth && touched.dateOfBirth && (
          <p className="text-red-500 text-xs mt-1">{errors.dateOfBirth}</p>
        )}
      </div>

      {/* Phone Field */}
      <div className="mb-6">
        <label
          htmlFor="phone"
          className="block text-sm font-medium text-gray-900 mb-2"
        >
          Phone
        </label>
        <input
          type="text"
          id="phone"
          name="phone"
          value={values.phone}
          onChange={handleChange}
          onBlur={handleBlur}
          className={`w-full rounded-md border px-3 py-2 text-sm focus:outline-none focus:ring ${
            errors.phone && touched.phone
              ? "border-red-500 focus:ring-red-500"
              : "border-gray-300 focus:ring-blue-500"
          }`}
          placeholder="Enter your phone number"
        />
        {errors.phone && touched.phone && (
          <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
        )}
      </div>

      {/* Email Field */}
      <div className="mb-6">
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-900 mb-2"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          className={`w-full rounded-md border px-3 py-2 text-sm focus:outline-none focus:ring ${
            errors.email && touched.email
              ? "border-red-500 focus:ring-red-500"
              : "border-gray-300 focus:ring-blue-500"
          }`}
          placeholder="Enter your email"
        />
        {errors.email && touched.email && (
          <p className="text-red-500 text-xs mt-1">{errors.email}</p>
        )}
      </div>

      {/* Cancel and Next buttons */}
      <div className="flex justify-between mt-6">
        <button
          type="button"
          onClick={handleCancel}
          className="bg-gray-400 hover:bg-gray-500 text-white px-6 py-2 rounded-md"
        >
          Cancel
        </button>
        {values.honorific &&
          values.name &&
          values.address &&
          values.dateOfBirth &&
          values.phone &&
          values.email && (
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
  );
};

export default PersonalInfo;
