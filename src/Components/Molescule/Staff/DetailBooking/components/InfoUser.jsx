import React from "react";
import moment from "moment";

export default function InfoUser({ res }) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg p-4 bg-mainColer font-mainText3 w-[100vw]">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-textColer">{res.name}</div>
        <p className="text-gray-700 text-base">
          <b>Email:</b> {res.email}
        </p>
        <p className="text-gray-700 text-base">
          <b>Phone:</b> {res.phone}
        </p>
        <p className="text-gray-700 text-base">
          <b> Date of Birth: </b>
          {moment(res.dob).format("MMMM Do, YYYY")}
        </p>
        <p className="text-gray-700 text-base">
          <b>Sex:</b> {res.sex}
        </p>
      </div>
    </div>
  );
}
