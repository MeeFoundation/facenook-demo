import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../components/Button";
import { Logo } from "../components/Logo";

export function HomePage() {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/feed");
  }, [navigate]);
  return (
    <div className="pt-5">
      <div className="flex items-center gap-2 mb-8">
        <Logo size={40} />
        <span className="text-[28px] font-bold text-[#1877f2]">facenook</span>
      </div>

      <h1 className="text-[17px] font-normal text-gray-500 leading-relaxed mb-6">
        Connect with friends and the world around you on Facenook.
      </h1>

      <div className="flex flex-col gap-3">
        <input
          type="text"
          placeholder="Email address or phone number"
          className="w-full px-3.5 py-3 border border-gray-300 rounded-lg text-[15px] outline-none focus:border-[#1877f2] focus:ring-2 focus:ring-[#1877f2]/20"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full px-3.5 py-3 border border-gray-300 rounded-lg text-[15px] outline-none focus:border-[#1877f2] focus:ring-2 focus:ring-[#1877f2]/20"
        />
        <Button variant="primary" onClick={() => navigate("/feed")}>
          Log in
        </Button>
        <a
          href="#"
          className="text-center text-sm text-[#1877f2] hover:underline"
        >
          Forgotten password?
        </a>
        <hr className="border-gray-200 my-1" />
        <Link
          to="/reg"
          className="block text-center py-3.5 bg-[#42b72a] text-white rounded-lg text-base font-semibold hover:bg-[#36a420] transition-colors no-underline"
        >
          Create new account
        </Link>
      </div>
    </div>
  );
}
