'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { AiOutlineSearch, AiFillStar } from 'react-icons/ai'; // Ícone de pesquisa e ícone de estrela
import feeds2 from '../../../public/feeds2.png';
import iphone from '../../../public/Iphone.png';
import samsung from '../../../public/Samsung.png';
import jbl from '../../../public/fone.png';
import notebook from '../../../public/notebook.png';
import camisa from '../../../public/camisa.png';

// Array de produtos
const produtos = [
  {
    id: 1,
    nome: 'Apple iPhone 14 (128 GB) – Roxo',
    imagem: iphone,
    preco: 'R$4199',
    info: ['Tela Super Retina XDR 6,1 polegadas', 'Modo Cinema agora em 4K Dolby Vision até 30 qps'],
    estrelas: 5
  },
  {
    id: 2,
    nome: 'Celular Samsung Galaxy A55 5G',
    imagem: samsung,
    preco: 'R$429,00',
    info: ['Câmera tripla 50MP', 'Tela Super AMOLED FHD+ de 6.6"', '256 GB Azul Claro'],
    estrelas: 5
  },
  {
    id: 3,
    nome: 'Fone de ouvido JBL',
    imagem: jbl,
    preco: 'R$298,99',
    info: ['Sem fio', 'Possui microfone', 'Bateria: 76 horas'],
    estrelas: 5
  },
  {
    id: 4,
    nome: 'Notebook Ultra com Windows 11 Home',
    imagem: notebook,
    preco: 'R$1398,00',
    info: ['Processador Celeron N4020C', '128GB', '4GB RAM'],
    estrelas: 5
  },
  {
    id: 5,
    nome: 'Camisa do Flamengo 24/25 Masculina',
    imagem: camisa,
    preco: 'R$349,99',
    info: ['Modelo Torcedor', 'Marca Adidas', '100% Poliéster'],
    estrelas: 5
  }
];

export default function ProductPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  // Filtra os produtos de acordo com o termo de pesquisa
  const filteredProducts = produtos.filter((produto) =>
    produto.nome.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex flex-col h-screen w-screen bg-[#EAF9E4]">
      {/* Barra superior com logo e barra de pesquisa */}
      <div className="flex items-center justify-center w-full bg-[#43A047] py-4 px-4 relative">
        <Image src={feeds2} alt="Logo" width={100} height={100} priority /> {/* Logo aumentada */}
        
        {/* Barra de pesquisa estilizada */}
        <div className="absolute right-4 flex items-center bg-[#C8E6C9] w-1/3 max-w-md p-2 rounded-full shadow-lg border border-gray-300 focus-within:border-[#43A047] transition-all duration-300 ease-in-out">
          <AiOutlineSearch className="text-gray-600 mr-3" size={20} />
          <input
            type="text"
            placeholder="Pesquisar..."
            value={searchTerm}
            onChange={handleSearch}
            className="w-full bg-transparent text-gray-700 placeholder-gray-600 focus:outline-none text-sm transition-all duration-300 ease-in-out"
          />
        </div>
      </div>

      {/* Informação dos produtos */}
      <div className="flex grow flex-wrap items-start justify-center w-full px-4 mt-4 gap-8">
        {filteredProducts.map((produto) => (
          <div key={produto.id} className="flex bg-white p-4 shadow-md rounded-lg border border-gray-200 w-[400px]">
            {/* Imagem do produto à esquerda */}
            <div className="w-[120px] h-[120px] relative flex-shrink-0">
              <Image src={produto.imagem} alt={`Product Image of ${produto.nome}`} layout="fill" objectFit="contain" className="rounded" />
            </div>

            {/* Informações do produto à direita */}
            <div className="flex flex-col justify-between ml-4">
              <h2 className="text-lg font-bold">{produto.nome}</h2>
              <p className="text-lg text-green-600 font-semibold">{produto.preco}</p>
              
              {/* Estrelas de avaliação */}
              <div className="flex space-x-1">
                {Array.from({ length: 5 }, (_, index) => (
                  <AiFillStar
                    key={index}
                    className="text-yellow-500"
                    size={18}
                  />
                ))}
              </div>

              {/* Informações adicionais do produto */}
              <div className="text-sm text-gray-700 mt-2 space-y-1">
                {produto.info.map((info, index) => (
                  <p key={index}>{info}</p>
                ))}
              </div>

              {/* Botões */}
              <div className="flex space-x-2 mt-4">
                <button className="bg-green-500 text-white px-4 py-2 rounded-full">Avalie</button>
                <button className="text-gray-500 text-sm">Exibir comentários ▼</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
