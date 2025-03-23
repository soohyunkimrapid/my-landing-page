'use client'
import React from 'react'

interface CardProps {
  title: string;
  description: string;
  icon: string;
}

const Card = ({ title, description, icon }: CardProps) => {
  return (
    <div className="p-8 bg-white/10 backdrop-blur-md rounded-2xl transition-all duration-200 hover:bg-white/15 border border-white/20">
      <div className="text-2xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-3 text-white">{title}</h3>
      <p className="text-gray-300 leading-relaxed">{description}</p>
    </div>
  );
};

function Problems() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* 우주 배경 효과 */}
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              개발의 벽, AI가 무너뜨립니다
            </h2>
            <p className="text-lg text-gray-300">
              전통적인 개발 방식의 한계를 AI 기술로 극복하고,
              더 효율적인 개발 경험을 제공합니다.
            </p>
          </div>

          {/* 카드 그리드 */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* 문제점 섹션 */}
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-red-500/20 backdrop-blur-sm rounded-full border border-red-500/30">
                <span className="text-red-300 font-medium">기존 개발 방식의 한계</span>
              </div>
              
              <div className="grid gap-6">
                <Card 
                  icon="⏱️"
                  title="시간 소모적인 개발 과정"
                  description="반복적인 코드 작성과 끝없는 문서 검색으로 인한 비효율적인 개발 시간"
                />
                <Card 
                  icon="🔧"
                  title="복잡한 개발 환경 설정"
                  description="각종 도구와 환경 설정에 들어가는 불필요한 시간과 노력"
                />
                <Card 
                  icon="🚧"
                  title="가파른 학습 곡선"
                  description="새로운 기술을 익히는 데 필요한 과도한 시간과 에너지 소모"
                />
              </div>
            </div>

            {/* 해결책 섹션 */}
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-blue-500/20 backdrop-blur-sm rounded-full border border-blue-500/30">
                <span className="text-blue-300 font-medium">AI 기반 개발의 혁신</span>
              </div>
              
              <div className="grid gap-6">
                <Card 
                  icon="🚀"
                  title="AI 기반 코드 자동화"
                  description="반복적인 작업을 AI가 처리하여 핵심 개발에 집중할 수 있는 환경"
                />
                <Card 
                  icon="⚡"
                  title="스마트한 개발 환경"
                  description="AI가 최적의 설정을 제안하고 자동으로 환경을 구성"
                />
                <Card 
                  icon="📚"
                  title="직관적인 학습 경험"
                  description="AI의 맥락 기반 설명으로 새로운 기술을 빠르게 습득"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Problems