import { useNavigate } from "react-router-dom";

export function WelcomePage() {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex items-center gap-1.5 mt-2 mb-6">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <circle cx="6" cy="12" r="5" stroke="#1877f2" strokeWidth="2" />
          <circle cx="18" cy="12" r="5" stroke="#1877f2" strokeWidth="2" />
        </svg>
        <span className="text-[15px] font-semibold text-gray-800">Facenook</span>
      </div>

      <p className="text-sm text-gray-600 leading-relaxed mb-5">
        Your account has been created — now it will be easier than ever to share
        and connect with your friends and family.
      </p>

      <h2 className="text-sm font-bold text-gray-800 mb-4">
        Here are three ways for you to get the most out of it:
      </h2>

      <div className="flex flex-col gap-4 mb-8">
        <div className="flex items-start gap-3">
          <div className="mt-0.5 text-[#1877f2]">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <line x1="19" y1="8" x2="19" y2="14" />
              <line x1="22" y1="11" x2="16" y2="11" />
            </svg>
          </div>
          <div>
            <a href="#" className="text-sm font-semibold text-[#1877f2] hover:underline">Find People You Know</a>
            <p className="text-xs text-gray-500 mt-0.5">Find friends and family on Facenook using our simple tools.</p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <div className="mt-0.5 text-[#1877f2]">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
              <circle cx="8.5" cy="8.5" r="1.5" />
              <polyline points="21 15 16 10 5 21" />
            </svg>
          </div>
          <div>
            <a href="#" className="text-sm font-semibold text-[#1877f2] hover:underline">Upload a profile photo</a>
            <p className="text-xs text-gray-500 mt-0.5">Personalize your profile and help your friends recognize you.</p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <div className="mt-0.5 text-[#1877f2]">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
              <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
            </svg>
          </div>
          <div>
            <a href="#" className="text-sm font-semibold text-[#1877f2] hover:underline">Edit Your Profile</a>
            <p className="text-xs text-gray-500 mt-0.5">Describe personal interests, contact information, and affiliations.</p>
          </div>
        </div>
      </div>

      <button
        className="w-full py-3.5 bg-[#1877f2] text-white rounded-lg text-base font-semibold cursor-pointer hover:bg-[#166fe5] transition-colors"
        onClick={() => navigate("/feed")}
      >
        Get Started
      </button>
    </>
  );
}
