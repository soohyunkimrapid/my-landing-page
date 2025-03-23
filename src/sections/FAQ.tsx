'use client'
import React, { useState } from 'react'

interface FAQItemProps {
  question: string
  answer: string
}

const FAQItem = ({ question, answer }: FAQItemProps) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-b">
      <button
        className="w-full py-4 px-4 text-left flex justify-between items-center cursor-pointer 
        hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-all duration-200 
        -mx-4 hover:shadow-sm group"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-medium flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
          {question}
        </span>
        <span className="text-xl text-gray-400 group-hover:text-blue-500 transition-colors duration-200">
          {isOpen ? '−' : '+'}
        </span>
      </button>
      
      {isOpen && (
        <div className="pb-4 text-gray-600 pl-6">
          {answer}
        </div>
      )}
    </div>
  )
}

function FAQ() {
  const faqs = [
    {
      question: "수업은 어떤 방식으로 진행되나요?",
      answer: "실시간 온라인 강의와 오프라인 멘토링을 병행하여 진행됩니다."
    },
    {
      question: "개발 경험이 없어도 수강할 수 있나요?",
      answer: "기초부터 차근차근 배우기 때문에 경험이 없으셔도 수강 가능합니다."
    },
    {
      question: "수강 기간은 어떻게 되나요?",
      answer: "총 16주 과정으로, 기초 4주, 실전 8주, 취업 준비 4주로 구성됩니다."
    },
    {
      question: "수료 후 취업 지원이 있나요?",
      answer: "네, 수료생을 위한 채용 연계 및 취업 컨설팅을 제공합니다."
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            자주 묻는 질문
          </h2>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQ
