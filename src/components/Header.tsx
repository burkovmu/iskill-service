'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaBars, FaTimes } from 'react-icons/fa'
import Link from 'next/link'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const offset = 80 // высота шапки
      const bodyRect = document.body.getBoundingClientRect().top
      const elementRect = element.getBoundingClientRect().top
      const elementPosition = elementRect - bodyRect
      const offsetPosition = elementPosition - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <motion.header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 backdrop-blur-lg shadow-lg' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Логотип */}
          <Link href="/">
            <motion.div 
              className="flex items-center cursor-pointer"
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-2xl font-bold text-blue-600">i</span>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
                Skill
              </span>
            </motion.div>
          </Link>

          {/* Десктопное меню */}
          <nav className="hidden md:flex items-center space-x-8">
            {[
              { title: 'Услуги', id: 'services' },
              { title: 'Преимущества', id: 'why-us' },
              { title: 'Цены', id: 'pricing' },
              { title: 'Отзывы', id: 'reviews' },
              { title: 'Контакты', id: 'contact' }
            ].map((item) => (
              <motion.button
                key={item.id}
                className="text-gray-600 hover:text-blue-600 font-medium"
                onClick={() => scrollToSection(item.id)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.title}
              </motion.button>
            ))}
          </nav>

          {/* Кнопка мобильного меню */}
          <button 
            className="md:hidden text-gray-600 hover:text-blue-600"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Мобильное меню */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <>
              {/* Затемнение фона */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
                onClick={() => setIsMobileMenuOpen(false)}
              />
              
              {/* Меню */}
              <motion.div
                initial={{ opacity: 0, x: '100%' }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: '100%' }}
                transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                className="fixed top-0 right-0 w-[80%] h-[100dvh] bg-white shadow-2xl z-50 overflow-y-auto"
              >
                <div className="sticky top-0 right-0 p-6 bg-white/80 backdrop-blur-sm border-b border-gray-100">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="absolute top-6 right-6 p-2 text-gray-600 hover:text-gray-900"
                  >
                    <FaTimes size={24} />
                  </motion.button>
                  <Link href="/" className="inline-block" onClick={() => setIsMobileMenuOpen(false)}>
                    <div className="flex items-center">
                      <span className="text-2xl font-bold text-blue-600">i</span>
                      <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
                        Skill
                      </span>
                    </div>
                  </Link>
                </div>

                <div className="p-6">
                  <nav className="flex flex-col space-y-6">
                    {[
                      { title: 'Услуги', id: 'services' },
                      { title: 'Преимущества', id: 'why-us' },
                      { title: 'Цены', id: 'pricing' },
                      { title: 'Отзывы', id: 'reviews' },
                      { title: 'Контакты', id: 'contact' }
                    ].map((item) => (
                      <motion.button
                        key={item.id}
                        onClick={() => {
                          scrollToSection(item.id)
                          setIsMobileMenuOpen(false)
                        }}
                        className="text-lg font-medium text-gray-600 hover:text-blue-600 transition-colors text-left"
                        whileHover={{ x: 10 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {item.title}
                      </motion.button>
                    ))}
                  </nav>

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="mt-8"
                  >
                    <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-6 text-white">
                      <h4 className="font-semibold mb-2">Нужна помощь?</h4>
                      <p className="text-sm mb-4">Позвоните нам, и мы проконсультируем вас по любому вопросу</p>
                      <a href="tel:+74951234567" className="inline-flex items-center justify-center w-full py-2 bg-white text-blue-600 rounded-lg font-medium">
                        +7 (495) 123-45-67
                      </a>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  )
} 