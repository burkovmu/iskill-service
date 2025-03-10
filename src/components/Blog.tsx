'use client'

import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { FaArrowRight, FaTimes, FaClock, FaUser } from 'react-icons/fa'
import { useState } from 'react'

const articles = [
  {
    title: 'Как продлить срок службы батареи iPhone',
    excerpt: 'Полезные советы по уходу за аккумулятором вашего iPhone, которые помогут сохранить его емкость на долгие годы.',
    content: `
      <h2>Оптимальный заряд батареи</h2>
      <p>Старайтесь поддерживать уровень заряда между 20% и 80%. Это оптимальный диапазон для литий-ионных аккумуляторов. Полная разрядка или постоянная зарядка до 100% может сократить срок службы батареи.</p>

      <h2>Температурный режим</h2>
      <p>Избегайте использования iPhone при экстремальных температурах. Оптимальная температура для работы устройства — от 16°C до 22°C. Особенно важно не заряжать телефон при высоких температурах.</p>

      <h2>Правильная зарядка</h2>
      <p>Используйте только оригинальные зарядные устройства Apple или сертифицированные аксессуары. Некачественные зарядки могут повредить батарею.</p>

      <h2>Обновление iOS</h2>
      <p>Регулярно обновляйте операционную систему. Apple часто оптимизирует управление энергопотреблением в новых версиях iOS.</p>

      <h2>Мониторинг состояния</h2>
      <p>Следите за состоянием батареи в настройках iPhone (Настройки → Батарея → Состояние аккумулятора). Если емкость упала ниже 80%, рекомендуется заменить батарею.</p>
    `,
    image: '/blog/battery-care.jpg',
    date: '20 марта 2024',
    readTime: '5 мин',
    author: 'Александр Петров',
    category: 'Советы'
  },
  {
    title: 'Что делать, если iPhone упал в воду',
    excerpt: 'Пошаговая инструкция по первой помощи вашему устройству после контакта с водой. Важные действия в первые минуты.',
    content: `
      <h2>Первые действия</h2>
      <p>Немедленно достаньте телефон из воды и выключите его, если он еще работает. Не пытайтесь включить устройство, если оно выключилось само.</p>

      <h2>Просушка устройства</h2>
      <p>1. Тщательно протрите телефон сухой мягкой тканью<br>
         2. Удалите воду из всех отверстий и разъемов<br>
         3. Не используйте фен или другие нагревательные приборы<br>
         4. Не кладите телефон в рис - это миф</p>

      <h2>Правильное хранение</h2>
      <p>Оставьте телефон в сухом, теплом месте с хорошей вентиляцией минимум на 48 часов. Можно использовать силикагель для лучшего поглощения влаги.</p>

      <h2>Обращение в сервис</h2>
      <p>Даже если телефон начал работать, рекомендуется обратиться в сервисный центр для профессиональной диагностики и очистки. Коррозия может проявиться позже.</p>
    `,
    image: '/blog/water-damage.jpg',
    date: '15 марта 2024',
    readTime: '7 мин',
    author: 'Мария Иванова',
    category: 'Ремонт'
  },
  {
    title: 'Как выбрать защитное стекло для iPhone',
    excerpt: 'Разбираемся в типах защитных стекол, их особенностях и как правильно выбрать подходящее именно для вашей модели.',
    content: `
      <h2>Типы защитных стекол</h2>
      <p>1. 2D стекла - базовая защита экрана<br>
         2. 3D стекла - полное покрытие экрана<br>
         3. Приватные стекла - с защитой от просмотра<br>
         4. Керамические стекла - максимальная прочность</p>

      <h2>На что обратить внимание</h2>
      <p>- Точность вырезов под динамики и камеры<br>
         - Олеофобное покрытие<br>
         - Толщина стекла<br>
         - Твердость по шкале Мооса</p>

      <h2>Правильная установка</h2>
      <p>Тщательно очистите экран перед установкой. Используйте комплектные салфетки и наклейки для удаления пыли. Выполняйте установку в помещении без пыли.</p>

      <h2>Рекомендации по использованию</h2>
      <p>Регулярно проверяйте состояние защитного стекла. При появлении сколов или трещин замените его, чтобы обеспечить максимальную защиту экрана.</p>
    `,
    image: '/blog/screen-protection.jpg',
    date: '10 марта 2024',
    readTime: '6 мин',
    author: 'Дмитрий Сидоров',
    category: 'Аксессуары'
  }
]

export default function Blog() {
  const [selectedArticle, setSelectedArticle] = useState<typeof articles[0] | null>(null)

  return (
    <>
      <section id="blog" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
            Полезные статьи
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12">
            Советы по уходу за iPhone и решению распространенных проблем
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <motion.article
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="relative h-48">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="px-3 py-1 bg-blue-600 text-white text-sm rounded-full">
                      {article.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-4 space-x-4">
                    <div className="flex items-center">
                      <FaUser className="w-4 h-4 mr-2" />
                      <span>{article.author}</span>
                    </div>
                    <div className="flex items-center">
                      <FaClock className="w-4 h-4 mr-2" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {article.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4">
                    {article.excerpt}
                  </p>
                  
                  <motion.button 
                    className="inline-flex items-center text-blue-600 hover:text-blue-700"
                    onClick={() => setSelectedArticle(article)}
                    whileHover={{ x: 5 }}
                  >
                    Читать далее
                    <FaArrowRight className="ml-2" />
                  </motion.button>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Модальное окно */}
      <AnimatePresence>
        {selectedArticle && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedArticle(null)}
          >
            <motion.div
              className="bg-white rounded-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={e => e.stopPropagation()}
            >
              <div className="relative">
                <div className="h-64 relative">
                  <Image
                    src={selectedArticle.image}
                    alt={selectedArticle.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <button
                    className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                    onClick={() => setSelectedArticle(null)}
                  >
                    <FaTimes />
                  </button>
                  <div className="absolute bottom-4 left-6 right-6 text-white">
                    <div className="flex items-center space-x-4 mb-2">
                      <span className="px-3 py-1 bg-blue-600 text-sm rounded-full">
                        {selectedArticle.category}
                      </span>
                      <span className="text-sm opacity-90">{selectedArticle.date}</span>
                    </div>
                    <h2 className="text-3xl font-bold">{selectedArticle.title}</h2>
                  </div>
                </div>
                <div className="p-6 md:p-8">
                  <div className="flex items-center text-sm text-gray-500 mb-6 space-x-4">
                    <div className="flex items-center">
                      <FaUser className="w-4 h-4 mr-2" />
                      <span>{selectedArticle.author}</span>
                    </div>
                    <div className="flex items-center">
                      <FaClock className="w-4 h-4 mr-2" />
                      <span>{selectedArticle.readTime} чтения</span>
                    </div>
                  </div>
                  <div 
                    className="prose prose-lg max-w-none"
                    dangerouslySetInnerHTML={{ __html: selectedArticle.content }}
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
} 