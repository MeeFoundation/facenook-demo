import { useEffect, useState } from "react";
import { Button } from "./Button";
import { Input } from "./Input";
import { SelectField } from "./SelectField";
import { PrivoBadge } from "./PrivoBadge";
import mWordmark from "../assets/mee-wordmark-m.svg";
import e1Wordmark from "../assets/mee-wordmark-e1.svg";
import e2Wordmark from "../assets/mee-wordmark-e2.svg";
import questionCircle from "../assets/icon-question-circle.svg";

interface SystemPopupProps {
  sediId?: string;
  firstName?: string;
  lastName?: string;
  gender?: string;
  onCancel: () => void;
  onSubmit: () => void;
}

function MeeWordmark() {
  return (
    <div className="relative h-5 w-17 shrink-0">
      <div className="absolute" style={{ inset: "0.5% 58.33% 0.76% 0" }}>
        <img src={mWordmark} alt="" className="absolute block inset-0 max-w-none size-full" />
      </div>
      <div className="absolute" style={{ inset: "0.72% 29.23% 1.14% 43.59%" }}>
        <img src={e1Wordmark} alt="" className="absolute block inset-0 max-w-none size-full" />
      </div>
      <div className="absolute" style={{ inset: "0.72% 0.13% 1.14% 72.69%" }}>
        <img src={e2Wordmark} alt="" className="absolute block inset-0 max-w-none size-full" />
      </div>
    </div>
  );
}

function FieldLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-1 px-0.5 h-4">
      {children}
    </div>
  );
}

export function SystemPopup({
  sediId = "",
  firstName = "",
  lastName = "",
  gender = "",
  onCancel,
  onSubmit,
}: SystemPopupProps) {
  const [selectedGender, setSelectedGender] = useState(gender);
  const [firstNameValue, setFirstNameValue] = useState(firstName);
  const [lastNameValue, setLastNameValue] = useState(lastName);
  const [isLoading, setIsLoading] = useState(false);

  function handleSubmit() {
    setIsLoading(true);
    setTimeout(() => onSubmit(), 1500);
  }

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onCancel();
      if (e.key === "Enter") onSubmit();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onCancel, onSubmit]);

  return (
    <div className="fixed inset-0 z-9999 flex items-center justify-center bg-black/40">
      <div className="bg-white rounded-xl w-126 max-h-[calc(100vh-32px)] overflow-y-auto font-public-sans">
        <div className="flex flex-col gap-6 px-8 py-8">

          {/* Header: logo + cancel */}
          <div className="flex items-center justify-between">
            <MeeWordmark />
            <Button variant="cancel" onClick={onCancel}>Cancel</Button>
          </div>

          {/* Title */}
          <h2 className="font-semibold text-xl leading-7.5 tracking-[0.1px] text-[#0f172a]">
            To create an account Facenook needs the following info
          </h2>

          {/* SEDI ID */}
          <div className="flex flex-col gap-0.5">
            <div className="flex flex-col gap-2">
              <FieldLabel>
                <span className="text-base font-normal leading-6 tracking-[0.08px] text-[#1e293b]">SEDI ID</span>
                <img src={questionCircle} alt="" aria-hidden className="size-4 shrink-0" />
              </FieldLabel>
              <Input value={sediId} readOnly className="overflow-hidden whitespace-nowrap text-ellipsis" />
            </div>
            <p className="text-xs font-normal leading-4 tracking-[0.06px] text-[#475569] px-0.5">
              A Private ID is a site-specific pseudonym — a unique identifier generated just for this site, so you can register without revealing your real identity or contact information.{" "}
              <a href="#" className="text-[#3b5b63] underline decoration-solid">Learn more</a>.
            </p>
          </div>

          {/* Age verification */}
          <div className="flex flex-col gap-1.5">
            <div className="flex items-center gap-1 px-0.5">
              <span className="text-base font-normal leading-6 tracking-[0.08px] text-[#1e293b]">Age ≥ 13 years old</span>
              <PrivoBadge />
              <img src={questionCircle} alt="" aria-hidden className="size-4 shrink-0" />
            </div>
            <p className="text-xs font-normal leading-4 tracking-[0.06px] text-[#475569] px-0.5">
              PRIVO verifies you meet the age requirement without revealing your date of birth.
            </p>
          </div>

          {/* First name + Last name */}
          <div className="flex gap-4">
            <div className="flex flex-col gap-2 flex-1 min-w-0">
              <FieldLabel>
                <span className="text-base font-normal leading-6 tracking-[0.08px] text-[#1e293b]">First name</span>
              </FieldLabel>
              <Input value={firstNameValue} onChange={e => setFirstNameValue(e.target.value)} />
            </div>
            <div className="flex flex-col gap-2 flex-1 min-w-0">
              <FieldLabel>
                <span className="text-base font-normal leading-6 tracking-[0.08px] text-[#1e293b]">Last name</span>
              </FieldLabel>
              <Input value={lastNameValue} onChange={e => setLastNameValue(e.target.value)} />
            </div>
          </div>

          {/* Gender */}
          <SelectField
            label="Gender"
            showTooltip
            value={selectedGender}
            onChange={setSelectedGender}
            options={[
              { value: "female", label: "Female" },
              { value: "male", label: "Male" },
              { value: "other", label: "Other" },
              { value: "prefer_not", label: "Prefer not to say" },
            ]}
          />

          {/* Submit */}
          <Button variant="sedi-gradient" onClick={handleSubmit} disabled={isLoading} className="flex items-center justify-center gap-2">
            {isLoading && (
              <svg className="animate-spin size-4 shrink-0" viewBox="0 0 24 24" fill="none">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
            )}
            {isLoading ? "Creating account…" : "Create account"}
          </Button>

        </div>
      </div>
    </div>
  );
}
