'use client'
import React from 'react'

function Instructor() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* 섹션 헤더 */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-blue-50 rounded-full mb-6">
              <span className="text-blue-600 font-medium">강사 소개</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              현업 개발자와 함께하는 실전 교육
            </h2>
            <p className="text-lg text-gray-600">
              실무 경험이 풍부한 현업 개발자가 직접 강의하며,
              실전에서 필요한 노하우를 전수합니다.
            </p>
          </div>
          
          {/* 강사 프로필 카드 */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100">
              <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                <div className="w-48 h-48 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl overflow-hidden">
                  {/* 강사 이미지가 있다면 여기에 추가 */}
                  <div className="w-full h-full bg-white/10 backdrop-blur-sm"></div>
                </div>
                
                <div className="flex-1 text-center md:text-left">
                  <div className="inline-flex items-center px-4 py-2 bg-blue-50 rounded-full mb-4">
                    <span className="text-blue-600 font-medium">Lead Instructor</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-gray-900">
                    김수현 선임 개발자
                  </h3>
                  <p className="text-blue-600 font-medium mb-6">
                    10년차 프론트엔드 개발자
                  </p>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                      대규모 서비스 개발 경험
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                      AI 도구 활용 전문가
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                      다수의 개발자 교육 진행
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Instructor
