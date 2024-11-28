import React, { useState } from "react";
import OTPInput from "react-otp-input";
import { Button } from "Components/ui/button";
import { verifyApi } from "lib/api/user-api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

const VerifyOtp = () => {
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);

    // Get data from local storage
    const registerData = JSON.parse(localStorage.getItem("registerData"));
    if (!registerData) {
      toast.error("No registration data found.", { position: "top-left" });
      setLoading(false);
      return;
    }
    const result = await verifyApi({ ...registerData, otp });
    setLoading(false);
    console.log("API Response:", result);
    if (result.error) {
      toast.error(`Error: ${result.error}`, { position: "top-left" });
    } else if (result.data?.status === "error") {
      toast.error(`Error: ${result.data.message}`, { position: "top-left" });
    } else {
      toast.success("Verification successful", { position: "top-right" });
      setTimeout(() => {
        navigate("/login");
      }, 1000);
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-4">
      <h1 className="text-gray-500 mb-6">Please check your mail !</h1>
      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        <OTPInput
          value={otp}
          onChange={setOtp}
          numInputs={6}
          renderSeparator={<span className="mx-2">-</span>}
          renderInput={(props) => <input {...props} />}
          inputStyle={{
            width: "2rem",
            height: "2.5rem",
            border: "1px solid #d1d5db",
            borderRadius: "0.375rem",
            textAlign: "center",
            fontSize: "1.125rem",
            outline: "none",
            focus: {
              outline: "none",
              ring: "2px solid #3b82f6",
            },
          }}
        />
        <Button type="submit" disabled={loading} className="mt-6 px-6 py-2">
          {loading ? "Verifying..." : "Verify OTP"}
        </Button>
      </form>
    </div>
  );
};

export default VerifyOtp;
