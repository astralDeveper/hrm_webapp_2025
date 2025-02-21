import { IMAGES } from "./Images";
 
export const cardSData = [
  {
    title: "Datsa",
    img1: IMAGES.DATA,
     
  },
];

export const profileSectionsData = [
  {
    title: "User Information",
    fields: [
      {
        label: "First Name",
        type: "text",
        placeholder: "Enter your first name",
        name: "firstName",
      },
      {
        label: "Last Name",
        type: "text",
        placeholder: "Enter your last name",
        name: "lastName",
      },
      {
        label: "Date of Birth",
        type: "date",
        placeholder: "Select date",
        name: "dateOfBirth",
      },
      {
        label: "Joining Date",
        type: "date",
        placeholder: "Select date",
        name: "joiningDate",
      },
      {
        label: "Email Address",
        type: "email",
        placeholder: "Enter your Email Address",
        name: "email",
      },
      {
        label: "Phone Number",
        type: "number",
        placeholder: "Enter your Phone Number",
        name: "phone",
      },
      {
        label: "Department",
        type: "text",
        placeholder: "Enter your Department",
        name: "department",
      },
      {
        label: "Designation",
        type: "text",
        placeholder: "Enter your Designation",
        name: "designation",
      },
    ],
  },
  {
    title: "Identity Card Information",
    fields: [
      {
        label: "CNIC Number",
        type: "number",
        placeholder: "Enter your CNIC Number",
        name: "cnic",
      },
      {
        label: "CNIC Expiry Date",
        type: "number",
        placeholder: "Enter your CNIC Expiry Date",
        name: "expiryDate",
      },
    ],
  },
  {
    title: "Bank Information",
    fields: [
      {
        label: "Account Holder Name",
        type: "text",
        placeholder: "Enter your Account Holder Name",
        name: "holderName",
      },
      {
        label: "Bank Name",
        type: "text",
        placeholder: "Enter your Bank Name",
        name: "bankName",
      },
      {
        label: "Raast ID",
        type: "number",
        placeholder: "Enter your Raast ID",
        name: "raastId",
      },
      {
        label: "Account/IBAN number",
        type: "number",
        placeholder: "Enter your Account/IBAN number",
        name: "accountNumber",
      },
    ],
  },
  {
    title: "Security",
    fields: [
      {
        label: "Old Password",
        type: "text",
        placeholder: "Enter your Old Password",
        name: "oldPassword",
      },
      {
        label: "New Password",
        type: "text",
        placeholder: "Enter your New Password",
        name: "newPassword",
      },
    ],
  },
];

export const AttendenceData = [
  {
    title: "Date",
    Data:["01/12/2024","02/12/2024","03/12/2024","04/12/2024","05/12/2024"]
  },
  {
    title: "Check-in",
    Data:["08:16 PM","08:12 PM","08:10 PM","08:30 PM","08:00 PM"]
  },
  {
    title: "Check-out",
    Data:["05:20 AM","05:25 AM","05:00 AM","05:30 AM","05:02 AM"]
  },
  {
    title: "Total Hours",
    Data:["09:05","09:13","08:50","09:00","09:02"]
  }
]
