import { Link } from "react-router-dom";
import AuthenticationLayout from "../AuthenticationLayout.jsx";
import UserAuthForm from "./user-auth-form.jsx";
export default function Register() {
  return (
    <AuthenticationLayout>
      <div className="lg:p-8 relative ">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px] ">
          <div className="flex flex-col space-y-2 text-center items-center gap-2">
            <h1 className="text-2xl font-semibold tracking-tight">PET HOME</h1>
            <p className="text-sm text-muted-foreground">
              Register to your account
            </p>
          </div>
          <UserAuthForm />
          <p className="px-8 text-center text-sm text-muted-foreground">
            Have a account?{" "}
            <Link
              to="/login"
              className="underline underline-offset-4 text-blue-500 hover:text-blue-600 font-normal"
            >
              LOGIN
            </Link>
            .
          </p>
        </div>
      </div>
    </AuthenticationLayout>
  );
}
