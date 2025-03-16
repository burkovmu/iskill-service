'use client'

import { useState, useRef } from 'react'
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
  const maxVisibleItems = 3; // Количество видимых элементов на десктопе
  const maxIndex = Math.max(0, reviews.length - maxVisibleItems);
  const containerRef = useRef<HTMLDivElement>(null);

  const nextSlide = () => {
    setCurrentIndex(prev => Math.min(prev + 1, maxIndex));
  };

  const prevSlide = () => {
    setCurrentIndex(prev => Math.max(prev - 1, 0));
  };

  // Определяем количество видимых элементов в зависимости от ширины экрана
  const getVisibleItems = () => {
    // На мобильных устройствах показываем по одному отзыву
    if (typeof window !== 'undefined' && window.innerWidth < 768) {
      return 1;
    }
    // На планшетах показываем по два отзыва
    if (typeof window !== 'undefined' && window.innerWidth < 1024) {
      return 2;
    }
    // На десктопе показываем по три отзыва
    return maxVisibleItems;
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
        
        <div className="relative px-4 md:px-10">
          {/* Кнопки навигации */}
          <div className="absolute top-1/2 -left-2 md:left-0 -translate-y-1/2 z-10">
            <button 
              onClick={prevSlide}
              disabled={currentIndex === 0}
              className={`w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center shadow-md bg-white ${
                currentIndex === 0 ? 'text-gray-300 cursor-not-allowed' : 'text-blue-600 hover:bg-blue-50'
              }`}
              aria-label="Предыдущий отзыв"
            >
              <FaChevronLeft className="w-3 h-3 md:w-4 md:h-4" />
            </button>
          </div>
          
          <div className="absolute top-1/2 -right-2 md:right-0 -translate-y-1/2 z-10">
            <button 
              onClick={nextSlide}
              disabled={currentIndex === maxIndex}
              className={`w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center shadow-md bg-white ${
                currentIndex === maxIndex ? 'text-gray-300 cursor-not-allowed' : 'text-blue-600 hover:bg-blue-50'
              }`}
              aria-label="Следующий отзыв"
            >
              <FaChevronRight className="w-3 h-3 md:w-4 md:h-4" />
            </button>
          </div>
          
          {/* Контейнер с отзывами */}
          <div className="overflow-hidden">
            <motion.div 
              ref={containerRef}
              className="flex gap-4 md:gap-6 lg:gap-8"
              animate={{ 
                x: typeof window !== 'undefined' 
                  ? window.innerWidth < 768 
                    ? `-${currentIndex * 100}%` 
                    : window.innerWidth < 1024 
                      ? `-${currentIndex * 50}%` 
                      : `-${currentIndex * (100/3)}%`
                  : `-${currentIndex * (100/3)}%`
              }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              {reviews.map((review, index) => (
                <motion.div
                  key={index}
                  className="flex-shrink-0 w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: Math.min(index * 0.1, 0.3) }}
                  viewport={{ once: true, margin: "-100px" }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-lg md:text-xl font-semibold text-gray-900">
                        {review.name}
                      </h3>
                      <p className="text-gray-500 text-xs md:text-sm">{review.date}</p>
                    </div>
                    <div className="flex text-yellow-400">
                      {[...Array(review.rating)].map((_, i) => (
                        <FaStar key={i} className="w-3 h-3 md:w-4 md:h-4" />
                      ))}
                      {[...Array(5 - review.rating)].map((_, i) => (
                        <FaStar key={i + review.rating} className="w-3 h-3 md:w-4 md:h-4 text-gray-200" />
                      ))}
                    </div>
                  </div>
                  
                  <p className="text-sm md:text-base text-gray-600 mb-4">{review.text}</p>
                  
                  <div className="flex flex-wrap gap-2 items-center text-xs md:text-sm text-gray-500">
                    <span className="px-2 py-1 bg-blue-50 rounded-full">
                      {review.device}
                    </span>
                    <span className="px-2 py-1 bg-green-50 rounded-full">
                      {review.service}
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
          
          {/* Индикаторы */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all ${
                  currentIndex === index ? 'bg-blue-600 scale-110' : 'bg-gray-300'
                }`}
                aria-label={`Перейти к отзыву ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 