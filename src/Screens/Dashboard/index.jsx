// // import React from 'react'

// // const Dashboard = () => {
// //   return (
// //     <div>Dashboard</div>
// //   )
// // }

// // export default Dashboard

// import React, { useState } from 'react';

// const Dashboard = () => {
//   const [checkInTime, setCheckInTime] = useState(null);
//   const [checkOutTime, setCheckOutTime] = useState(null);
//   const [totalTime, setTotalTime] = useState(null);
//   const [isCheckedIn, setIsCheckedIn] = useState(false);

//   // Function to handle check-in
//   const handleCheckIn = () => {
//     const now = new Date(); // Current time
//     setCheckInTime(now);
//     setIsCheckedIn(true);
//     setTotalTime(null); // Reset total time on new check-in
//   };

//   // Function to handle check-out and calculate total time
//   const handleCheckOut = () => {
//     const now = new Date(); // Current time
//     setCheckOutTime(now);

//     if (checkInTime) {
//       // Calculate the difference in milliseconds
//       const timeDiff = now - checkInTime;

//       // Convert milliseconds to hours and minutes
//       const hours = Math.floor((timeDiff / (1000 * 60 * 60)) % 24);
//       const minutes = Math.floor((timeDiff / (1000 * 60)) % 60);
//       const totalWorkedTime = `${hours} hrs ${minutes} mins`;

//       setTotalTime(totalWorkedTime);

//       // Send data to API (replace with actual API call)
//       const payload = {
//         checkIn: checkInTime.toLocaleTimeString(),
//         checkOut: now.toLocaleTimeString(),
//         totalWorkedTime: totalWorkedTime,
//       };

//       sendToApi(payload);
//     }

//     setIsCheckedIn(false);
//   };

//   // Function to send check-in and check-out data to the API
//   const sendToApi = (data) => {
//     // Replace with your actual API URL and logic
//     console.log('Sending data to API:', data);
//     // Example:
//     // axios.post('/api/attendance', data)
//     //   .then(response => console.log('Success:', response))
//     //   .catch(error => console.error('Error:', error));
//   };

//   return (
//     <div>
//       {!isCheckedIn ? (
//         <button onClick={handleCheckIn}>Check In</button>
//       ) : (
//         <button onClick={handleCheckOut}>Check Out</button>
//       )}

//       {checkInTime && (
//         <p>Check-In Time: {checkInTime.toLocaleTimeString()}</p>
//       )}

//       {checkOutTime && (
//         <p>Check-Out Time: {checkOutTime.toLocaleTimeString()}</p>
//       )}

//       {totalTime && (
//         <p>Total Working Time: {totalTime}</p>
//       )}
//     </div>
//   );
// };

// export default Dashboard;

// import React from 'react'

// const Dashboard = () => {
//   return (
//     <div>Dashboard</div>
//   )
// }

// export default Dashboard

import React, { useState } from "react";
import { useSelector } from "react-redux";
import Container from "../../Components/Container";

const Dashboard = () => {
  const token = useSelector((state) => state.Auth.token);

  console.log("token", token);

  const [checkInTime, setCheckInTime] = useState(null);
  const [checkOutTime, setCheckOutTime] = useState(null);
  const [totalTime, setTotalTime] = useState(null);
  const [isCheckedIn, setIsCheckedIn] = useState(false);

  const handleCheckIn = () => {
    const now = new Date(); // Current time
    setCheckInTime(now);
    setIsCheckedIn(true);
    setTotalTime(null);
  };

  const handleCheckOut = () => {
    const now = new Date(); // Current time
    setCheckOutTime(now);

    if (checkInTime) {
      const timeDiff = now - checkInTime;

      const hours = Math.floor((timeDiff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((timeDiff / (1000 * 60)) % 60);
      const totalWorkedTime = `${hours} hrs ${minutes} mins`;

      setTotalTime(totalWorkedTime);
    }

    setIsCheckedIn(false);
  };

  return (
    <>
      <Container>
        <div>
          {!isCheckedIn ? (
            <button onClick={handleCheckIn}>Check In</button>
          ) : (
            <button onClick={handleCheckOut}>Check Out</button>
          )}

          {checkInTime && (
            <p>Check-In Time: {checkInTime.toLocaleTimeString()}</p>
          )}

          {checkOutTime && (
            <p>Check-Out Time: {checkOutTime.toLocaleTimeString()}</p>
          )}

          {totalTime && <p>Total Working Time: {totalTime}</p>}
        </div>
      </Container>
    </>
  );
};

export default Dashboard;
