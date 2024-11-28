import { Link } from "react-router-dom";
import AuthenticationLayout from "../AuthenticationLayout.jsx";
import VerifyOtp from "./VerifyOtp.jsx";
export default function VerifiOTP() {
  return (
    <AuthenticationLayout>
      <div className="lg:p-8 relative">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center items-center gap-2">
            <h2 className="text-2xl font-semibold mb-4">Verify OTP</h2>
          </div>
          <VerifyOtp />
        </div>
      </div>
    </AuthenticationLayout>
  );
}
