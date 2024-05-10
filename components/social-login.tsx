'use client'
import axios from "axios";
import { useRouter } from "next/navigation";
export default function SocialLogin() {

  const router = useRouter();
  const handleGoogleLogin = async () => {
    router.push("/thankyou")
    try {
      const { data } = await axios.get("http://18.216.204.3:3000/google-login");
      window.location.href = data.redirect_uri; // Redirect to Google OAuth login page
    } catch (error) {
      console.error("Error initiating Google login:", error);
    }

  };

  const handleGoogleCallback = async (code:any) => {
    try {
      const { data } = await axios.get(`http://18.216.204.3:3000/google-callback?code=${code}`);
      console.log("Google login callback data:", data);
    } catch (error) {
      console.error("Error handling Google login callback:", error);
    }
  };

  return (
    <>
      
      <div className="flex items-center my-6">
        <div className="border-t border-gray-800 grow mr-3" aria-hidden="true" />
        <div className="text-sm text-gray-400 italic">Or</div>
        <div className="border-t border-gray-800 grow ml-3" aria-hidden="true" />
      </div>
      
      <button className="btn-sm text-white bg-gray-800 hover:bg-gray-500 w-full relative flex after:flex-1" onClick={handleGoogleLogin}>
        <div className="flex-1 flex items-center">
          <svg className="w-4 h-4 fill-current text-gray-200 shrink-0" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.679 6.545H8.043v3.273h4.328c-.692 2.182-2.401 2.91-4.363 2.91a4.727 4.727 0 1 1 3.035-8.347l2.378-2.265A8 8 0 1 0 8.008 16c4.41 0 8.4-2.909 7.67-9.455Z" />
          </svg>
        </div>
        <span className="flex-auto text-gray-50 pl-3">Continue With Google</span>
      </button>    
    </>
  );
}
