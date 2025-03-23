'use client'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

// HamburgerButton 컴포넌트를 별도로 정의
const HamburgerButton = ({ isOpen, onClick }: { isOpen: boolean; onClick: () => void }) => {
  return (
    <button
      onClick={onClick}
      className="p-3 rounded-full bg-blue-500/10 backdrop-blur-md border border-blue-500/20 
        hover:bg-blue-500/20 transition-all duration-200 group"
      aria-label="메뉴 열기/닫기"
    >
      <div className="w-6 h-5 relative flex flex-col justify-between">
        <span className={`
          w-full h-0.5 bg-gray-600 rounded-full transition-all duration-300
          ${isOpen ? 'rotate-45 translate-y-2' : ''}
        `}/>
        <span className={`
          w-full h-0.5 bg-gray-600 rounded-full transition-all duration-300
          ${isOpen ? 'opacity-0' : ''}
        `}/>
        <span className={`
          w-full h-0.5 bg-gray-600 rounded-full transition-all duration-300
          ${isOpen ? '-rotate-45 -translate-y-2' : ''}
        `}/>
      </div>
    </button>
  )
}

// 메인 Header 컴포넌트
function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleScroll = (sectionId: string) => {
    setIsMenuOpen(false)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* 로고 */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="/rapidclasslogo.jpg"
                alt="RapidClass 로고"
                width={160}
                height={40}
                className="h-auto hover:opacity-90 transition-opacity"
                priority
              />
            </Link>
          </div>

          {/* 데스크톱 메뉴 */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => handleScroll('program')}
              className="text-gray-600 hover:text-gray-900"
            >
              프로그램
            </button>
            <button
              onClick={() => handleScroll('benefits')}
              className="text-gray-600 hover:text-gray-900"
            >
              수강혜택
            </button>
            <button
              onClick={() => handleScroll('instructor')}
              className="text-gray-600 hover:text-gray-900"
            >
              강사소개
            </button>
            <button
              onClick={() => handleScroll('faq')}
              className="text-gray-600 hover:text-gray-900"
            >
              자주묻는질문
            </button>
          </nav>

          {/* 모바일 햄버거 버튼 */}
          <div className="md:hidden">
            <HamburgerButton isOpen={isMenuOpen} onClick={() => setIsMenuOpen(!isMenuOpen)} />
          </div>
        </div>

        {/* 모바일 메뉴 */}
        {isMenuOpen && (
          <div className="md:hidden">
            <nav className="py-4 space-y-4">
              <button
                onClick={() => handleScroll('program')}
                className="block w-full text-left px-4 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100"
              >
                프로그램
              </button>
              <button
                onClick={() => handleScroll('benefits')}
                className="block w-full text-left px-4 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100"
              >
                수강혜택
              </button>
              <button
                onClick={() => handleScroll('instructor')}
                className="block w-full text-left px-4 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100"
              >
                강사소개
              </button>
              <button
                onClick={() => handleScroll('faq')}
                className="block w-full text-left px-4 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100"
              >
                자주묻는질문
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header