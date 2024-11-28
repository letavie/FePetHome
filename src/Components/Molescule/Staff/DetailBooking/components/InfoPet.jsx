import React from "react";

export default function InfoPet({ res }) {
  return (
    <div className=" w-[100vw] rounded overflow-hidden shadow-lg p-4 bg-mainColer font-mainText3 flex items-center justify-start  ">
      <img
        className="w-50 h-48 object-cover rounded-md"
        src={res.image.url}
        alt={res.name}
      />
      <div className="px-6 py-4   ">
        <div className="font-bold text-xl mb-2 text-textColer">{res.name}</div>
        <p className="text-gray-700 text-base">
          <b>Loài:</b> {res.species}
        </p>
        <p className="text-gray-700 text-base">
          <b>Giới tính:</b> {res.sex}
        </p>
        <p className="text-gray-700 text-base">
          <b>Giống:</b> {res.breed}
        </p>
        <p className="text-gray-700 text-base">
          <b>Tuổi: </b>
          {res.age} years
        </p>
        <p className="text-gray-700 text-base">
          <b>Cân nặng: </b>
          {res.weight} kg
        </p>
      </div>
    </div>
  );
}
