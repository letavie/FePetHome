import React from "react";
import Text from "../../Atom/Text/Text";
import "./PetCards.scss";

function PetCard({
  name,
  img,
  species,
  sex,
  className,
  onClick,
  breed,
  age,
  weight,
  status,
}) {
  const statusText =
    status === "active"
      ? "Hoạt động "
      : status === "inactive"
      ? "Không hoạt động"
      : status;
  return (
    <div
      className={`pet-card-container ${className} cursor-pointer`}
      onClick={onClick}
    >
      <div className="pet-card-detail">
        <div className="pet-img">
          <img src={img} alt={name} />
        </div>
        <div className="flex-grow">
          <div className="pet-card-name mr-10 mb-4">
            <Text content={"Tên thú cưng: "} className={"font-bold text-lg"} />
            <Text
              className="pet-card-name-text text-xl font-bold ml-2"
              content={name}
            />
          </div>
          <div className="grid grid-cols-2 gap-1">
            <div className="flex-row ">
              <Text content={"Trạng thái: "} className={"font-bold text-lg"} />
              <Text className="pet-card-species text-lg" content={statusText} />
            </div>
            <div className="flex-row">
              <Text content={"Loại: "} className={"font-bold text-lg"} />
              <Text className="pet-card-species text-lg" content={species} />
            </div>
            <div className="flex-row">
              <Text content={"Giới tính: "} className={"font-bold text-lg"} />
              <Text className="pet-card-sex text-lg" content={sex} />
            </div>
            <div className="flex-row">
              <Text content={"Giống loài: "} className={"font-bold text-lg"} />
              <Text className="pet-card-breed text-lg" content={breed} />
            </div>
            <div className="flex-row">
              <Text content={"Tuổi: "} className={"font-bold text-lg"} />
              <Text className="pet-card-age text-lg" content={age} />
            </div>
            <div className="flex-row">
              <Text content={"Cân nặng: "} className={"font-bold text-lg"} />
              <Text className="pet-card-weight text-lg" content={weight} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PetCard;
