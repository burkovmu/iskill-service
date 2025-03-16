'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaStar, FaQuoteLeft } from 'react-icons/fa'

const reviews = [
  {
    name: 'Анна Смирнова',
    date: '15.03.2024',
    rating: 5,
    text: 'Отличный сервис! Меняли экран на iPhone 13 Pro. Сделали быстро и качественно, телефон как новый. Очень довольна результатом.',
    device: 'iPhone 13 Pro',
    service: 'Замена экрана'
  },
  {
    name: 'Дмитрий Петров',
    date: '10.03.2024',
    rating: 5,
    text: 'Спасибо за оперативный ремонт! Утопил телефон, думал всё - придется новый покупать. Но ребята восстановили, работает отлично уже месяц.',
    device: 'iPhone 12',
    service: 'Ремонт после воды'
  },
  {
    name: 'Елена Козлова',
    date: '05.03.2024',
    rating: 5,
    text: 'Меняла батарею на iPhone 11. Сделали при мне за час, дали гарантию. Телефон теперь держит заряд как новый.',
    device: 'iPhone 11',
    service: 'Замена батареи'
  },
  {
    name: 'Алексей Иванов',
    date: '28.02.2024',
    rating: 5,
    text: 'Обратился с разбитым MacBook Pro. Заменили экран и клавиатуру. Все работает идеально, цена оказалась ниже, чем в других сервисах.',
    device: 'MacBook Pro',
    service: 'Замена экрана и клавиатуры'
  },
  {
    name: 'Мария Соколова',
    date: '20.02.2024',
    rating: 4,
    text: 'Хороший сервис, починили iPad быстро. Единственное - пришлось подождать запчасти пару дней, но результат того стоил.',
    device: 'iPad Pro',
    service: 'Замена разъема'
  },
  {
    name: 'Сергей Николаев',
    date: '15.02.2024',
    rating: 5,
    text: 'Отдал в ремонт iPhone 14 Pro с разбитой задней крышкой. Сделали за день, выглядит как новый. Рекомендую!',
    device: 'iPhone 14 Pro',
    service: 'Замена задней крышки'
  }
]

export default function Reviews() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const handleDotClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <section id="reviews" className="py-20 relative overflow-hidden">
      {/* Фоновый градиент */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-blue-50"></div>
      
      {/* Декоративные элементы */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
      <div className="absolute bottom-20 right-10 w-64 h-64 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Отзывы наших клиентов
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Более 5000 довольных клиентов доверили нам свои устройства
          </motion.p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Основной слайдер */}
          <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="absolute top-6 left-6 text-blue-100 opacity-50">
              <FaQuoteLeft className="w-16 h-16" />
            </div>
            
            <div className="min-h-[320px] md:min-h-[280px] p-8 md:p-12">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="flex flex-col h-full"
                >
                  <div className="flex flex-col md:flex-row md:items-center mb-6 gap-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900">
                        {reviews[activeIndex].name}
                      </h3>
                      <p className="text-gray-500 text-sm">{reviews[activeIndex].date}</p>
                    </div>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <FaStar
                          key={i}
                          className={`w-5 h-5 ${
                            i < reviews[activeIndex].rating
                              ? "text-yellow-400"
                              : "text-gray-200"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  
                  <p className="text-gray-600 text-lg mb-6 flex-grow">
                    "{reviews[activeIndex].text}"
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-medium">
                      {reviews[activeIndex].device}
                    </span>
                    <span className="px-3 py-1 bg-green-50 text-green-600 rounded-full text-sm font-medium">
                      {reviews[activeIndex].service}
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
            
            {/* Навигация */}
            <div className="bg-gray-50 p-4 flex items-center justify-between">
              <button
                onClick={handlePrev}
                className="w-10 h-10 rounded-full bg-white shadow flex items-center justify-center text-blue-600 hover:bg-blue-50 transition-colors"
                aria-label="Предыдущий отзыв"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </button>
              
              <div className="flex space-x-2">
                {reviews.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => handleDotClick(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-all ${
                      activeIndex === index
                        ? "bg-blue-600 w-6"
                        : "bg-gray-300 hover:bg-gray-400"
                    }`}
                    aria-label={`Перейти к отзыву ${index + 1}`}
                  />
                ))}
              </div>
              
              <button
                onClick={handleNext}
                className="w-10 h-10 rounded-full bg-white shadow flex items-center justify-center text-blue-600 hover:bg-blue-50 transition-colors"
                aria-label="Следующий отзыв"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
          
          {/* Миниатюры отзывов (только для десктопа) */}
          <div className="hidden lg:grid grid-cols-3 gap-6 mt-8">
            {[0, 1, 2].map((index) => (
              <motion.button
                key={index}
                className={`text-left p-4 rounded-xl transition-all ${
                  activeIndex === index
                    ? "bg-white shadow-lg scale-105"
                    : "bg-white/50 hover:bg-white hover:shadow"
                }`}
                onClick={() => handleDotClick(index)}
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="flex items-center mb-2">
                  <h4 className="font-medium text-gray-900 mr-2">
                    {reviews[index].name}
                  </h4>
                  <div className="flex">
                    {[...Array(reviews[index].rating)].map((_, i) => (
                      <FaStar key={i} className="w-3 h-3 text-yellow-400" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 text-sm line-clamp-2">
                  {reviews[index].text}
                </p>
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 