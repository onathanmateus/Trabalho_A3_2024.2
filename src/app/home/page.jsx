'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { AiOutlineSearch, AiFillStar } from 'react-icons/ai';
import feeds2 from '../../../public/feeds2.png';
import iphone from '../../../public/Iphone.png';
import samsung from '../../../public/Samsung.png';
import jbl from '../../../public/fone.png';
import notebook from '../../../public/notebook.png';
import camisa from '../../../public/camisa.png';

//Array de Produtos 
const produtos = [
  {
    id: 1,
    nome: 'Apple iPhone 14 (128 GB) – Roxo',
    imagem: iphone,
    preco: 'R$4199',
    info: ['Tela Super Retina XDR 6,1 polegadas', 'Modo Cinema agora em 4K Dolby Vision até 30 qps'],
    estrelas: 5,
    comentarios: []  // Comentários começam vazios
  },
  {
    id: 2,
    nome: 'Celular Samsung Galaxy A55 5G',
    imagem: samsung,
    preco: 'R$429,00',
    info: ['Câmera tripla 50MP', 'Tela Super AMOLED FHD+ de 6.6"', '256 GB Azul Claro'],
    estrelas: 5,
    comentarios: []  // Comentários começam vazios
  },
  {
    id: 3,
    nome: 'Fone de ouvido JBL',
    imagem: jbl,
    preco: 'R$298,99',
    info: ['Sem fio', 'Possui microfone', 'Bateria: 76 horas'],
    estrelas: 5,
    comentarios: []  // Comentários começam vazios
  },
  {
    id: 4,
    nome: 'Notebook Ultra com Windows 11 Home',
    imagem: notebook,
    preco: 'R$1398,00',
    info: ['Processador Celeron N4020C', '128GB', '4GB RAM'],
    estrelas: 5,
    comentarios: []  // Comentários começam vazios
  },
  {
    id: 5,
    nome: 'Camisa do Flamengo 24/25 Masculina',
    imagem: camisa,
    preco: 'R$349,99',
    info: ['Modelo Torcedor', 'Marca Adidas', '100% Poliéster'],
    estrelas: 5,
    comentarios: []  // Comentários começam vazios
  }
];

export default function ProductPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProductComments, setSelectedProductComments] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(null); // Para controlar qual produto tem o dropdown aberto
  const [commentText, setCommentText] = useState(''); // Para armazenar o texto do comentário

  const handleSearch = (event) => setSearchTerm(event.target.value);

  // Abre o modal de comentários para o produto selecionado
  const openCommentsModal = (productId) => {
    const productComments = produtos.find(p => p.id === productId);
    setSelectedProductComments(productComments);  // Armazenamos o produto e seus comentários
  };

  // Fecha o modal de comentários
  const closeCommentsModal = () => setSelectedProductComments(null);

  // Filtra os produtos de acordo com o termo de pesquisa
  const filteredProducts = produtos.filter((produto) =>
    produto.nome.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Controla a abertura do dropdown para um produto específico
  const toggleDropdown = (productId) => {
    if (dropdownOpen === productId) {
      setDropdownOpen(null); // Fecha o dropdown se já estiver aberto
    } else {
      setDropdownOpen(productId); // Abre o dropdown para o produto selecionado
    }
  };

  // Função para adicionar um comentário (simulação)
  const handleCommentSubmit = (productId) => {
    if (commentText.trim()) {
      // Encontra o produto e adiciona o comentário
      const productIndex = produtos.findIndex(p => p.id === productId);
      if (productIndex !== -1) {
        produtos[productIndex].comentarios.push({ nome: 'Usuário', comentario: commentText });
        setCommentText(''); // Limpa o campo de texto
        setDropdownOpen(null); // Fecha o dropdown
      }
    }
  };

  return (
    <div className="flex flex-col h-screen w-screen relative">
      {/* Barra superior com logo e barra de pesquisa */}
      <div className="flex items-center justify-center w-full bg-[#43A047] py-4 px-4 relative">
        <Image src={feeds2} alt="Logo" width={100} height={100} priority />
        
        {/* Barra de pesquisa */}
        <div className="absolute right-4 flex items-center bg-[#C8E6C9] w-1/3 max-w-md p-2 rounded-full shadow-lg border border-gray-300 focus-within:border-[#43A047]">
          <AiOutlineSearch className="text-gray-600 mr-3" size={20} />
          <input
            type="text"
            placeholder="Pesquisar..."
            value={searchTerm}
            onChange={handleSearch}
            className="w-full bg-transparent text-gray-700 placeholder-gray-600 focus:outline-none text-sm"
          />
        </div>
      </div>

      {/* Informação dos produtos */}
      <div className="flex grow flex-wrap items-start justify-center w-full px-4 mt-4 gap-8">
        {filteredProducts.map((produto) => (
          <div key={produto.id} className="flex flex-col bg-white p-4 shadow-md rounded-lg border border-gray-200 w-[400px]">
            <div className="flex">
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
                    <AiFillStar key={index} className="text-yellow-500" size={18} />
                  ))}
                </div>

                {/* Informações adicionais do produto */}
                <div className="text-sm text-gray-700 mt-2 space-y-1">
                  {produto.info.map((info, index) => (
                    <p key={index}>{info}</p>
                  ))}
                </div>
              </div>
            </div>

            {/* Botões */}
            <div className="flex justify-between mt-4">
              <button
                onClick={() => toggleDropdown(produto.id)}
                className="bg-green-500 text-white px-4 py-2 rounded-full"
              >
                Avalie
              </button>
              <button className="text-gray-500 text-sm" onClick={() => openCommentsModal(produto.id)}>
                Exibir comentários
              </button>
            </div>

            {/* Dropdown com input de comentário */}
            {dropdownOpen === produto.id && (
              <div className="mt-4 flex items-center space-x-2 bg-[#F1F8E9] p-2 rounded-lg">
                <input
                  type="text"
                  value={commentText}
                  onChange={(e) => setCommentText(e.target.value)}
                  placeholder="Escreva seu comentário..."
                  className="w-full p-2 rounded-md border border-gray-300"
                />
                <button
                  onClick={() => handleCommentSubmit(produto.id)}
                  className="bg-green-500 text-white px-4 py-2 rounded-full"
                >
                  Comentar
                </button>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Modal de comentários */}
      {selectedProductComments && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg max-w-md w-full">
            <h3 className="text-xl font-bold mb-4">Comentários de {selectedProductComments.nome}</h3>
            {selectedProductComments.comentarios.length > 0 ? (
              <div>
                <span className="font-semibold">Usuário:</span>
                <div className="pl-4">
                  {selectedProductComments.comentarios.map((comentario, index) => (
                    <div key={index} className="mb-2">
                      <p>{comentario.comentario}</p>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <p>Não há comentários ainda.</p>
            )}
            <button
              onClick={closeCommentsModal}
              className="mt-4 bg-red-500 text-white py-2 px-4 rounded-full"
            >
              Fechar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
