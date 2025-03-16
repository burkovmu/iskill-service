'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { FaShieldAlt, FaClock, FaMedal, FaArrowRight } from 'react-icons/fa'
import { useState, useEffect } from 'react'
import OrderModal from './OrderModal'

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  // Определяем, является ли устройство мобильным
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    // Проверяем при загрузке
    checkIfMobile()
    
    // Проверяем при изменении размера окна
    window.addEventListener('resize', checkIfMobile)
    
    // Очищаем слушатель событий
    return () => window.removeEventListener('resize', checkIfMobile)
  }, [])

  const scrollToPricing = () => {
    const pricingSection = document.getElementById('pricing')
    if (pricingSection) {
      const offset = 80 // высота шапки
      const bodyRect = document.body.getBoundingClientRect().top
      const elementRect = pricingSection.getBoundingClientRect().top
      const elementPosition = elementRect - bodyRect
      const offsetPosition = elementPosition - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <>
      <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden">
        {/* Фоновый градиент */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50"></div>

        {/* Анимированные блобы */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-48 -left-48 w-72 md:w-96 h-72 md:h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
          <div className="absolute -top-48 -right-48 w-72 md:w-96 h-72 md:h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-48 left-1/2 w-72 md:w-96 h-72 md:h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
        </div>

        {/* Декоративная сетка */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>

        <div className="container mx-auto px-4 py-10 md:py-20 relative z-10">
          {/* Мобильная версия - изображение сверху, текст снизу */}
          {isMobile && (
            <div className="flex flex-col items-center">
              {/* iPhone изображение для мобильных */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mb-8 relative"
              >
                <div className="relative w-full max-w-[200px] mx-auto">
                  {/* Декоративные элементы */}
                  <div className="absolute top-0 -left-4 w-40 h-40 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                  <div className="absolute top-0 -right-4 w-40 h-40 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                  
                  <motion.div
                    animate={{ 
                      y: [0, -5, 0],
                      rotate: [0, 0.5, 0]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <Image
                      src="/iphone-hero.png"
                      alt="iPhone ремонт"
                      width={200}
                      height={300}
                      className="relative mx-auto w-[140px] h-auto drop-shadow-2xl"
                      priority
                    />
                  </motion.div>
                </div>
              </motion.div>
              
              {/* Текстовый блок для мобильных */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center"
              >
                <motion.span
                  className="inline-block text-blue-600 font-semibold mb-3 px-3 py-1 bg-blue-50 rounded-full shadow-sm text-sm"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  Сервисный центр Apple
                </motion.span>
                <motion.h1 
                  className="text-3xl font-bold text-gray-900 mb-4 leading-tight"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  Профессиональный{' '}
                  <span className="relative">
                    <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                      ремонт iPhone
                    </span>
                    <span className="absolute inset-x-0 bottom-0 h-2 bg-blue-200/30 -rotate-1"></span>
                  </span>{' '}
                  в Москве
                </motion.h1>
                <motion.p 
                  className="text-base text-gray-600 mb-6 leading-relaxed max-w-md mx-auto"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  Быстрый и качественный ремонт от сертифицированных мастеров с гарантией на все работы
                </motion.p>
                <motion.div
                  className="flex flex-col gap-3"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  <motion.button 
                    className="group relative inline-flex items-center justify-center px-6 py-3 rounded-xl text-base font-semibold text-white bg-gradient-to-r from-blue-600 to-blue-700 shadow-lg shadow-blue-500/30 hover:shadow-blue-500/40 transition-all duration-300 w-full"
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setIsModalOpen(true)}
                  >
                    <span className="relative z-10">Записаться на ремонт</span>
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-700 to-blue-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </motion.button>
                  <motion.button 
                    className="group relative inline-flex items-center justify-center px-6 py-3 rounded-xl text-base font-semibold text-blue-600 bg-white border-2 border-blue-100 hover:border-blue-200 transition-all duration-300 w-full"
                    whileTap={{ scale: 0.98 }}
                    onClick={scrollToPricing}
                  >
                    <span>Узнать стоимость</span>
                    <FaArrowRight className="ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                  </motion.button>
                </motion.div>
              </motion.div>
            </div>
          )}

          {/* Десктопная версия - текст слева, изображение справа */}
          {!isMobile && (
            <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
              {/* Левая колонка с текстом */}
              <div className="lg:w-1/2 max-w-2xl">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="relative"
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="absolute -top-4 -left-4 w-20 h-20 bg-blue-500/10 rounded-full blur-2xl"
                  />
                  <motion.span
                    className="inline-block text-blue-600 font-semibold mb-4 px-3 py-1 bg-blue-50 rounded-full shadow-sm text-sm sm:text-base"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  >
                    Сервисный центр Apple
                  </motion.span>
                  <motion.h1 
                    className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                  >
                    Профессиональный{' '}
                    <span className="relative">
                      <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                        ремонт iPhone
                      </span>
                      <span className="absolute inset-x-0 bottom-0 h-3 bg-blue-200/30 -rotate-1"></span>
                    </span>{' '}
                    в Москве
                  </motion.h1>
                  <motion.p 
                    className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  >
                    Быстрый и качественный ремонт от сертифицированных мастеров с гарантией на все работы
                  </motion.p>
                  <motion.div
                    className="flex flex-row gap-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                  >
                    <motion.button 
                      className="group relative inline-flex items-center justify-center px-8 py-4 rounded-xl text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-blue-700 shadow-lg shadow-blue-500/30 hover:shadow-blue-500/40 transition-all duration-300"
                      whileHover={{ scale: 1.02, translateY: -2 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setIsModalOpen(true)}
                    >
                      <span className="relative z-10">Записаться на ремонт</span>
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-700 to-blue-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </motion.button>
                    <motion.button 
                      className="group relative inline-flex items-center justify-center px-8 py-4 rounded-xl text-lg font-semibold text-blue-600 bg-white border-2 border-blue-100 hover:border-blue-200 transition-all duration-300"
                      whileHover={{ scale: 1.02, translateY: -2 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={scrollToPricing}
                    >
                      <span>Узнать стоимость</span>
                      <FaArrowRight className="ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                    </motion.button>
                  </motion.div>
                </motion.div>
              </div>

              {/* Правая колонка с изображением */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="lg:w-1/2 relative"
              >
                <div className="relative w-full max-w-lg mx-auto">
                  {/* Декоративные элементы */}
                  <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                  <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                  <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
                  
                  {/* iPhone изображение */}
                  <motion.div
                    className="relative px-8 md:px-0"
                    animate={{ 
                      y: [0, -10, 0],
                      rotate: [0, 1, 0]
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <Image
                      src="/iphone-hero.png"
                      alt="iPhone ремонт"
                      width={500}
                      height={600}
                      className="relative mx-auto sm:w-[320px] md:w-[400px] lg:w-[450px] h-auto max-w-xs lg:max-w-sm drop-shadow-2xl"
                      priority
                    />
                  </motion.div>
                </div>
              </motion.div>
            </div>
          )}
          
          {/* Карточки с преимуществами */}
          <motion.div 
            className="mt-12 md:mt-20 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.div 
              className="group relative bg-white/80 backdrop-blur-lg rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative">
                <FaShieldAlt className="w-8 h-8 md:w-10 md:h-10 text-blue-600 mb-3 md:mb-4" />
                <p className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">1 год</p>
                <p className="text-sm md:text-base text-gray-600">Гарантия на ремонт</p>
              </div>
            </motion.div>
            
            <motion.div 
              className="group relative bg-white/80 backdrop-blur-lg rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative">
                <FaClock className="w-8 h-8 md:w-10 md:h-10 text-blue-600 mb-3 md:mb-4" />
                <p className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">15 лет</p>
                <p className="text-sm md:text-base text-gray-600">Опыт работы</p>
              </div>
            </motion.div>
            
            <motion.div 
              className="group relative bg-white/80 backdrop-blur-lg rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-pink-50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative">
                <FaMedal className="w-8 h-8 md:w-10 md:h-10 text-blue-600 mb-3 md:mb-4" />
                <p className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">5000+</p>
                <p className="text-sm md:text-base text-gray-600">Довольных клиентов</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <OrderModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}

// Добавьте эти стили в ваш globals.css
/*
@keyframes blob {
  0% {
    transform: translate(0px, 0px) scale(1);
  }
  33% {
    transform: translate(30px, -50px) scale(1.1);
  }
  66% {
    transform: translate(-20px, 20px) scale(0.9);
  }
  100% {
    transform: translate(0px, 0px) scale(1);
  }
}

.animate-blob {
  animation: blob 7s infinite;
}

.animation-delay-2000 {
  animation-delay: 2s;
}

.animation-delay-4000 {
  animation-delay: 4s;
}
*/ 