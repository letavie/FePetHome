import React, { useState } from "react";
import { format } from "date-fns";

const DateTimePicker = ({ onDateTimeChange }) => {
  const [selectedDateTime, setSelectedDateTime] = useState(null);

  const currentDateTime = new Date();
  const minDateTime = format(currentDateTime, "yyyy-MM-dd'T'HH:mm");

  const handleDateChange = (e) => {
    const localDateTime = new Date(e.target.value);
    const timeZoneOffset = localDateTime.getTimezoneOffset();
    const adjustedDateTime = new Date(
      localDateTime.getTime() - timeZoneOffset * 60000
    );

    console.log("Selected:", localDateTime);
    console.log("Adjusted:", adjustedDateTime);

    if (adjustedDateTime >= currentDateTime) {
      setSelectedDateTime(adjustedDateTime);
      onDateTimeChange(adjustedDateTime.toISOString());
    } else {
      alert("Please select a future date and time.");
      setSelectedDateTime(currentDateTime);
      onDateTimeChange(currentDateTime.toISOString());
    }
  };

  return (
    <div className="relative">
      <div className=" ">
        <input
          type="datetime-local"
          min={minDateTime}
          onChange={handleDateChange}
          className="w-full px-3 py-2 border border-[#1e3a8a] rounded-md focus:outline-none focus:border-blue-500"
        />
      </div>
    </div>
  );
};

export default DateTimePicker;
