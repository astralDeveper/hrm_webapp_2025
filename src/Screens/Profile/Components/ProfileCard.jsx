// import React, { useEffect, useState } from "react";
// import { Formik, Form, Field } from "formik";
// import Input from "../../../Components/Input";
// import Button from "../../../Components/Button";
// import moment from "moment";

// const departmentDesignationMap = {
//   HR: ["HR Manager", "HR Executive"],
//   Software: ["Software Engineer", "Team Lead", "Project Manager"],
//   Marketing: ["Marketing Manager", "SEO Specialist"],
// };

// const ProfileCard = ({ profileSections, onSubmit }) => {
//   const [designations, setDesignations] = useState([]);

//   const handleDepartmentChange = (department, handleChange) => {
//     setDesignations(departmentDesignationMap[department] || []);
//     handleChange({ target: { name: "department", value: department } });
//   };

//   const generateInitialValues = () => {
//     const initialValues = {};
//     profileSections.forEach((section) => {
//       section.fields.forEach((field) => {
//         initialValues[field.name] = "";
//       });
//     });
//     return initialValues;
//   };

//   const getCurrentDateInput = () => {
//     const dateObj = new Date();
//     const month = ("0" + (dateObj.getMonth() + 1)).slice(-2);
//     const day = ("0" + dateObj.getDate()).slice(-2);
//     const year = dateObj.getFullYear();

//     const shortDate = `${year}-${month}-${day}`;

//     return shortDate;
//   };

//   return (
//     <Formik
//       initialValues={generateInitialValues()}
//       onSubmit={(values) => {
//         console.log("values", values);

//         onSubmit(values);
//       }}
//     >
//       {({ handleChange, values }) => (
//         <Form className="full flex flex-col gap-5 border-white bg-white min-h-screen p-5">
//           {profileSections.map((section, index) => (
//             <div key={index}>
//               <p className="authsubhead">{section.title}</p>
//               <div className="gridTwo w-full gap-2">
//                 {section.fields.map((field, idx) => {
//                   if (field.name === "department") {
//                     return (
//                       <div key={idx} className="mt-2 w-full">
//                         <label className="text-black authdesc">
//                           {field.label}
//                         </label>
//                         <div className="border-[1px] border-borderColor rounded w-full text-black mt-2">
//                           <select
//                             name={field.name}
//                             className="w-full px-5 lg:py-3 py-2 bg-transparent authdesc"
//                             onChange={(e) =>
//                               handleDepartmentChange(
//                                 e.target.value,
//                                 handleChange
//                               )
//                             }
//                             value={values[field.name]}
//                           >
//                             <option value="">Select Department</option>
//                             {Object.keys(departmentDesignationMap).map(
//                               (dept, i) => (
//                                 <option key={i} value={dept}>
//                                   {dept}
//                                 </option>
//                               )
//                             )}
//                           </select>
//                         </div>
//                       </div>
//                     );
//                   } else if (field.name === "designation") {
//                     return (
//                       <div key={idx} className="mt-2 w-full">
//                         <label className="text-black authdesc">
//                           {field.label}
//                         </label>
//                         <div className="border-[1px] border-borderColor rounded w-full text-black mt-2">
//                           <select
//                             name={field.name}
//                             className="w-full px-5 lg:py-3 py-2 bg-transparent authdesc"
//                             onChange={handleChange}
//                             value={values[field.name]}
//                           >
//                             <option value="">Select Designation</option>
//                             {designations.map((designation, i) => (
//                               <option key={i} value={designation}>
//                                 {designation}
//                               </option>
//                             ))}
//                           </select>
//                         </div>
//                       </div>
//                     );
//                   } else if (
//                     field.name === "dateOfBirth" ||
//                     field.name === "joiningDate"
//                   ) {
//                     return (
//                       <Input
//                         key={idx}
//                         divstyle="mt-2 w-full"
//                         label={field.label}
//                         labelstyle="text-black authdesc"
//                         innerDiv="border-[1px] border-borderColor rounded w-full text-black mt-2"
//                         inputStyle="w-full px-5 lg:py-3 py-2 bg-transparent authdesc"
//                         type={field.type}
//                         placeholder={field.placeholder}
//                         name={field.name}
//                         onChange={getCurrentDateInput}
//                         value={values[field.name]}
//                       />
//                     );
//                   }
//                   return (
//                     <Input
//                       key={idx}
//                       divstyle="mt-2 w-full"
//                       label={field.label}
//                       labelstyle="text-black authdesc"
//                       innerDiv="border-[1px] border-borderColor rounded w-full text-black mt-2"
//                       inputStyle="w-full px-5 lg:py-3 py-2 bg-transparent authdesc"
//                       type={field.type}
//                       placeholder={field.placeholder}
//                       name={field.name}
//                       onChange={handleChange}
//                       value={values[field.name]}
//                     />
//                   );
//                 })}
//               </div>
//             </div>
//           ))}
//           <Button btnname="Save Changes" type="submit" />
//         </Form>
//       )}
//     </Formik>
//   );
// };

// export default ProfileCard;

import React, { useEffect, useState } from "react";
import { Formik, Form, Field } from "formik";
import Input from "../../../Components/Input";
import Button from "../../../Components/Button";
import moment from "moment";

const departmentDesignationMap = {
  HR: ["HR Manager", "HR Executive"],
  Software: ["Software Engineer", "Team Lead", "Project Manager"],
  Marketing: ["Marketing Manager", "SEO Specialist"],
};

const ProfileCard = ({ profileSections, onSubmit }) => {
  const [designations, setDesignations] = useState([]);

  const handleDepartmentChange = (department, handleChange) => {
    setDesignations(departmentDesignationMap[department] || []);
    handleChange({ target: { name: "department", value: department } });
  };

  const getCurrentDateInput = () => {
    const dateObj = new Date();
    const month = ("0" + (dateObj.getMonth() + 1)).slice(-2);
    const day = ("0" + dateObj.getDate()).slice(-2);
    const year = dateObj.getFullYear();
    return `${year}-${month}-${day}`;
  };

  const generateInitialValues = () => {
    const initialValues = {};
    profileSections.forEach((section) => {
      section.fields.forEach((field) => {
        if (field.name === "dateOfBirth" || field.name === "joiningDate") {
          initialValues[field.name] = getCurrentDateInput();
        } else {
          initialValues[field.name] = "";
        }
      });
    });
    return initialValues;
  };

  return (
    <Formik
      initialValues={generateInitialValues()}
      onSubmit={(values) => {
        console.log("values", values);
        onSubmit(values);
      }}
    >
      {({ handleChange, values }) => (
        <Form className="full flex flex-col gap-5 border-white bg-white min-h-screen p-5">
          {profileSections.map((section, index) => (
            <div key={index}>
              <p className="authsubhead">{section.title}</p>
              <div className="gridTwo w-full gap-2">
                {section.fields.map((field, idx) => {
                  if (field.name === "department") {
                    return (
                      <div key={idx} className="mt-2 w-full">
                        <label className="text-black authdesc">
                          {field.label}
                        </label>
                        <div className="border-[1px] border-borderColor rounded w-full text-black mt-2">
                          <select
                            name={field.name}
                            className="w-full px-5 lg:py-3 py-2 bg-transparent authdesc"
                            onChange={(e) =>
                              handleDepartmentChange(
                                e.target.value,
                                handleChange
                              )
                            }
                            value={values[field.name]}
                          >
                            <option value="">Select Department</option>
                            {Object.keys(departmentDesignationMap).map(
                              (dept, i) => (
                                <option key={i} value={dept}>
                                  {dept}
                                </option>
                              )
                            )}
                          </select>
                        </div>
                      </div>
                    );
                  } else if (field.name === "designation") {
                    return (
                      <div key={idx} className="mt-2 w-full">
                        <label className="text-black authdesc">
                          {field.label}
                        </label>
                        <div className="border-[1px] border-borderColor rounded w-full text-black mt-2">
                          <select
                            name={field.name}
                            className="w-full px-5 lg:py-3 py-2 bg-transparent authdesc"
                            onChange={handleChange}
                            value={values[field.name]}
                          >
                            <option value="">Select Designation</option>
                            {designations.map((designation, i) => (
                              <option key={i} value={designation}>
                                {designation}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                    );
                  } else if (
                    field.name === "dateOfBirth" ||
                    field.name === "joiningDate"
                  ) {
                    return (
                      <Input
                        key={idx}
                        divstyle="mt-2 w-full"
                        label={field.label}
                        labelstyle="text-black authdesc"
                        innerDiv="border-[1px] border-borderColor rounded w-full text-black mt-2"
                        inputStyle="w-full px-5 lg:py-3 py-2 bg-transparent authdesc"
                        type="date"
                        name={field.name}
                        onChange={handleChange}
                        value={values[field.name]}
                      />
                    );
                  }
                  return (
                    <Input
                      key={idx}
                      divstyle="mt-2 w-full"
                      label={field.label}
                      labelstyle="text-black authdesc"
                      innerDiv="border-[1px] border-borderColor rounded w-full text-black mt-2"
                      inputStyle="w-full px-5 lg:py-3 py-2 bg-transparent authdesc"
                      type={field.type}
                      placeholder={field.placeholder}
                      name={field.name}
                      onChange={handleChange}
                      value={values[field.name]}
                    />
                  );
                })}
              </div>
            </div>
          ))}
          <Button btnname="Save Changes" type="submit" />
        </Form>
      )}
    </Formik>
  );
};

export default ProfileCard;
