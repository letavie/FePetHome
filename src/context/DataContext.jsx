// DataContext.js
import React, { createContext, useState, useEffect } from "react";
import { getAllBookingService } from "lib/api/services-api";
import { getAllOrder } from "lib/api/order-api";
export const DataContext = createContext();
export const DataProvider = ({ children }) => {
  const [booking, setBooking] = useState([]);
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState([]);
  const fetchBookingData = async () => {
    try {
      const data = await getAllBookingService();

      const formattedData = data.map((order, index) => {
        return {
          id: index + 1,
          idBooking: order._id,
          product: order?.product?.name,
          timeStartService: order.timeStartService,
          status: order.status,
          action: "",
        };
      });

      setBooking(formattedData);
      console.log("book", booking);
    } catch (error) {
      console.log("err", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBookingData();
  }, []);
  const getAllOrderS = async () => {
    try {
      const data = await getAllOrder();
      const data2 = data.map((order, index) => ({
        id: index + 1,
        idOrder: order._id,
        product: order.orderDetails
          .map((detail) => detail.product.name + " | SL: " + detail.quantity)
          .join(`\n`),
        total: order.totalPrice,
        status: order.status,
        action: "",
        image: order.orderDetails.map((detail) => detail.product.image),
        statusPayment: order.payment.status,
        paymentMethod: order.payment.paymentMethod,
        dateOrder: order.dateOrder,
      }));
      setOrder(data2);
      console.log("dt", data2);
    } catch (error) {
      console.log("err", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllOrderS();
  }, []);

  return (
    <DataContext.Provider
      value={{ booking, loading, order, fetchBookingData, getAllOrderS }}
    >
      {children}
    </DataContext.Provider>
  );
};
