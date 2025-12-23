import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface SnowfallStore {
  isEnabled: boolean
  toggleSnowfall: () => void
}

export const useSnowfallStore = create<SnowfallStore>()(
  persist(
    (set) => ({
      isEnabled: true,
      toggleSnowfall: () => set((state) => ({ isEnabled: !state.isEnabled })),
    }),
    {
      name: 'snowfall-storage',
    }
  )
)
