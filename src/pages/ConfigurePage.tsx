import { useAtom } from "jotai";
import { useNavigate } from "react-router-dom";
import { walletTypeAtom, demoFlowAtom } from "../store/demoConfig";
import type { WalletType, DemoFlow } from "../store/demoConfig";
import { Button } from "../components/Button";

import logoIcon from "../assets/mee-logo.svg";

const walletOptions: { value: WalletType; label: string; description: string }[] = [
  {
    value: "A",
    label: "Regular SEDI wallet – SEDI enabled",
    description: "Standard wallet with SEDI sign-in available and on by default",
  },
  {
    value: "B",
    label: "Regular SEDI wallet – SEDI disabled",
    description: "Standard wallet with SEDI sign-in turned off",
  },
  {
    value: "C",
    label: "Child SEDI wallet",
    description: "SEDI is always enabled and cannot be disabled",
  },
];

const flowOptions: { value: DemoFlow; label: string; description: string }[] = [
  { value: "1", label: "Create Account demo", description: "Walk through the account creation flow" },
  { value: "2", label: "Log in demo", description: "Walk through the sign-in flow" },
];

export function ConfigurePage() {
  const navigate = useNavigate();
  const [walletType, setWalletType] = useAtom(walletTypeAtom);
  const [demoFlow, setDemoFlow] = useAtom(demoFlowAtom);

  function handleStart() {
    navigate(demoFlow === "1" ? "/reg" : "/login");
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12 bg-[#f0f2f5] font-public-sans">
      <div className="w-full max-w-md">
        <div className="flex items-center gap-2 mb-8">
          <img src={logoIcon} alt="" aria-hidden className="-rotate-90 h-8 w-6" />
          <span className="font-semibold text-2xl text-[#1e293b]">Facenook</span>
          <span className="text-sm text-[#94a3b8] font-medium ml-1">· Demo Setup</span>
        </div>

        <div className="bg-white rounded-2xl border border-[#cbd5e1] overflow-hidden shadow-sm">
          <div className="p-6 border-b border-[#f1f5f9]">
            <p className="text-xs font-semibold text-[#94a3b8] uppercase tracking-wider mb-4">
              Configure SEDI Wallet
            </p>
            <div className="flex flex-col gap-2">
              {walletOptions.map((opt) => (
                <label
                  key={opt.value}
                  className={`flex items-start gap-3 p-3.5 rounded-xl border cursor-pointer transition-colors ${
                    walletType === opt.value
                      ? "border-[#436e77] bg-[#f0f7f8]"
                      : "border-[#e2e8f0] hover:border-[#94a3b8] hover:bg-[#f8fafc]"
                  }`}
                >
                  <input
                    type="radio"
                    name="wallet"
                    value={opt.value}
                    checked={walletType === opt.value}
                    onChange={() => setWalletType(opt.value)}
                    className="mt-0.5 accent-[#436e77]"
                  />
                  <div>
                    <div className="text-sm font-semibold text-[#0f172a] leading-5">
                      <span className="text-[#436e77] mr-1.5">({opt.value})</span>
                      {opt.label}
                    </div>
                    <div className="text-xs text-[#64748b] mt-0.5 leading-4">{opt.description}</div>
                  </div>
                </label>
              ))}
            </div>
          </div>

          <div className="p-6 border-b border-[#f1f5f9]">
            <p className="text-xs font-semibold text-[#94a3b8] uppercase tracking-wider mb-4">
              Demo Flow
            </p>
            <div className="flex flex-col gap-2">
              {flowOptions.map((opt) => (
                <label
                  key={opt.value}
                  className={`flex items-start gap-3 p-3.5 rounded-xl border cursor-pointer transition-colors ${
                    demoFlow === opt.value
                      ? "border-[#1877f2] bg-[#eff6ff]"
                      : "border-[#e2e8f0] hover:border-[#94a3b8] hover:bg-[#f8fafc]"
                  }`}
                >
                  <input
                    type="radio"
                    name="flow"
                    value={opt.value}
                    checked={demoFlow === opt.value}
                    onChange={() => setDemoFlow(opt.value)}
                    className="mt-0.5 accent-[#1877f2]"
                  />
                  <div>
                    <div className="text-sm font-semibold text-[#0f172a] leading-5">
                      <span className="text-[#1877f2] mr-1.5">({opt.value})</span>
                      {opt.label}
                    </div>
                    <div className="text-xs text-[#64748b] mt-0.5 leading-4">{opt.description}</div>
                  </div>
                </label>
              ))}
            </div>
          </div>

          <div className="p-6">
            <Button variant="sedi-gradient" onClick={handleStart}>
              Continue
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
