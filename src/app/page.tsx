'use client'

import { useEffect, useState } from 'react'
import Header from '@/sections/Header'
import Hero from '@/sections/Hero'
import Problems from '@/sections/Problems'
import Benefits from '@/sections/Benefits'
import Program from '@/sections/Program'
import Instructor from '@/sections/Instructor'
import RegistrationForm from '@/sections/RegistrationForm'
import FAQ from '@/sections/FAQ'
import Footer from '@/sections/Footer'

export default function Home() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null // 또는 로딩 상태를 보여줄 수 있습니다
  }

  return (
    <>
      <main>
        <Header />
        <Hero />
        <Problems />
        <Benefits />
        <Program />
        <Instructor />
        <RegistrationForm />
        <FAQ />
        <Footer />
      </main>
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Course",
            "name": "AI START 인공지능 개발자 양성 과정",
            "description": "인공지능 개발자가 되고 싶으신가요? AI START와 함께 실무 중심의 AI 개발 실력을 키워보세요.",
            "provider": {
              "@type": "Organization",
              "name": "AI START",
              "url": "https://aistart.store"
            }
          })
        }}
      />
    </>
  )
}
