'use client'
import React from 'react'

interface BenefitCardProps {
  title: string;
  description: string;
  icon: string;
}

const BenefitCard = ({ title, description, icon }: BenefitCardProps) => {
  return (
    <div className="group p-8 bg-white rounded-2xl transition-all duration-200 hover:shadow-lg border border-gray-100">
      <div className="text-3xl mb-6 transform transition-transform group-hover:scale-110">{icon}</div>
      <h3 className="text-xl font-bold mb-3 text-gray-900">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  )
}

function Benefits() {
  const benefits = [
    {
      icon: "🚀",
      title: "빠른 성장",
      description: "AI 도구를 활용한 효율적인 학습으로 개발 실력이 빠르게 향상됩니다."
    },
    {
      icon: "💡",
      title: "실전 경험",
      description: "현업에서 실제 사용되는 기술과 방법론을 직접 체험하며 배웁니다."
    },
    {
      icon: "🤝",
      title: "1:1 멘토링",
      description: "경험 많은 개발자와의 개별 멘토링으로 맞춤형 성장을 지원합니다."
    },
    {
      icon: "🌐",
      title: "커뮤니티",
      description: "함께 공부하는 동료들과의 네트워킹으로 더 넓은 시야를 갖게 됩니다."
    },
    {
      icon: "📈",
      title: "취업 연계",
      description: "교육 수료 후 취업 연계 및 커리어 상담을 제공합니다."
    },
    {
      icon: "🎓",
      title: "수료증 발급",
      description: "과정 완료 시 공신력 있는 수료증을 발급해 드립니다."
    }
  ]

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* 섹션 헤더 */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-blue-50 rounded-full mb-6">
              <span className="text-blue-600 font-medium">특별한 혜택</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              AI 시대에 맞는 새로운 개발자 교육
            </h2>
            <p className="text-lg text-gray-600">
              실무에 바로 적용할 수 있는 실전적인 교육과
              지속적인 성장을 위한 다양한 혜택을 제공합니다.
            </p>
          </div>

          {/* 혜택 카드 그리드 */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <BenefitCard
                key={index}
                icon={benefit.icon}
                title={benefit.title}
                description={benefit.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Benefits