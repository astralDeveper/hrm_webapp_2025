import React, { useState } from "react";
import RadioButton from "../../Components/RadioButton";
import { IMAGES } from "../../utils/Images";
import Button from "../../Components/Button";
import { useNavigate } from "react-router-dom";
import Container from "../../Components/Container";
import AppForm from "./Components/AppForm";
import SubForm from "./Components/SubForm";

const Form = () => {
  const [selectedOption, setSelectedOption] = useState(
    "Leave Application Form"
  );

  return (
    <Container mainStyle="md:p-5 p-2 bg-formbackground">
      <p className="subhead text-black">Form Submission</p>
      <p className="subhead text-black">Select a form</p>
      <div className="gridTwo md:gap-5 gap-1 w-full my-2  ">
        <RadioButton
          auth
          image={IMAGES.RADIO}
          value={selectedOption === "Leave Application Form"}
          onSelect={() => setSelectedOption("Leave Application Form")}
          label="Leave Application Form"
          desc="Submit your leave request for approval."
        />

        <RadioButton
          auth
          image={IMAGES.RADIO}
          value={selectedOption === "Late Submission Form/Generic Issues"}
          onSelect={() =>
            setSelectedOption("Late Submission Form/Generic Issues")
          }
          label="Late Submission Form/Generic Issues"
          desc="Report a late check-in or any general issue."
        />
      </div>
      <div className="mt-4">
        {selectedOption === "Leave Application Form" ? (
          <AppForm />
        ) : (
          <SubForm />
        )}
      </div>
    </Container>
  );
};

export default Form;
