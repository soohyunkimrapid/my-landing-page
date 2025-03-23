'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/rapidclasslogo.jpg"
                alt="RapidClass 로고"
                width={160}
                height={40}
                className="h-auto brightness-0 invert hover:opacity-90 transition-opacity"
                priority
              />
            </Link>
            <p className="text-gray-400">
              최신 AI 기술을 활용한<br />
              실전 개발자 양성 프로그램
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">연락처</h3>
            <div className="text-gray-400">
              <p>이메일: info@example.com</p>
              <p>전화: 02-1234-5678</p>
              <p>주소: 서울시 강남구 테헤란로</p>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">소셜 미디어</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                Instagram
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                YouTube
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                Blog
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>© 2024 AI 개발자 교육. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
