'use client'

import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa'

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
  const [currentIndex, setCurrentIndex] = useState(0);
  const maxIndex = Math.max(0, reviews.length - 3);
  const containerRef = useRef<HTMLDivElement>(null);

  const nextSlide = () => {
    setCurrentIndex(prev => Math.min(prev + 1, maxIndex));
  };

  const prevSlide = () => {
    setCurrentIndex(prev => Math.max(prev - 1, 0));
  };

  return (
    <section id="reviews" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
          Отзывы наших клиентов
        </h2>
        <p className="text-xl text-gray-600 text-center mb-12">
          Более 5000 довольных клиентов доверили нам свои устройства
        </p>
        
        <div className="relative">
          {/* Кнопки навигации */}
          <div className="absolute top-1/2 -left-4 -translate-y-1/2 z-10 hidden md:block">
            <button 
              onClick={prevSlide}
              disabled={currentIndex === 0}
              className={`w-10 h-10 rounded-full flex items-center justify-center shadow-md bg-white ${
                currentIndex === 0 ? 'text-gray-300 cursor-not-allowed' : 'text-blue-600 hover:bg-blue-50'
              }`}
            >
              <FaChevronLeft />
            </button>
          </div>
          
          <div className="absolute top-1/2 -right-4 -translate-y-1/2 z-10 hidden md:block">
            <button 
              onClick={nextSlide}
              disabled={currentIndex === maxIndex}
              className={`w-10 h-10 rounded-full flex items-center justify-center shadow-md bg-white ${
                currentIndex === maxIndex ? 'text-gray-300 cursor-not-allowed' : 'text-blue-600 hover:bg-blue-50'
              }`}
            >
              <FaChevronRight />
            </button>
          </div>
          
          {/* Контейнер с отзывами */}
          <div className="overflow-hidden">
            <motion.div 
              ref={containerRef}
              className="flex gap-8"
              animate={{ x: `-${currentIndex * 33.33}%` }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              {reviews.map((review, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow min-w-[100%] md:min-w-[calc(33.33%-1rem)]"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">
                        {review.name}
                      </h3>
                      <p className="text-gray-500 text-sm">{review.date}</p>
                    </div>
                    <div className="flex text-yellow-400">
                      {[...Array(review.rating)].map((_, i) => (
                        <FaStar key={i} />
                      ))}
                      {[...Array(5 - review.rating)].map((_, i) => (
                        <FaStar key={i + review.rating} className="text-gray-200" />
                      ))}
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{review.text}</p>
                  
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <span className="px-3 py-1 bg-blue-50 rounded-full">
                      {review.device}
                    </span>
                    <span className="px-3 py-1 bg-green-50 rounded-full">
                      {review.service}
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
          
          {/* Индикаторы для мобильной версии */}
          <div className="flex justify-center mt-8 space-x-2 md:hidden">
            {Array.from({ length: reviews.length }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full ${
                  currentIndex === index ? 'bg-blue-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 