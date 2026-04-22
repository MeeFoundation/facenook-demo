import { atomWithStorage } from "jotai/utils";

export type WalletType = "A" | "B" | "C";
export type DemoFlow = "1" | "2";

export const walletTypeAtom = atomWithStorage<WalletType>("demo_wallet_type", "A");
export const demoFlowAtom = atomWithStorage<DemoFlow>("demo_flow", "1");
