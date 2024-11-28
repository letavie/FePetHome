import axiosClient from "setup/configAxios";
export const registerUser = async (params) => {
  try {
    const data = await axiosClient.post("api/v1/auth/register", {
      name: params.name,
      phone: params.phone,
      email: params.email,
      password: params.password,
      dob: params.dob,
      sex: params.sex,
    });

    return { error: null, data };
  } catch (error) {
    console.log(error);
    if (error.code === "ERR_NETWORK") {
      return { error: "BE Server is not running" };
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
