import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  return (
    <div className="bg-[#000000]min-h-screen grid place-items-center">
      <button className="bg-[#ffffff] px-8 py-4 flex gap-2 items-center" 
      onClick={( ) => signIn ("google")}
      >
        <FcGoogle size={30} /> Sign In With Google 
      </button>
    </div>
  );
};

export default Login;
