'use client'

import {ArrowUp} from 'lucide-react'

export const ScrollToTop = () => {
  return (
    <button
      onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
      className="bg-muted/50 group flex h-11 w-11 items-center justify-center rounded-full border transition-all hover:border-emerald-500/50 hover:bg-emerald-500/10 hover:text-emerald-600"
      aria-label="Back to top"
    >
      <ArrowUp className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
    </button>
  )
}
