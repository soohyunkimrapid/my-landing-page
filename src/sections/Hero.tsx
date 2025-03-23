'use client'
import React from 'react'

// 디자인 시스템
const typography = {
  heading: {
    h1: 'text-5xl md:text-6xl lg:text-7xl font-bold',
    h2: 'text-4xl md:text-5xl font-bold',
    h3: 'text-3xl md:text-4xl font-semibold',
  },
  body: {
    large: 'text-xl md:text-2xl',
    base: 'text-base md:text-lg',
    small: 'text-sm',
  }
}

const visualElements = {
  gradients: {
    primary: 'bg-gradient-to-br from-blue-500 via-blue-600 to-purple-600',
    secondary: 'bg-gradient-to-br from-purple-500 via-purple-600 to-blue-600',
  },
  shadows: {
    sm: 'shadow-sm backdrop-blur-sm',
    md: 'shadow-md backdrop-blur-md',
    lg: 'shadow-lg backdrop-blur-lg',
  },
  animations: {
    hover: 'transition-all hover:scale-105',
    fade: 'transition-opacity duration-300',
  }
}

function Hero() {
  // 모바일에서는 비디오 대신 이미지 표시
  const isMobile = window.innerWidth < 768;

  return (
    <section className="relative w-full min-h-[100svh] overflow-hidden">
      {/* 배경 비디오 */}
      <div className="absolute inset-0 w-full h-full">
        {!isMobile ? (
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute w-full h-full object-cover"
            style={{
              filter: 'brightness(0.4) saturate(1.2)', // 밝기와 채도 조절
              transform: 'scale(1.1)', // 약간 확대
            }}
          >
            <source src="/aivideo.mp4" type="video/mp4" />
          </video>
        ) : (
          <img
            src="/fallback-image.jpg"
            alt="배경"
            className="absolute w-full h-full object-cover"
          />
        )}
        
        {/* 오버레이 그라데이션 */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-purple-900/80 to-blue-900/80">
          {/* 그리드 패턴 */}
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20"></div>
        </div>
      </div>

      {/* 부유하는 3D 요소들은 제거하거나 유지할 수 있습니다 */}
      
      {/* 메인 콘텐츠 */}
      <div className="relative container mx-auto px-4 py-16 md:py-32">
        <div className="max-w-5xl mx-auto text-center space-y-6 md:space-y-8">
          {/* 모집 배지 */}
          <div className="inline-block px-4 md:px-6 py-2 md:py-3 bg-white/10 border border-white/20 rounded-full backdrop-blur-md shadow-lg">
            <span className="text-sm md:text-base text-blue-300 font-semibold">
              <span className="inline-block w-2 h-2 bg-emerald-400 rounded-full mr-2 animate-pulse"></span>
              2024년 상반기 수강생 모집 중
            </span>
          </div>
          
          {/* 메인 제목 */}
          <h1 className={`${typography.heading.h1} !text-4xl md:!text-6xl lg:!text-7xl leading-tight mb-4 md:mb-6 px-4`}>
            <span className="block text-white">AI 시대의</span>
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
                실전 개발자로 성장
              </span>
              <span className="absolute inset-x-0 bottom-0 h-3 md:h-4 bg-gradient-to-r from-blue-400/30 to-purple-400/30 -z-10 blur-sm"></span>
            </span>
          </h1>
          
          {/* 부제목 */}
          <p className={`${typography.body.large} !text-lg md:!text-2xl text-gray-100 max-w-3xl mx-auto leading-relaxed px-4`}>
            AI 도구를 활용한 효율적인 개발 방법부터
            <br className="hidden md:block" />
            현업 프로젝트까지 완벽하게 준비하세요.
          </p>
          
          {/* CTA 버튼 */}
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center mt-8 md:mt-12 px-4">
            <button className={`
              w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 
              bg-gradient-to-r from-blue-500 to-blue-600
              hover:from-blue-600 hover:to-blue-700
              text-white rounded-xl font-semibold text-sm md:text-base
              shadow-lg shadow-blue-500/25
              ${visualElements.animations.hover}
              transform transition-all duration-300
            `}>
              무료 체험 신청하기
              <span className="ml-2">→</span>
            </button>
            <button className={`
              w-full sm:w-auto px-6 md:px-8 py-3 md:py-4
              bg-white/10 backdrop-blur-md
              border-2 border-white/20
              hover:bg-white/20
              text-white rounded-xl font-semibold text-sm md:text-base
              ${visualElements.shadows.md}
              transition-all duration-300
            `}>
              커리큘럼 둘러보기
            </button>
          </div>

          {/* 통계 - 모바일에서 2열 그리드 */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 pt-12 md:pt-20 px-4">
            {[
              { number: "2,400+", label: "수료생", prefix: "누적" },
              { number: "96%", label: "취업률", prefix: "평균" },
              { number: "200+", label: "협력사", prefix: "글로벌" },
              { number: "4.9/5", label: "만족도", prefix: "수강생" },
            ].map((stat, index) => (
              <div key={index} className="text-center p-4 md:p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="text-xs md:text-sm text-gray-400 mb-1">{stat.prefix}</div>
                <div className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
                  {stat.number}
                </div>
                <div className="text-sm md:text-base text-gray-300 mt-1 md:mt-2">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 통계 섹션 이후 */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none w-full">
        <svg
          className="relative block w-full h-[50px] md:h-[100px]"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-white/5 backdrop-blur-sm"
          ></path>
        </svg>
      </div>

      {/* 두 번째 웨이브 (더 부드러운 효과를 위해) */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none w-full">
        <svg
          className="relative block w-full h-[30px] md:h-[60px]"
          data-name="Layer 2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className="fill-white/10 backdrop-blur-md"
          ></path>
        </svg>
      </div>
    </section>
  )
}

export default Hero