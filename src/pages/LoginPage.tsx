import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAtomValue } from "jotai";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { SystemPopup } from "../components/SystemPopup";
import { walletTypeAtom } from "../store/demoConfig";

import logoIcon from "../assets/mee-logo.svg";
import heroImage from "../assets/login-hero.png";

interface LoginPageProps {
  mode?: "login" | "register";
}

export function LoginPage({ mode = "login" }: LoginPageProps) {
  const navigate = useNavigate();
  const walletType = useAtomValue(walletTypeAtom);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showSediPopup, setShowSediPopup] = useState(false);
  const [sediLoading, setSediLoading] = useState(false);

  const isRegister = mode === "register";
  const sediActive = walletType === "A" || walletType === "C";

  function handleSediLogin() {
    setSediLoading(true);
    setTimeout(() => navigate("/"), 1500);
  }

  return (
    <>
      <div className="flex flex-col md:flex-row min-h-screen md:h-screen overflow-hidden bg-white font-public-sans max-w-360 mx-auto w-full">
        <div className="md:flex-1 overflow-hidden flex flex-col pl-6 py-6 md:p-12 md:py-12">
          <div className="relative z-10 flex items-center gap-2 shrink-0">
            <div className="flex h-7.75 w-10 items-center justify-center">
              <img src={logoIcon} alt="" aria-hidden className="-rotate-90 h-10 w-8" />
            </div>
            <span className="font-semibold text-[30px] leading-10 tracking-[0.15px] text-[#1e293b]">
              Facenook
            </span>
          </div>

          <img src={heroImage} alt="" aria-hidden className="md:hidden w-full h-auto mt-4" />

          <div className="hidden md:flex md:max-h-210 flex-1 relative flex-col justify-end">
            <div className="absolute right-0 top-1/2 h-165.5 w-124.25 -translate-y-1/2 overflow-hidden">
              <img
                src={heroImage}
                alt=""
                aria-hidden
                className="absolute top-0 left-[-23.33%] h-full w-[133.15%] max-w-none"
              />
            </div>
            <div className="relative z-10 font-semibold text-[72px] leading-20 tracking-[0.36px] text-[#0f172a]">
              <div>Explore</div>
              <div>the</div>
              <div>things</div>
              <div><span className="text-[#1877f2]">you love</span>.</div>
            </div>
          </div>
        </div>

        <div className="flex w-full md:w-145 shrink-0 flex-col items-center justify-center border-t md:border-t-0 md:border-l border-[#cbd5e1] px-8 md:px-20 py-8">
          <div className="flex w-full flex-col gap-6">
            <h1 className="font-semibold text-2xl leading-8 tracking-[0.12px] text-[#0f172a]">
              {isRegister ? "Create a Facenook account" : "Log into Facenook"}
            </h1>

            {sediActive ? (
              <>
                {!isRegister && (
                  <Button
                    variant="sedi-primary"
                    onClick={handleSediLogin}
                    disabled={sediLoading}
                    className="flex items-center justify-center gap-2"
                  >
                    {sediLoading && (
                      <svg className="animate-spin size-4 shrink-0" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                    )}
                    {sediLoading ? "Logging in…" : "Log in with SEDI"}
                  </Button>
                )}

                {isRegister && (
                  <div className="flex flex-col gap-3">
                    <p className="text-xs font-normal leading-4 tracking-[0.06px] text-[#0f172a]">
                      By tapping <strong>Create an account with SEDI</strong>, you agree to create an account and to Facenook's{" "}
                      <strong><a href="#" className="text-[#1877f2]">Terms</a></strong>,{" "}
                      <strong><a href="#" className="text-[#1877f2]">Privacy Policy</a></strong> and{" "}
                      <strong><a href="#" className="text-[#1877f2]">Cookies Policy</a></strong>.
                      <br /><br />
                      The <strong><a href="#" className="text-[#1877f2]">Privacy Policy</a></strong> describes the ways we can use the information we collect when you create an account. For example, we use this information to provide, personalize and improve our products, including ads.
                    </p>
                    <Button variant="sedi-secondary" onClick={() => setShowSediPopup(true)}>
                      Create an account with SEDI
                    </Button>
                  </div>
                )}
              </>
            ) : (
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-3">
                  <Input
                    inputSize="md"
                    type="text"
                    placeholder="Email or mobile number"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <Input
                    inputSize="md"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <Button variant="mee-primary">Log in</Button>
                  <Button variant="mee-text">Forgot password?</Button>
                </div>

                {isRegister && (
                  <>
                    <hr className="border-[#cbd5e1]" />
                    <Button variant="mee-secondary" onClick={() => setShowSediPopup(true)}>
                      Create new account
                    </Button>
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {showSediPopup && (
        <SystemPopup
          sediId="1F26AD521903BD1053829FA7D92394889178937DBF"
          firstName="Alice"
          lastName="Walker"
          gender="female"
          onCancel={() => setShowSediPopup(false)}
          onSubmit={isRegister ? () => navigate("/") : () => setShowSediPopup(false)}
        />
      )}
    </>
  );
}
