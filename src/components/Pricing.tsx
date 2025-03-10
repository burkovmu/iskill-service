'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { FaApple, FaMobileAlt, FaTabletAlt, FaLaptop } from 'react-icons/fa'
import OrderModal from './OrderModal'

const priceList = {
  iphone: [
    {
      model: 'iPhone 16 Pro/Pro Max',
      services: [
        { name: 'Замена экрана', price: '44900' },
        { name: 'Замена батареи', price: '9900' },
        { name: 'Замена задней крышки', price: '21900' }
      ]
    },
    {
      model: 'iPhone 16/16 Plus',
      services: [
        { name: 'Замена экрана', price: '39900' },
        { name: 'Замена батареи', price: '8900' },
        { name: 'Замена задней крышки', price: '18900' }
      ]
    },
    {
      model: 'iPhone 15 Pro/Pro Max',
      services: [
        { name: 'Замена экрана', price: '39900' },
        { name: 'Замена батареи', price: '8900' },
        { name: 'Замена задней крышки', price: '19900' }
      ]
    },
    {
      model: 'iPhone 15/15 Plus',
      services: [
        { name: 'Замена экрана', price: '34900' },
        { name: 'Замена батареи', price: '7900' },
        { name: 'Замена задней крышки', price: '16900' }
      ]
    },
    {
      model: 'iPhone 14 Pro/Pro Max',
      services: [
        { name: 'Замена экрана', price: '29900' },
        { name: 'Замена батареи', price: '6900' },
        { name: 'Замена задней крышки', price: '15900' }
      ]
    },
    {
      model: 'iPhone 14/14 Plus',
      services: [
        { name: 'Замена экрана', price: '24900' },
        { name: 'Замена батареи', price: '6500' },
        { name: 'Замена задней крышки', price: '14900' }
      ]
    },
    {
      model: 'iPhone 13 Pro/Pro Max',
      services: [
        { name: 'Замена экрана', price: '24900' },
        { name: 'Замена батареи', price: '5900' },
        { name: 'Замена задней крышки', price: '13900' }
      ]
    },
    {
      model: 'iPhone 13/13 mini',
      services: [
        { name: 'Замена экрана', price: '21900' },
        { name: 'Замена батареи', price: '5500' },
        { name: 'Замена задней крышки', price: '12900' }
      ]
    },
    {
      model: 'iPhone 12 Pro/Pro Max',
      services: [
        { name: 'Замена экрана', price: '19900' },
        { name: 'Замена батареи', price: '4900' },
        { name: 'Замена задней крышки', price: '11900' }
      ]
    },
    {
      model: 'iPhone 12/12 mini',
      services: [
        { name: 'Замена экрана', price: '17900' },
        { name: 'Замена батареи', price: '4500' },
        { name: 'Замена задней крышки', price: '10900' }
      ]
    },
    {
      model: 'iPhone 11 Pro/Pro Max',
      services: [
        { name: 'Замена экрана', price: '16900' },
        { name: 'Замена батареи', price: '4500' },
        { name: 'Замена задней крышки', price: '9900' }
      ]
    },
    {
      model: 'iPhone 11',
      services: [
        { name: 'Замена экрана', price: '14900' },
        { name: 'Замена батареи', price: '4000' },
        { name: 'Замена задней крышки', price: '8900' }
      ]
    }
  ],
  macbook: [
    {
      model: 'MacBook Pro 14"/16"',
      services: [
        { name: 'Замена экрана', price: '59900' },
        { name: 'Замена клавиатуры', price: '19900' },
        { name: 'Замена батареи', price: '14900' },
        { name: 'Чистка от пыли', price: '4900' }
      ]
    },
    {
      model: 'MacBook Air M1/M2',
      services: [
        { name: 'Замена экрана', price: '49900' },
        { name: 'Замена клавиатуры', price: '16900' },
        { name: 'Замена батареи', price: '12900' },
        { name: 'Чистка от пыли', price: '4900' }
      ]
    },
    {
      model: 'MacBook Pro 13"',
      services: [
        { name: 'Замена экрана', price: '44900' },
        { name: 'Замена клавиатуры', price: '14900' },
        { name: 'Замена батареи', price: '11900' },
        { name: 'Чистка от пыли', price: '4900' }
      ]
    }
  ],
  ipad: [
    {
      model: 'iPad Pro 12.9"',
      services: [
        { name: 'Замена экрана', price: '34900' },
        { name: 'Замена батареи', price: '9900' },
        { name: 'Замена разъема', price: '6900' }
      ]
    },
    {
      model: 'iPad Pro 11"',
      services: [
        { name: 'Замена экрана', price: '29900' },
        { name: 'Замена батареи', price: '8900' },
        { name: 'Замена разъема', price: '6900' }
      ]
    },
    {
      model: 'iPad Air',
      services: [
        { name: 'Замена экрана', price: '24900' },
        { name: 'Замена батареи', price: '7900' },
        { name: 'Замена разъема', price: '5900' }
      ]
    }
  ]
}

type DeviceCategory = 'iphone' | 'macbook' | 'ipad'

export default function Pricing() {
  const [activeCategory, setActiveCategory] = useState<DeviceCategory>('iphone')
  const [isModalOpen, setIsModalOpen] = useState(false)

  const categories = [
    { id: 'iphone', name: 'iPhone', icon: FaMobileAlt },
    { id: 'macbook', name: 'MacBook', icon: FaLaptop },
    { id: 'ipad', name: 'iPad', icon: FaTabletAlt }
  ]

  return (
    <>
      <section id="pricing" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
            Цены на ремонт
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12">
            Работаем с любыми моделями устройств Apple, включая последние
          </p>

          {/* Переключатель категорий */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex p-2 bg-gray-100 rounded-xl">
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  className={`flex items-center px-6 py-3 rounded-lg space-x-2 ${
                    activeCategory === category.id
                      ? 'bg-white text-blue-600 shadow-md'
                      : 'text-gray-600 hover:text-blue-600'
                  }`}
                  onClick={() => setActiveCategory(category.id as DeviceCategory)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <category.icon className="w-5 h-5" />
                  <span>{category.name}</span>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Карточки с ценами */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {priceList[activeCategory].map((item, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="bg-gradient-to-r from-blue-600 to-blue-700 py-4">
                  <h3 className="text-xl font-semibold text-white text-center">
                    {item.model}
                  </h3>
                </div>
                <div className="p-6">
                  {item.services.map((service, serviceIndex) => (
                    <div
                      key={serviceIndex}
                      className="flex justify-between items-center py-3 border-b border-gray-100 last:border-0"
                    >
                      <span className="text-gray-600">{service.name}</span>
                      <span className="font-semibold text-gray-900">
                        {service.price} ₽
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="text-center mt-12 space-y-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-600">
              * Окончательная стоимость ремонта определяется после диагностики
            </p>
            <p className="text-gray-600">
              * Для других моделей цены уточняйте у менеджера
            </p>
            <motion.button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl font-semibold shadow-lg shadow-blue-500/30 hover:shadow-blue-500/40 transition-all mt-4"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Узнать стоимость ремонта
            </motion.button>
          </motion.div>
        </div>
      </section>

      <OrderModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
} 