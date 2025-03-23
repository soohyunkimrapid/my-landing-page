'use client'
import React from 'react'

interface HamburgerButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

function HamburgerButton({ isOpen, onClick }: HamburgerButtonProps) {
  return (
    <button
      onClick={onClick}
      className="p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 
        hover:bg-white/20 transition-all duration-200 group"
      aria-label="메뉴 열기/닫기"
    >
      <div className="w-6 h-5 relative flex flex-col justify-between">
        {/* 햄버거 아이콘 바 */}
        <span className={`
          w-full h-0.5 bg-white rounded-full transition-all duration-300
          ${isOpen ? 'rotate-45 translate-y-2' : ''}
        `}/>
        <span className={`
          w-full h-0.5 bg-white rounded-full transition-all duration-300
          ${isOpen ? 'opacity-0' : ''}
        `}/>
        <span className={`
          w-full h-0.5 bg-white rounded-full transition-all duration-300
          ${isOpen ? '-rotate-45 -translate-y-2' : ''}
        `}/>
      </div>
    </button>
  )
}

export default HamburgerButton