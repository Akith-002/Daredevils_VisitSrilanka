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
    <>
      {/* Section 1: Personal Information */}
      <div className="h-4/5">
        <h2 className="text-xl font-semibold mb-4">
          Section 1: Personal Information
        </h2>
        {/* Honorific with Radio Buttons */}
        <div>
          <div className="flex space-x-4 mt-2">
            {["Mr.", "Mrs.", "Miss."].map((honorific) => (
              <label key={honorific} className="flex items-center">
                <input
                  type="radio"
                  name="honorific"
                  value={honorific}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  checked={values.honorific === honorific}
                  className="form-radio text-blue-600"
                />
                <span className="ml-2">{honorific}</span>
              </label>
            ))}
          </div>
          {errors.honorific && touched.honorific && (
            <p className="text-red-500 text-xs">{errors.honorific}</p>
          )}
        </div>

        {/* Name Field */}
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-900"
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
            className={`rounded-md border px-2 py-1 ${
              errors.name && touched.name ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Enter your name"
          />
          {errors.name && touched.name && (
            <p className="text-red-500 text-xs">{errors.name}</p>
          )}
        </div>

        {/* Address Field */}
        <div>
          <label
            htmlFor="address"
            className="block text-sm font-medium text-gray-900"
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
            className={`rounded-md border px-2 py-1 ${
              errors.address && touched.address
                ? "border-red-500"
                : "border-gray-300"
            }`}
            placeholder="Enter your address"
          />
          {errors.address && touched.address && (
            <p className="text-red-500 text-xs">{errors.address}</p>
          )}
        </div>

        {/* Date of Birth Field */}
        <div>
          <label
            htmlFor="dateOfBirth"
            className="block text-sm font-medium text-gray-900"
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
            className={`rounded-md border px-2 py-1 ${
              errors.dob && touched.dob ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.dateOfBirth && touched.dateOfBirth && (
            <p className="text-red-500 text-xs">{errors.dateOfBirth}</p>
          )}
        </div>

        {/* Phone Field */}
        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-900"
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
            className={`rounded-md border px-2 py-1 ${
              errors.phone && touched.phone
                ? "border-red-500"
                : "border-gray-300"
            }`}
            placeholder="Enter your phone number"
          />
          {errors.phone && touched.phone && (
            <p className="text-red-500 text-xs">{errors.phone}</p>
          )}
        </div>

        {/* Email Field */}
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-900"
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
            className={`rounded-md border px-2 py-1 ${
              errors.email && touched.email
                ? "border-red-500"
                : "border-gray-300"
            }`}
            placeholder="Enter your email"
          />
          {errors.email && touched.email && (
            <p className="text-red-500 text-xs">{errors.email}</p>
          )}
        </div>

        {/* Cancel and Next buttons */}
        <div className="flex justify-between mt-4">
          <button
            type="button"
            onClick={handleCancel}
            className="bg-gray-400 text-white px-4 py-2 rounded-md"
          >
            Cancel
          </button>
          {/* when clicked next check if the data from section 1 is filled or not */}
          {values.honorific &&
            values.name &&
            values.address &&
            values.dateOfBirth &&
            values.phone &&
            values.email && (
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

export default PersonalInfo;
