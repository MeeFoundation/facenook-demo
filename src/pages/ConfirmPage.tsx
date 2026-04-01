import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Button } from "../components/Button";

export function ConfirmPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const email = searchParams.get("email") || "your email";
  const [code, setCode] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/reg/welcome");
  };

  return (
    <div className="pt-12">
      <h1 className="text-[22px] font-bold mb-1">Enter the confirmation code</h1>
      <p className="text-sm text-gray-500 leading-snug mb-6">
        To confirm your account, enter the 5-digit code we sent to{" "}
        <span className="font-semibold text-gray-800">{email}</span>.
      </p>

      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
          type="text"
          placeholder="Confirmation code"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          maxLength={5}
          className="w-full px-3.5 py-3 border border-gray-300 rounded-lg text-[15px] outline-none focus:border-[#1877f2] focus:ring-2 focus:ring-[#1877f2]/20"
        />

        <Button type="submit" variant="primary" className="mt-2">
          Continue
        </Button>
        <Button
          type="button"
          variant="secondary"
          onClick={() => alert("Demo — no code will be resent.")}
        >
          I didn't get the code
        </Button>
      </form>
    </div>
  );
}
