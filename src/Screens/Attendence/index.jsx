import React, { useState } from "react";
import Container from "../../Components/Container";
import Input from "../../Components/Input";
import Button from "../../Components/Button";

const Attendence = () => {
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();

  const handleStartDateInput = (e) => {
    setStartDate(e.target.value);
  };
  const handleEndDateInput = (e) => {
    setEndDate(e.target.value);
  };

  //    const filter = Data.filter(item=>item.dateColumn > startDate && item.dateColumn < endDate)

  return (
    <Container mainStyle="p-5 bg-formbackground min-h-screen gap-5">
      <p className="authsubhead text-black">Attendance report and Time Sheet</p>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 w-full gap-2 mt-3">
        <Input
          divstyle=""
          label="Start Date"
          labelstyle="text-black authdesc"
          innerDiv="border-[1px] border-borderColor rounded  text-black  mt-2 "
          inputStyle=" px-5 lg:py-3 py-2 bg-transparent authdesc"
          type="date"
          name="startDate"
          value={startDate} // Setting default date if not selected
          onChange={(e) => handleStartDateInput(e)}
        />

        <Input
          divstyle=""
          label="Start Date"
          labelstyle="text-black authdesc"
          innerDiv="border-[1px] border-borderColor rounded   text-black mt-2 "
          inputStyle=" px-5 lg:py-3 py-2 bg-transparent authdesc"
          type="date"
          name="startDate"
          value={endDate}
          onChange={(e) => handleEndDateInput(e)}
        />
        <Button
          divstyle="w-full my-8 rounded-md text-white font-medium bg-darkGrad lg:py-[14px] py-4 authdesc"
          btnname="Search"
          type="submit"
        />
      </div>

      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 w-full gap-2">
        <Button
          disabled={true}
          divstyle="w-full rounded-md shadow-md text-white font-medium bg-pinkColor lg:py-[14px] py-4 authdesc"
          btnname="Total Lates"
          btnStyle="text-pinkTextColor"
        />
        <Button
          disabled={true}
          divstyle="w-full rounded-md shadow-md text-white font-medium bg-greenColor lg:py-[14px] py-4 authdesc"
          btnname="Total Hours"
          btnStyle="text-greenTextColor"
        />
        <Button
          disabled={true}
          divstyle="w-full rounded-md shadow-md text-white font-medium bg-purpleColor lg:py-[14px] py-4 authdesc"
          btnname="Total Leaves"
          btnStyle="text-purpleTextColor"
        />
        <Button
          disabled={true}
          divstyle="w-full rounded-md shadow-md text-white font-medium bg-orangeColor lg:py-[14px] py-4 authdesc"
          btnname="Total Presents"
          btnStyle="text-orangeTextColor"
        />
      </div>
    </Container>
  );
};

export default Attendence;
