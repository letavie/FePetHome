import React, { useEffect, useState } from "react";
import { Button } from "Components/ui/button";
import { useParams } from "react-router-dom";
import { DetailService } from "lib/api/services-api";
import { Skeleton } from "Components/ui/skeleton";
import { CreateServiceBookings } from "./components/CreateServiceBooking";
export default function ServicesDetail() {
  const [card, setCard] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { id } = useParams();
  useEffect(() => {
    const fetchDetailService = async () => {
      try {
        const data = await DetailService(id);
        setCard(data);
      } catch (error) {
        console.error("Error fetching service detail:", error);
      } finally {
        setIsLoading(false);
      }
    };

    const userId = localStorage.getItem("userId");
    if (userId) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
      setIsLoading(false);
    }

    fetchDetailService();
  }, [id]);
  return (
    <>
      {isLoading ? (
        <div className="flex justify-center  flex-row-reverse gap-10 ">
          <Skeleton className="h-[20vw] w-[20vw] rounded-xl mb-5" />
          <div className="space-y-6 ">
            <Skeleton className="h-10 w-[20vw] mb-10" />
            <Skeleton className="h-7 w-[10vw] " />
            <Skeleton className="h-5 w-[15vw] " />
            <Skeleton className="h-4 w-[8vw] " />
          </div>
        </div>
      ) : (
        <div className="mx-[20%]">
          <div className="flex justify-center mb-5">
            <div className="p-5 ">
              <h1 className="text-3xl font-bold text-blue-900 mb-7">
                {card && card.name}
              </h1>
              <p className="font-bold mb-3">{card && card.price} vnđ</p>

              {isLoggedIn ? (
                <CreateServiceBookings productId={id} />
              ) : (
                <div>
                  <Button className="text-white bg-gray-900 rounded-2xl px-10 mb-3">
                    ĐẶT DỊCH VỤ
                  </Button>
                  <p className="text-red-500">
                    {" "}
                    Vui lòng đăng nhập để đặt dịch vụ
                  </p>
                </div>
              )}
            </div>
            <img
              src={card && card.image}
              alt={card && card.name}
              className="w-[20vw] rounded-md shadow-inner mx-5"
            />
          </div>
          <div className="min-h-10 p-5 ring-1  ring-gray-500 rounded-sm mb-5">
            <p className="font-bold text-blue-900 text-2xl mb-5">Mô tả Combo</p>
            {card && card.des}
          </div>
        </div>
      )}
    </>
  );
}
