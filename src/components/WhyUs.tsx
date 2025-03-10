import { FaClock, FaUserTie, FaTools, FaShieldAlt } from 'react-icons/fa'

const advantages = [
  {
    icon: <FaClock className="w-12 h-12" />,
    title: 'Быстрый ремонт',
    description: 'Большинство ремонтов выполняется в течение 1-2 часов'
  },
  {
    icon: <FaUserTie className="w-12 h-12" />,
    title: 'Опытные мастера',
    description: 'Сертифицированные специалисты с опытом более 5 лет'
  },
  {
    icon: <FaTools className="w-12 h-12" />,
    title: 'Оригинальные запчасти',
    description: 'Используем только качественные комплектующие'
  },
  {
    icon: <FaShieldAlt className="w-12 h-12" />,
    title: 'Гарантия на работы',
    description: 'Предоставляем гарантию на все виды ремонта до 1 года'
  }
]

export default function WhyUs() {
  return (
    <section id="why-us" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
          Почему выбирают нас
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {advantages.map((advantage, index) => (
            <div
              key={index}
              className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-blue-600 mb-4 flex justify-center">
                {advantage.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {advantage.title}
              </h3>
              <p className="text-gray-600">
                {advantage.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 