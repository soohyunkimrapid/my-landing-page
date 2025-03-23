'use client'
import React, { useState } from 'react'

function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    experience: 'beginner'
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzyMXjrcNBxKA-MwMiyyY06O3bALLeILzYZngF49gYvqIyBoQ6FU5tzHebeXjFg2fU9nQ/exec'

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          timestamp: new Date().toISOString()
        })
      })

      // 폼 초기화
      setFormData({
        name: '',
        email: '',
        phone: '',
        experience: 'beginner'
      })

      alert('신청이 완료되었습니다! 입력하신 이메일로 확인 메일이 발송됩니다.')
    } catch (error) {
      console.error('Error:', error)
      alert('신청이 실패했어요! 다시 시도해주세요.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="py-20 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8">
            수강 신청하기
          </h2>
          
          <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-lg">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">이름</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-2 border rounded-lg"
                  required
                  disabled={isSubmitting}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">이메일</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-2 border rounded-lg"
                  required
                  disabled={isSubmitting}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">연락처</label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full px-4 py-2 border rounded-lg"
                  required
                  disabled={isSubmitting}
                  placeholder="010-0000-0000"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">개발 경험</label>
                <select
                  value={formData.experience}
                  onChange={(e) => setFormData({...formData, experience: e.target.value})}
                  className="w-full px-4 py-2 border rounded-lg"
                  disabled={isSubmitting}
                >
                  <option value="beginner">입문자</option>
                  <option value="intermediate">중급자</option>
                  <option value="advanced">고급자</option>
                </select>
              </div>
              
              <button
                type="submit"
                className={`w-full py-3 rounded-lg font-semibold transition-colors
                  ${isSubmitting 
                    ? 'bg-gray-400 cursor-not-allowed' 
                    : 'bg-blue-500 hover:bg-blue-600 text-white'}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? '제출 중...' : '신청하기'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default RegistrationForm
