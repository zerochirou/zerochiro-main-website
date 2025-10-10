"use client";

import { create } from "zustand"

interface Personality {
    personality: boolean,
    setPersonality: () => void
}

export const usePersonality = create<Personality>((set) => ({
    personality: true,
    setPersonality: () => set((state) => ({ personality: !state.personality })),
}))