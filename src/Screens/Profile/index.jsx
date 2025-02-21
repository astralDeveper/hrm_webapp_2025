import React, { useEffect } from "react";
import Container from "../../Components/Container";
import ProfileImage from "./Components/ProfileImage";
import ProfileCard from "./Components/ProfileCard";
import { IMAGES } from "../../utils/Images";
import { useState } from "react";
import { profileSectionsData } from "../../Utils/DummyData";
import { showToast } from "../../Components/toast";

const Profile = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleSubmit = (values) => {
    if (values) {
      showToast({ message: "Form values submitted", isError: false });
    }
    console.log("Form values submitted:", values);
    // Perform any actions you want with the form values
  };

  return (
    <Container mainStyle="p-5 bg-formbackground  overflow-y-auto">
      <div>Profile</div>

      <div className="w-[100%] flex md:flex-row flex-col items-start justify-center gap-4 py-2 ">
        <div className="md:w-[30%] w-full  mx-auto">
          <ProfileImage />
        </div>
        <div className="md:w-[90%] w-full">
          <ProfileCard
            profileSections={profileSectionsData}
            onSubmit={handleSubmit}
          />
        </div>
      </div>
    </Container>
  );
};

export default Profile;
