import { useState } from 'react'
import Image from 'next/legacy/image'

import Activelink from '../Activelink/Activelink'

import Links from './config/Links'

const NavBar = () => {
  const [section, setSection] = useState('inicio')
  const scrollToNode = (node) => {
    document.getElementById(node).scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <div className="shadow-gray fixed inset-x-0 top-0 z-50 bg-white p-0 shadow-md">
        <div className="flex items-center justify-between border-b-2 border-gray-100 px-2 sm:px-4 md:space-x-10">
          <div className="my-4 flex justify-start lg:w-0 lg:flex-1">
            <Activelink href="/" className="flex items-center justify-between space-x-2">
              <a>
                <div className="flex h-auto w-16 overflow-hidden rounded-full md:w-32">
                  <Image src="/images/fisioluxury/cabecera.jpg" alt="" width={497} height={194} />
                </div>
              </a>
            </Activelink>
          </div>
          <nav className="mx-0 flex md:space-x-4">
            {Links.map((e, i) => (
              <button
                onClick={() => {
                  scrollToNode(e.name)
                  setSection(e.name)
                }}
                key={i}
                className={`bg-transparent text-xs text-gray-500 hover:text-gray-900 sm:px-2 px-0.5 sm:text-sm ${
                  e.name === section ? 'text-gray-900' : 'text-gray-500'
                }`}
              >
                {e.name}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </>
  )
}

export default NavBar
