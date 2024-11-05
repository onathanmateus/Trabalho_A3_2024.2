'use client'

import React from 'react'
import Image from 'next/image'

import feeds2 from '../../../public/feeds2.png'
import iphone from '../../../public/Iphone.png'
import samsung from '../../../public/Samsung.png'
import jbl from '../../../public/fone.png'
import notebook from '../../../public/notebook.png'
import camisa from '../../..//public/camisa.png'

// Array de produtos
const produtos = [
  {
    id: 1,
    nome: 'Apple iPhone 14 (128 GB) – Roxo',
    imagem: iphone,
    preco: 'R$4199 ou 12x de R$ 388,80 sem juros',
    info: [
      'Tela Super Retina XDR 6,1 polegadas',
      'Modo Cinema agora em 4K Dolby Vision até 30 qps',
      '',
    ],
  },
  {
    id: 2,
    nome: 'Celular Samsung Galaxy A55 5G',
    imagem: samsung,
    preco: 'R$429,00 a vista ou 12x de R$ 35,75',
    info: [
      'Câmera tripla 50MP',
      'Tela Super AMOLED FHD+ de 6.6"',
      '256 GB Azul Claro',
    ],
  },
  {
    id: 3,
    nome: 'Fone de ouvido JBL',
    imagem: jbl,
    preco: 'R$298,99 ou 12x de R$ 28,99',
    info: ['Sem fio', 'Possui microfone', 'Bateria: 76 horas'],
  },
  {
    id: 4,
    nome: 'Notebook Ultra com Windows 11 Home',
    imagem: notebook,
    preco: 'R$1398,00 ou até 10x R$ 139,80 sem juros',
    info: ['Processador Celeron N4020C', '128GB', '4GB RAM'],
  },
  {
    id: 5,
    nome: 'Camisa do Flamengo 24/25 Masculina',
    imagem: camisa,
    preco: 'R$349,99 ou 5x de 69,99',
    info: ['Modelo Torcedor', 'Marca Adidas', '100% Poliéster'],
  },
]

export default function ProductPage() {
  return (
    <div className="flex h-screen w-screen flex-col bg-[#EAF9E4]">
      {/* Logo no topo da página com fundo verde ajustado */}
      <div className="flex w-full justify-center bg-[#43A047] py-4">
        <Image src={feeds2} alt="Logo" width={70} height={70} priority />
      </div>

      {/* Informação dos produtos */}
      <div className="mt-2 flex w-full grow flex-wrap items-start justify-start space-x-8 px-4">
        {produtos.map((produto) => (
          <div
            key={produto.id}
            className="flex flex-col items-center rounded-lg bg-white p-4 shadow-md"
            style={{ width: '250px', height: '400px' }}
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
