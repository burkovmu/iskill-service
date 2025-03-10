'use client'

import { useState } from 'react'
import { FaChevronDown } from 'react-icons/fa'

const faqs = [
  {
    question: 'Сколько времени занимает ремонт iPhone?',
    answer: 'Большинство ремонтов выполняется в течение 1-2 часов. Точное время зависит от сложности работы и наличия запчастей. В некоторых случаях ремонт может занять до 24 часов.'
  },
  {
    question: 'Даёте ли вы гарантию на ремонт?',
    answer: 'Да, мы предоставляем гарантию до 1 года на все виды работ и установленные запчасти. Гарантийный срок зависит от типа ремонта.'
  },
  {
    question: 'Используете ли вы оригинальные запчасти?',
    answer: 'Да, мы работаем только с оригинальными запчастями Apple и качественными аналогами от проверенных производителей. Вы можете выбрать тип запчастей при оформлении ремонта.'
  },
  {
    question: 'Можно ли отремонтировать iPhone после воды?',
    answer: 'В большинстве случаев - да. Важно как можно скорее обратиться в сервис и не включать устройство. Мы проведем диагностику и примем меры по восстановлению телефона.'
  },
  {
    question: 'Нужно ли записываться на ремонт заранее?',
    answer: 'Предварительная запись желательна, но не обязательна. Вы можете приехать без записи, но в этом случае может потребоваться подождать.'
  },
  {
    question: 'Как производится оплата?',
    answer: 'Мы принимаем наличные, банковские карты и электронные платежи. Оплата производится только после успешного выполнения ремонта.'
  }
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
          Частые вопросы
        </h2>
        <p className="text-xl text-gray-600 text-center mb-12">
          Ответы на самые популярные вопросы о ремонте iPhone
        </p>
        
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                className="w-full px-6 py-4 flex items-center justify-between bg-white hover:bg-gray-50"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-lg font-semibold text-gray-900">
                  {faq.question}
                </span>
                <FaChevronDown
                  className={`text-gray-400 transition-transform ${
                    openIndex === index ? 'transform rotate-180' : ''
                  }`}
                />
              </button>
              
              {openIndex === index && (
                <div className="px-6 py-4 bg-gray-50">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 