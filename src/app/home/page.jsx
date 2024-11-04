'use client';

import React from 'react';
import Image from 'next/image';
import feeds2 from '../../../public/feeds2.png';
import iphone from '../../../public/Iphone.png';
import samsung from '../../../public/Samsung.png';

// Array de produtos
const produtos = [
  {
    id: 1,
    nome: 'iPhone',
    imagem: iphone,
    preco: 'R$99,90',
    info: ['Informação Adicional 1', 'Informação Adicional 2', 'Informação Adicional 3']
  },
  {
    id: 2,
    nome: 'Samsung',
    imagem: samsung,
    preco: 'R$99,90',
    info: ['Informação Adicional 1', 'Informação Adicional 2', 'Informação Adicional 3']
  }
];

export default function ProductPage() {
  return (
    <div className="flex flex-col h-screen w-screen bg-[#EAF9E4]">
      
      {/* Logo no topo da página com fundo verde ajustado */}
      <div className="flex justify-center w-full bg-[#43A047] py-4">
        <Image src={feeds2} alt="Logo" width={70} height={70} priority />
      </div>
      
      {/* Informação dos produtos */}
      <div className="flex grow items-start justify-start w-full px-4 mt-2 space-x-8">
        {produtos.map(produto => (
          <div key={produto.id} className="flex flex-col items-center bg-white p-4 shadow-md rounded-lg">
            <div className="w-[200px] h-[200px] relative">
              <Image src={produto.imagem} alt={`Product Image of ${produto.nome}`} layout="fill" objectFit="contain" />
            </div>
            <div className="flex flex-col space-y-2 mt-4">
              <h2 className="text-xl font-bold text-center">{produto.nome}</h2>
              <p className="text-lg text-green-600 text-center">{produto.preco}</p>
              {produto.info.map((info, index) => (
                <p key={index} className="text-center">{info}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
      
    </div>
  );
}
