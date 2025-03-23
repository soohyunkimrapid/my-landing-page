'use client'
import React from 'react'

function Program() {
  const programs = [
    {
      icon: "📚",
      title: "기초 프로그래밍",
      duration: "4주",
      description: "프로그래밍의 기본 개념과 AI 도구 활용법을 배웁니다.",
      includes: ["기초 문법", "개발 환경 설정", "AI 도구 활용법"]
    },
    {
      icon: "💻",
      title: "실전 프로젝트",
      duration: "8주",
      description: "실제 프로젝트를 통해 개발 경험을 쌓습니다.",
      includes: ["팀 프로젝트", "코드 리뷰", "실무 기술 스택"]
    },
    {
      icon: "🎯",
      title: "취업 준비",
      duration: "4주",
      description: "포트폴리오 준비와 면접 대비를 진행합니다.",
      includes: ["이력서 작성", "모의 면접", "포트폴리오 리뷰"]
    }
  ]

  return (
    <section className="relative py-24 overflow-hidden">
      {/* 배경 그라데이션 */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
        {/* 그리드 패턴 */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        
        {/* 부유하는 요소들 */}
        <div className="absolute right-0 top-1/4 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute left-0 bottom-1/4 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      <div className="relative container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* 섹션 헤더 */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 border border-white/20 rounded-full backdrop-blur-md mb-6">
              <span className="text-blue-300 font-medium">커리큘럼</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              체계적인 교육 과정
            </h2>
            <p className="text-lg text-gray-300">
              기초부터 실전까지, 탄탄한 커리큘럼으로
              실무형 개발자로 성장할 수 있습니다.
            </p>
          </div>

          {/* 프로그램 카드 */}
          <div className="grid md:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <div key={index} className="group bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-2xl transition-all duration-300 hover:bg-white/15">
                <div className="text-4xl mb-6 transform transition-transform group-hover:scale-110">
                  {program.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">{program.title}</h3>
                <div className="inline-block px-3 py-1 bg-blue-500/20 border border-blue-500/30 rounded-full text-blue-300 text-sm font-medium mb-4">
                  {program.duration}
                </div>
                <p className="text-gray-300 mb-6">{program.description}</p>
                <ul className="space-y-3">
                  {program.includes.map((item, i) => (
                    <li key={i} className="flex items-center text-gray-300">
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Program
