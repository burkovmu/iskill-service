import { FaStar } from 'react-icons/fa'

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
  }
]

export default function Reviews() {
  return (
    <section id="reviews" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
          Отзывы наших клиентов
        </h2>
        <p className="text-xl text-gray-600 text-center mb-12">
          Более 5000 довольных клиентов доверили нам свои устройства
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
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
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="inline-flex items-center justify-center px-8 py-3 border border-blue-600 text-blue-600 rounded-full hover:bg-blue-600 hover:text-white transition-colors">
            Смотреть все отзывы
          </button>
        </div>
      </div>
    </section>
  )
} 