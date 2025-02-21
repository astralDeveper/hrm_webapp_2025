import AuthRightSide from "./Components/AuthRightSide";
import { IMAGES } from "../../utils/Images";
import { useNavigate } from "react-router-dom";
import { Forgotvalidationschema } from "../../Utils/schema";
import AuthForm from "../../Components/AuthForm";
import { showToast } from "../../Components/toast";

const ForgotPassword = () => {
  const navigate = useNavigate();

  const initialValues = {
    email: "",
  };

  const fields = [
    {
      name: "email",
      label: "Email Address",
      type: "email",
      placeholder: "Enter your Email",
    },
  ];

  const handleSubmit = (values) => {
    showToast({ message: "Email Is Correct", isError: false });
    setTimeout(() => {
      navigate("/otp");
    }, 1000);
  };

  return (
    <div className="w-full gridTwo bg-white">
      <div className="mainContainer  flex-col flexCenter mx-auto md:my-0   h-screen">
        <img
          src={IMAGES.AUTH}
          className="block md:hidden mx-auto h-[200px] w-full  "
          alt="Logo"
        />
        <div className="w-full my-2">
          <p className="authheading font-semibold text-start text-black">
            Forgotten Password?
          </p>

          <p className="authdesc inputtext font-normal text-black">
            Please enter your Attendance credentials.
          </p>

          <AuthForm
            fields={fields}
            initialValues={initialValues}
            validationSchema={Forgotvalidationschema}
            onSubmit={handleSubmit}
            btnname="Request"
          />
        </div>
      </div>
      <AuthRightSide />
    </div>
  );
};

export default ForgotPassword;
