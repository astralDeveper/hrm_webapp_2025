import React, { useState } from "react";
import { IMAGES } from "../../../utils/Images";
import Button from "../../../Components/Button";
import Input from "../../../Components/Input";

const AppForm = () => {
  const [formValues, setFormValues] = useState({
    leaveType: "",
    description: "",
    startDate: "", // Just start date as per your request
  });

  // Handle input changes for form fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  // Default current date for the date picker if needed
  const getCurrentDateInput = () => {
    const dateObj = new Date();
    const month = ("0" + (dateObj.getMonth() + 1)).slice(-2);
    const day = ("0" + dateObj.getDate()).slice(-2);
    const year = dateObj.getFullYear();
    return `${year}-${month}-${day}`;
  };

  // Form submission logic
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className=" bg-white p-5 rounded-md w-full">
      <form className=" w-full gap-2" onSubmit={handleSubmit}>
        <div className="gridTwo w-full gap-2">
          {/* Leave Type Dropdown */}
          <div className="mt-2 w-full">
            <label className="text-black authdesc">
              Select Type (Sick/Casual/Annual)
            </label>
            <div className="relative border-[1px] border-borderColor rounded w-full text-black mt-2">
              <select
                name="leaveType"
                className="w-full px-5 lg:py-3 appearance-none py-2 bg-transparent authdesc pr-10"
                value={formValues.leaveType}
                onChange={handleInputChange}
              >
                <option value="">Select Leave Type</option>
                <option value="Sick">Sick</option>
                <option value="Casual">Casual</option>
                <option value="Annual">Annual</option>
              </select>
              {/* Dropdown Icon Fix */}
              <div className="absolute inset-y-0 right-2 flex items-center pointer-events-none">
                <img
                  src={IMAGES.DROPDOWN}
                  alt="Dropdown Icon"
                  className="w-3 h-2 mr-2"
                />
              </div>
            </div>
          </div>

          {/* Start Date Input */}
          <Input
            divstyle=" mt-[7px] w-full"
            label="Start Date"
            labelstyle="text-black authdesc"
            innerDiv="border-[1px] border-borderColor rounded w-full text-black mt-2"
            inputStyle="w-full px-5 lg:py-3 py-2 bg-transparent authdesc"
            type="date"
            name="startDate"
            value={formValues.startDate || getCurrentDateInput()} // Setting default date if not selected
            onChange={handleInputChange}
          />
        </div>
        <div className="w-full 2xl:mt-4 mt-2">
          <label className="text-black authdesc ">Reason (Optional)</label>
          <textarea
            name="Text1"
            cols="30"
            rows="4"
            value={formValues.description}
            className="w-full focus:outline-none my-2 border-[1px] border-borderColor2 rounded-md p-4"
          ></textarea>
        </div>
        {/* Submit Button */}
        <Button
          divstyle="w-[50%] mx-auto md:mt-2 mt-1 mb-1 flex justify-center rounded-md text-white font-medium bg-darkGrad lg:py-3 py-2 authdesc"
          btnname="Submit"
          type="submit"
        />
      </form>
    </div>
  );
};

export default AppForm;
