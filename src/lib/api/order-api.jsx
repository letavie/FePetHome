import axiosClient from "setup/configAxios";
const getAllOrder = async () => {
  try {
    const response = await axiosClient.get(`api/v1/orders?status=Processing`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

const confirmOrder = async (orderId) => {
  try {
    const response = await axiosClient.post(
      `api/v1/orders/confirm`,

      {
        orderId: orderId,
      }
    );
    console.log(response);
    return response;
  } catch (error) {
    console.error(error);
  }
};
const cancelOrder = async (orderId, reason) => {
  try {
    const response = await axiosClient.post(`api/v1/orders/staff/cancel`, {
      orderId: orderId,
      reason: reason,
    });
    return response;
  } catch (error) {
    console.error(error);
  }
};

const completeOrder = async (orderId) => {
  try {
    const response = await axiosClient.post(`api/v1/orders/completed`, {
      orderId: orderId,
    });
    console.log(response);
    return response;
  } catch (error) {
    console.error(error);
  }
};

export { getAllOrder, confirmOrder, cancelOrder, completeOrder };
