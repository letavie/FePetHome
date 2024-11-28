import React, { useState, useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { getDetailBookingService } from "lib/api/services-api";
import Loading from "Components/ui/loading";
import TableCage from "./components/TableCage";
import InfoPet from "./components/InfoPet";
import InfoUser from "./components/InfoUser";

import { ConfirmCage } from "./components/ConfirmCage";
export default function DetailBooking() {
  const [loading, setLoading] = useState(true);
  const [bookingDetail, setBookingDetail] = useState();
  const [bookingService, setBookingService] = useState();
  // const [rerender, setRerender] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const getAllBookingDetail = async () => {
      try {
        const data = await getDetailBookingService(id);
        setBookingDetail(data);
        setBookingService(data.bookingService);
      } catch (error) {
        console.log("error", error);
      } finally {
        setLoading(false);
      }
    };

    getAllBookingDetail();
  }, []);
  return (
    <div>
      <h1 className="font-bold font-mainText3 text-xl pb-4">
        Chi tiết đặt chỗ
      </h1>
      <Link to={"/staff/list-booking"}>
        <div className="hover:text-textColer">
          <ArrowLeft />
        </div>
      </Link>
      <div>
        {loading ? (
          <Loading />
        ) : bookingDetail ? (
          <div className="m-5">
            <div className="p-3 flex gap-5 bg-mainColer rounded-md shadow-md">
              <img
                src={bookingService.product.image}
                alt={bookingService.product.name}
                className="rounded-md w-50 max-h-60"
              />
              <div className="font-mainText3 w-[70%] ">
                <h1 className="font-bold text-textColor text-xl text-textColer">
                  {bookingService.product.name}
                </h1>
                <h1>
                  <b>Thời gian bắt đầu:</b> {bookingService.timeStartService}
                </h1>

                {bookingService.status === "Cancelled" ? (
                  <h1 className="flex">
                    <b>Trạng thái: </b>
                    <p className="text-red-500">{bookingService.status}</p>
                  </h1>
                ) : bookingService.cage === null ? (
                  <div className="">
                    <p>
                      <b className="text-red-500">*</b>Chưa chọn lồng
                    </p>

                    <ConfirmCage bookingId={id} />
                  </div>
                ) : (
                  <>
                    <h1 className="flex">
                      <b>Trạng thái: </b>
                      <p className="text-green-500">{bookingService.status}</p>
                    </h1>
                    <TableCage res={bookingService.cage} />
                  </>
                )}
              </div>
            </div>
            <div className="mt-4 flex gap-5">
              <InfoUser res={bookingDetail.user} />
              <InfoPet res={bookingDetail.pet} />
            </div>
          </div>
        ) : (
          <p>Không có chi tiết đặt chỗ</p>
        )}
      </div>
    </div>
  );
}
