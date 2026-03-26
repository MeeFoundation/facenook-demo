import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SystemPopup } from "../components/SystemPopup";

const currentYear = new Date().getFullYear();
const days = Array.from({ length: 31 }, (_, i) => i + 1);
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const years = Array.from({ length: 100 }, (_, i) => currentYear - i);

const inputClass =
  "w-full px-3.5 py-3 border border-gray-300 rounded-lg text-[15px] outline-none focus:border-[#1877f2] focus:ring-2 focus:ring-[#1877f2]/20";

const selectClass =
  "px-3.5 py-3 border border-gray-300 rounded-lg text-[15px] bg-white outline-none cursor-pointer appearance-none bg-[url('data:image/svg+xml,%3Csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20width=%2712%27%20height=%278%27%3E%3Cpath%20d=%27M1%201l5%205%205-5%27%20stroke=%27%23606770%27%20stroke-width=%271.5%27%20fill=%27none%27/%3E%3C/svg%3E')] bg-no-repeat bg-[right_14px_center] pr-9 focus:border-[#1877f2] focus:ring-2 focus:ring-[#1877f2]/20";

export function RegisterPage() {
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(true);
  const [form, setForm] = useState({
    firstName: "",
    surname: "",
    day: "",
    month: "",
    year: "",
    gender: "",
    contact: "",
  });

  const handleAutoFill = () => {
    setForm({
      firstName: "Paul",
      surname: "Trevithick",
      day: "7",
      month: "8",
      year: "1959",
      gender: "male",
      contact: "paul.trevithick@email.com",
    });
    setShowPopup(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(
      `/reg/confirm?email=${encodeURIComponent(form.contact || "user@example.com")}`,
    );
  };

  return (
    <>
      {showPopup && (
        <SystemPopup
          question="Do you want to provide the following data from your wallet to Facenook?"
          yesLabel="Yes"
          noLabel="No, thanks"
          onYes={handleAutoFill}
          onNo={() => setShowPopup(false)}
        />
      )}

      <button
        className="bg-transparent border-none text-[28px] cursor-pointer text-gray-800 py-2"
        onClick={() => navigate("/")}
        aria-label="Go back"
      >
        &#8249;
      </button>

      <div className="flex items-center gap-1.5 mt-2 mb-3">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <circle cx="6" cy="12" r="5" stroke="#1877f2" strokeWidth="2" />
          <circle cx="18" cy="12" r="5" stroke="#1877f2" strokeWidth="2" />
        </svg>
        <span className="text-[15px] font-semibold text-gray-800">
          Facenook
        </span>
      </div>

      <h1 className="text-[22px] font-bold mb-1">Get started on Facenook</h1>
      <p className="text-sm text-gray-500 mb-5 leading-snug">
        Create an account to connect with friends, family and communities of
        people who share your interests.
      </p>

      <form onSubmit={handleSubmit}>
        <label className="block text-sm font-semibold mb-1.5">Name</label>
        <div className="flex gap-2.5">
          <input
            type="text"
            name="firstName"
            placeholder="First name"
            value={form.firstName}
            onChange={handleChange}
            className={`${inputClass} flex-1`}
          />
          <input
            type="text"
            name="surname"
            placeholder="Surname"
            value={form.surname}
            onChange={handleChange}
            className={`${inputClass} flex-1`}
          />
        </div>

        <label className="block text-sm font-semibold mb-1.5 mt-4">
          Date of birth{" "}
          <span
            className="text-gray-500 cursor-help text-[13px]"
            title="Why do we ask for your date of birth?"
          >
            &#9432;
          </span>
        </label>
        <div className="flex gap-2.5">
          <select
            name="day"
            value={form.day}
            onChange={handleChange}
            className={`${selectClass} flex-1`}
          >
            <option value="">Day</option>
            {days.map((d) => (
              <option key={d} value={d}>
                {d}
              </option>
            ))}
          </select>
          <select
            name="month"
            value={form.month}
            onChange={handleChange}
            className={`${selectClass} flex-1`}
          >
            <option value="">Month</option>
            {months.map((m, i) => (
              <option key={m} value={i + 1}>
                {m}
              </option>
            ))}
          </select>
          <select
            name="year"
            value={form.year}
            onChange={handleChange}
            className={`${selectClass} flex-1`}
          >
            <option value="">Year</option>
            {years.map((y) => (
              <option key={y} value={y}>
                {y}
              </option>
            ))}
          </select>
        </div>

        <label className="block text-sm font-semibold mb-1.5 mt-4">
          Gender{" "}
          <span
            className="text-gray-500 cursor-help text-[13px]"
            title="Why do we ask for your gender?"
          >
            &#9432;
          </span>
        </label>
        <select
          name="gender"
          value={form.gender}
          onChange={handleChange}
          className={`${selectClass} w-full`}
        >
          <option value="">Select your gender</option>
          <option value="female">Female</option>
          <option value="male">Male</option>
          <option value="other">Other</option>
          <option value="prefer_not">Prefer not to say</option>
        </select>

        <label className="block text-sm font-semibold mb-1.5 mt-4">
          Mobile number or email address
        </label>
        <input
          type="text"
          name="contact"
          placeholder="Mobile number or email address"
          value={form.contact}
          onChange={handleChange}
          className={inputClass}
        />
        <p className="text-xs text-gray-500 mt-1.5 leading-snug">
          You may receive notifications from us.{" "}
          <a href="#" className="text-[#1877f2] no-underline hover:underline">
            Learn why we ask for your contact information
          </a>
        </p>

        <p className="text-xs text-gray-500 mt-3 leading-relaxed">
          People who use our service may have uploaded your contact information
          to Facenook.{" "}
          <a href="#" className="text-[#1877f2] no-underline hover:underline">
            Learn more
          </a>
          .
        </p>
        <p className="text-xs text-gray-500 mt-3 leading-relaxed">
          By tapping Submit, you create an account and agree to Facenook's{" "}
          <a href="#" className="text-[#1877f2] no-underline hover:underline">
            Terms
          </a>
          ,{" "}
          <a href="#" className="text-[#1877f2] no-underline hover:underline">
            Privacy Policy
          </a>{" "}
          and{" "}
          <a href="#" className="text-[#1877f2] no-underline hover:underline">
            Cookies Policy
          </a>
          .
        </p>
        <p className="text-xs text-gray-500 mt-3 leading-relaxed">
          The{" "}
          <a href="#" className="text-[#1877f2] no-underline hover:underline">
            Privacy Policy
          </a>{" "}
          describes the ways we can use the information we collect when you
          create an account. For example, we use this information to provide,
          personalise and improve our products, including ads.
        </p>

        <button
          type="submit"
          className="w-full py-3.5 mt-5 bg-[#1877f2] text-white rounded-lg text-base font-semibold cursor-pointer hover:bg-[#166fe5] transition-colors"
        >
          Submit
        </button>
        <button
          type="button"
          className="w-full py-3.5 mt-2.5 bg-white text-gray-800 border border-gray-300 rounded-lg text-base font-semibold cursor-pointer hover:bg-gray-50 transition-colors"
          onClick={() => navigate("/")}
        >
          I already have an account
        </button>
      </form>
    </>
  );
}
