'use client'

import { useState } from 'react'

export function SparkleButtonComponent() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <button
      className="relative w-60 h-20 rounded-full flex justify-center items-center gap-3 bg-[#1C1A1C] cursor-pointer transition-all duration-450 ease-in-out overflow-hidden group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-450 ease-in-out ${
          isHovered ? 'bg-gradient-to-b from-[#A47CF3] to-[#683FEA]' : ''
        }`}
      ></div>
      <svg
        height="24"
        width="24"
        viewBox="0 0 24 24"
        className={`fill-[#AAAAAA] transition-all duration-800 ease-in-out group-hover:fill-white group-hover:scale-120 relative z-10 ${
          isHovered ? 'scale-120' : ''
        }`}
      >
        <path d="M10,21.236,6.755,14.745.264,11.5,6.755,8.255,10,1.764l3.245,6.491L19.736,11.5l-6.491,3.245ZM18,21l1.5,3L21,21l3-1.5L21,18l-1.5-3L18,18l-3,1.5ZM19.333,4.667,20.5,7l1.167-2.333L24,3.5,21.667,2.333,20.5,0,19.333,2.333,17,3.5Z" />
      </svg>
      <span className="font-semibold text-[#AAAAAA] text-base group-hover:text-white relative z-10">
        Generate
      </span>
      <div
        className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-450 ease-in-out ${
          isHovered
            ? 'shadow-[inset_0px_1px_0px_0px_rgba(255,255,255,0.4),inset_0px_-4px_0px_0px_rgba(0,0,0,0.2),0px_0px_0px_4px_rgba(255,255,255,0.2),0px_0px_180px_0px_#9917FF] translate-y-[-2px]'
            : ''
        }`}
      ></div>
    </button>
  )
}