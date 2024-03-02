import { FaWhatsappSquare, FaPhoneSquare, FaEnvelopeSquare } from 'react-icons/fa'
const icons = [
  { icon: FaEnvelopeSquare, url: 'mailto:fisioluxury@gmail.com' },
  { icon: FaPhoneSquare, url: 'tel:34687130067' },
  {
    icon: FaWhatsappSquare,
    url: 'https://wa.me/34687130067/?text=Buenas%20tardes%2C%20quer%C3%ADa%20pedir%20una%20cita%20para%20el%20d%C3%ADa%E2%80%A6',
  },
]

import Activelink from '../Activelink/Activelink'

export function Footer() {
  return (
    <footer className="fixed inset-x-0 bottom-0 z-50 bg-white shadow-2xl shadow-black">
      <div className="mx-auto p-4">
        <div className="flex items-center justify-between">
          <span className="text-xs text-gray-500 sm:text-center md:text-sm">
            © 2024{' '}
            <Activelink href="/" className="text-gray-500 hover:text-gray-900">
              <a>Fisioluxury</a>
            </Activelink>
          </span>
          <div className="flex justify-center space-x-4 sm:space-x-6">
            {icons.map((Icon, i) => {
              return (
                <Activelink key={i} href={Icon.url} className="flex rounded-full text-gray-400 text-3xl">
                  <a>
                    <Icon.icon />
                  </a>
                </Activelink>
              )
            })}
          </div>
        </div>
      </div>
    </footer>
  )
}
