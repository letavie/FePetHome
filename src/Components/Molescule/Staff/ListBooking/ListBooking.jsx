import React, { useContext } from "react";
import { DataContext } from "context/DataContext";
import Loading from "Components/ui/loading";
import { DataTableBooking } from "./components/Data-table-booking";

export default function ListBooking() {
  const { booking, loading } = useContext(DataContext);
  console.log(booking);
  return (
    <div>
      <h1 className="font-bold font-mainText3 text-xl pb-4">
        Danh sách đặt chỗ
      </h1>
      {loading ? (
        <Loading />
      ) : booking && booking.length >= 1 ? (
        <DataTableBooking res={booking} />
      ) : (
        <p>Không có đặt chỗ</p>
      )}
    </div>
  );
}
