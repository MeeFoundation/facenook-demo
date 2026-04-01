import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/Button";
import { Logo } from "../components/Logo";
import { SystemPopup } from "../components/SystemPopup";


const inputClass =
    "w-full px-3.5 py-3 border border-gray-300 rounded-lg text-[15px] outline-none focus:border-[#1877f2] focus:ring-2 focus:ring-[#1877f2]/20";

const selectClass =
    "px-3.5 py-3 border border-gray-300 rounded-lg text-[15px] bg-white outline-none cursor-pointer appearance-none bg-[url('data:image/svg+xml,%3Csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20width=%2712%27%20height=%278%27%3E%3Cpath%20d=%27M1%201l5%205%205-5%27%20stroke=%27%23606770%27%20stroke-width=%271.5%27%20fill=%27none%27/%3E%3C/svg%3E')] bg-no-repeat bg-[right_14px_center] pr-9 focus:border-[#1877f2] focus:ring-2 focus:ring-[#1877f2]/20";

export function RegisterPage() {
    const navigate = useNavigate();
    const [showAgePopup, setShowAgePopup] = useState(false);
    const [ageVerified, setAgeVerified] = useState(false);
    const [showPrivateIdPopup, setShowPrivateIdPopup] = useState(false);
    const [privateIdLinked, setPrivateIdLinked] = useState(false);
    const [form, setForm] = useState({
        firstName: "",
        surname: "",
        day: "",
        month: "",
        year: "",
        gender: "",
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    ) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        navigate("/reg/confirm?email=user%40example.com");
    };

    return (
        <>
            {showPrivateIdPopup && (
                <SystemPopup
                    question="Share Private ID with Facenook"
                    tableRows={[
                        {
                            label: "Keri AID",
                            value: "1F26AD521903BD1053829FA7D92394889178937DBF",
                        },
                    ]}
                    yesLabel="Confirm"
                    noLabel="Cancel"
                    onYes={() => {
                        setPrivateIdLinked(true);
                        setShowPrivateIdPopup(false);
                    }}
                    onNo={() => setShowPrivateIdPopup(false)}
                />
            )}

            {showAgePopup && (
                <SystemPopup
                    question="Share with Facenook"
                    tableRows={[
                        { label: "Source", value: "Utah SEDI certificate" },
                        { label: "Presenting", value: "age > 13" },
                    ]}
                    yesLabel="Confirm"
                    noLabel="Cancel"
                    onYes={() => {
                        setAgeVerified(true);
                        setShowAgePopup(false);
                    }}
                    onNo={() => setShowAgePopup(false)}
                />
            )}

            <Button
                variant="ghost"
                onClick={() => navigate("/")}
                aria-label="Go back"
            >
                &#8249;
            </Button>

            <div className="flex items-center gap-1.5 mt-2 mb-3">
                <Logo size={24} />
                <span className="text-[15px] font-semibold text-gray-800">
                    Facenook
                </span>
            </div>

            <h1 className="text-[22px] font-bold mb-1">
                Get started on Facenook
            </h1>
            <p className="text-sm text-gray-500 mb-5 leading-snug">
                Create an account to connect with friends, family and
                communities of people who share your interests.
            </p>

            <form onSubmit={handleSubmit}>
                <label className="block text-sm font-semibold mb-1.5">
                    Name
                </label>
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

                <div className="mb-1.5 mt-4">
                    {ageVerified ? (
                        <div className="flex items-center gap-2 py-3 px-3.5 rounded-lg bg-green-50 border border-green-200">
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                                fill="none"
                            >
                                <circle cx="10" cy="10" r="9" fill="#22c55e" />
                                <path
                                    d="M6 10l3 3 5-6"
                                    stroke="#fff"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                            <span className="text-[15px] font-semibold text-green-700">
                                Age Verified
                            </span>
                        </div>
                    ) : (
                        <Button
                            type="button"
                            variant="teal"
                            onClick={() => setShowAgePopup(true)}
                        >
                            Verify Age
                        </Button>
                    )}
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

                <div className="mb-1.5 mt-4">
                    {privateIdLinked ? (
                        <div className="flex items-center gap-2 py-3 px-3.5 rounded-lg bg-green-50 border border-green-200">
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                                fill="none"
                            >
                                <circle cx="10" cy="10" r="9" fill="#22c55e" />
                                <path
                                    d="M6 10l3 3 5-6"
                                    stroke="#fff"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                            <span className="text-[15px] font-semibold text-green-700">
                                Private ID Linked
                            </span>
                        </div>
                    ) : (
                        <div className="flex items-center gap-2">
                            <Button
                                type="button"
                                variant="teal"
                                onClick={() => setShowPrivateIdPopup(true)}
                            >
                                Link Private ID
                            </Button>
                            <span className="relative group">
                                <span className="text-gray-500 cursor-help text-[15px]">
                                    &#9432;
                                </span>
                                <span className="hidden group-hover:block absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-56 px-3 py-2 rounded-lg bg-gray-800 text-white text-xs leading-snug shadow-lg z-10">
                                    A Private ID is a site-specific pseudonym — a unique identifier generated just for this site, so you can register without revealing your real identity or contact information.
                                </span>
                            </span>
                        </div>
                    )}
                </div>

                <p className="text-xs text-gray-500 mt-3 leading-relaxed">
                    People who use our service may have uploaded your contact
                    information to Facenook.{" "}
                    <a
                        href="#"
                        className="text-[#1877f2] no-underline hover:underline"
                    >
                        Learn more
                    </a>
                    .
                </p>
                <p className="text-xs text-gray-500 mt-3 leading-relaxed">
                    By tapping Submit, you create an account and agree to
                    Facenook's{" "}
                    <a
                        href="#"
                        className="text-[#1877f2] no-underline hover:underline"
                    >
                        Terms
                    </a>
                    ,{" "}
                    <a
                        href="#"
                        className="text-[#1877f2] no-underline hover:underline"
                    >
                        Privacy Policy
                    </a>{" "}
                    and{" "}
                    <a
                        href="#"
                        className="text-[#1877f2] no-underline hover:underline"
                    >
                        Cookies Policy
                    </a>
                    .
                </p>
                <p className="text-xs text-gray-500 mt-3 leading-relaxed">
                    The{" "}
                    <a
                        href="#"
                        className="text-[#1877f2] no-underline hover:underline"
                    >
                        Privacy Policy
                    </a>{" "}
                    describes the ways we can use the information we collect
                    when you create an account. For example, we use this
                    information to provide, personalise and improve our
                    products, including ads.
                </p>

                <Button type="submit" variant="primary" className="mt-5">
                    Submit
                </Button>
                <Button
                    type="button"
                    variant="secondary"
                    className="mt-2.5"
                    onClick={() => navigate("/")}
                >
                    I already have an account
                </Button>
            </form>
        </>
    );
}
