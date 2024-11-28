import axiosClient from "setup/configAxios";

export const verifyApi = async (params) => {
  try {
    console.log("Sending request with params:", params); // Debug log
    const data = await axiosClient.post(`api/v1/auth/verifyOtp`, params);
    return { error: null, data };
  } catch (error) {
    console.error("API Error:", error);
    console.log("API ne:", params);

    if (error.code === "ERR_NETWORK") {
      return { error: "BE Server is not running", data: null };
    }

    const status = error.response?.status;
    let errorMessage = "Something went wrong";
    if (status === 403) {
      errorMessage = "You do not have permission";
    } else if (status === 500) {
      errorMessage = "Server has problems";
    } else if (status === 400) {
      errorMessage = "Bad request";
    }

    return { error: errorMessage, data: null };
  }
};
