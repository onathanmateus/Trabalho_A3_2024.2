'use client'

import React from 'react'
import Image from 'next/image'

import feeds2 from '../../../public/feeds2.png'
import iphone from '../../../public/Iphone.png'
import samsung from '../../../public/Samsung.png'

// Array de produtos
const produtos = [
  {
    id: 1,
    nome: 'iPhone',
    imagem: iphone,
    preco: 'R$99,90',
    info: [
      'Informação Adicional 1',
      'Informação Adicional 2',
      'Informação Adicional 3',
    ],
  },
  {
    id: 2,
    nome: 'Samsung',
    imagem: samsung,
    preco: 'R$99,90',
    info: [
      'Informação Adicional 1',
      'Informação Adicional 2',
      'Informação Adicional 3',
    ],
  },
]

export default function Home() {
  return (
    <div className="flex h-screen w-screen flex-col bg-[#EAF9E4]">
      {/* Logo no topo da página com fundo verde ajustado */}
      <div className="flex w-full justify-center bg-[#43A047] py-4">
        <Image src={feeds2} alt="Logo" width={70} height={70} priority />
      </div>

      {/* Informação dos produtos */}
      <div className="mt-2 flex w-full grow items-start justify-start space-x-8 px-4">
        {produtos.map((produto) => (
          <div
            key={produto.id}
            className="flex flex-col items-center rounded-lg bg-white p-4 shadow-md"
          >
            <div className="relative h-[200px] w-[200px]">
              <Image
                src={produto.imagem}
                alt={`Product Image of ${produto.nome}`}
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className="mt-4 flex flex-col space-y-2">
              <h2 className="text-center text-xl font-bold">{produto.nome}</h2>
              <p className="text-center text-lg text-green-600">
                {produto.preco}
              </p>
              {produto.info.map((info, index) => (
                <p key={index} className="text-center">
                  {info}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
