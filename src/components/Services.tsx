import { FaMobileAlt, FaTools, FaWater, FaBatteryFull } from 'react-icons/fa'

const services = [
  {
    icon: <FaMobileAlt className="w-8 h-8" />,
    title: 'Замена экрана',
    description: 'Профессиональная замена дисплея с сохранением всех функций устройства'
  },
  {
    icon: <FaBatteryFull className="w-8 h-8" />,
    title: 'Замена батареи',
    description: 'Установка новой оригинальной батареи с гарантией емкости'
  },
  {
    icon: <FaWater className="w-8 h-8" />,
    title: 'Ремонт после воды',
    description: 'Восстановление телефона после попадания влаги'
  },
  {
    icon: <FaTools className="w-8 h-8" />,
    title: 'Другие поломки',
    description: 'Ремонт любой сложности с гарантией на работу'
  }
]

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
          Наши услуги
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-blue-600 mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 