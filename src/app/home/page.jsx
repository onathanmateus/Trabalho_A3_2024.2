'use client'

import React from 'react'
import Image from 'next/image'

import feeds2 from '../../../public/feeds2.png'
import iphone from '../../../public/Iphone.png'

export default function Home() {
  return (
    <>
      <div className="m-0 flex h-screen w-screen items-center justify-center bg-[#EAF9E4] p-0">
        <div className="mb-8 mt-4 flex justify-center">
          <Image src={feeds2} alt="Logo" width={350} height={350} priority />
        </div>
        <div className="flex flex-grow items-center justify-center"></div>
        <div className="mb-8 mt-4 flex justify-center">
          <Image src={iphone} alt="Logo" width={350} height={350} priority />
          <div className="flex w-2/3 flex-col pl-8">
            <h2 className="mb-4 text-xl font-bold">Nome do Produto</h2>
            <p className="mb-4 text-lg text-green-600">$99,90</p>
            <p className="mb-2">Informação Adicional 1</p>
            <p className="mb-2">Informação Adicional 2</p>
            <p className="mb-2">Informação Adicional 3</p>
          </div>
        </div>
      </div>
    </>
  )
}
