'use client'

import React, { useState } from 'react'
import Image from 'next/image'

import { AiOutlineSearch } from 'react-icons/ai'

import feeds2 from '../../../public/feeds2.png'
import iphone from '../../../public/Iphone.png'
import samsung from '../../../public/Samsung.png'
import jbl from '../../../public/fone.png'
import notebook from '../../../public/notebook.png'
import camisa from '../../../public/camisa.png'

const produtos = [
  {
    id: 1,
    nome: 'Apple iPhone 14',
    imagem: iphone,
    preco: 'R$4199',
    info: [
      'Tela Super Retina XDR 6,1 polegadas',
      'Modo Cinema agora em 4K Dolby Vision até 30 qps',
    ],
  },
  {
    id: 2,
    nome: 'Samsung Galaxy A55',
    imagem: samsung,
    preco: 'R$429,00',
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
    preco: 'R$298,99',
    info: ['Sem fio', 'Possui microfone', 'Bateria: 76 horas'],
  },
  {
    id: 4,
    nome: 'Notebook Ultra',
    imagem: notebook,
    preco: 'R$1398,00',
    info: ['Processador Celeron N4020C', '128GB', '4GB RAM'],
  },
  {
    id: 5,
    nome: 'Camisa do Flamengo',
    imagem: camisa,
    preco: 'R$349,99',
    info: ['Modelo Torcedor', 'Marca Adidas', '100% Poliéster'],
  },
]

export default function ProductPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [dropdownOpen, setDropdownOpen] = useState(null)
  const [commentText, setCommentText] = useState('')
  const [comments, setComments] = useState([])
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleSearch = (event) => setSearchTerm(event.target.value)

  const openCommentsModal = async (productId) => {
    const product = produtos.find((p) => p.id === productId)

    if (!product) {
      console.error('Produto não encontrado')
      return
    }

    try {
      const response = await fetch(
        `http://localhost:8080/comments/${encodeURIComponent(product.nome)}`,
      )
      if (response.ok) {
        const data = await response.json()
        setComments(data)
        setIsModalOpen(true)
      } else {
        console.error('Falha ao buscar comentários:', response.statusText)
      }
    } catch (error) {
      console.error('Erro na requisição:', error)
    }
  }

  const closeCommentsModal = () => {
    setIsModalOpen(false)
    setComments([])
  }

  const filteredProducts = produtos.filter((produto) =>
    produto.nome.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const toggleDropdown = (productId) => {
    if (dropdownOpen === productId) {
      setDropdownOpen(null)
    } else {
      setDropdownOpen(productId)
    }
  }

  const handleCommentSubmit = async (productId) => {
    if (commentText.trim()) {
      const product = produtos.find((p) => p.id === productId)

      if (product) {
        try {
          const response = await fetch(
            'http://localhost:8080/comments/CreateComment',
            {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                product_name: product.nome,
                user_email: localStorage.getItem('userEmail'),
                comment_text: commentText,
                user_name: localStorage.getItem('name'),
              }),
            },
          )

          if (response.ok) {
            setCommentText('')
            setDropdownOpen(null)
          } else {
            console.error('Falha ao enviar comentário:', response.statusText)
          }
        } catch (error) {
          console.error('Erro na requisição:', error)
        }
      }
    }
  }

  return (
    <div className="relative flex h-screen w-screen flex-col">
      <div className="relative flex w-full items-center justify-center bg-[#43A047] px-4 py-4">
        <Image src={feeds2} alt="Logo" width={100} height={100} priority />

        <div className="absolute right-4 flex w-1/3 max-w-md items-center rounded-full border border-gray-300 bg-[#C8E6C9] p-2 shadow-lg focus-within:border-[#43A047]">
          <AiOutlineSearch className="mr-3 text-gray-600" size={20} />
          <input
            type="text"
            placeholder="Pesquisar..."
            value={searchTerm}
            onChange={handleSearch}
            className="w-full bg-transparent text-sm text-gray-700 placeholder-gray-600 focus:outline-none"
          />
        </div>
      </div>

      <div className="mt-4 flex w-full grow flex-wrap items-start justify-center gap-8 px-4">
        {filteredProducts.map((produto) => (
          <div
            key={produto.id}
            className="flex w-[400px] flex-col rounded-lg border border-gray-200 bg-white p-4 shadow-md"
          >
            <div className="flex">
              <div className="relative h-[120px] w-[120px] flex-shrink-0">
                <Image
                  src={produto.imagem}
                  alt={`Product Image of ${produto.nome}`}
                  layout="fill"
                  objectFit="contain"
                  className="rounded"
                />
              </div>

              <div className="ml-4 flex flex-col justify-between">
                <h2 className="text-lg font-bold">{produto.nome}</h2>
                <p className="text-lg font-semibold text-green-600">
                  {produto.preco}
                </p>

                <div className="mt-2 space-y-1 text-sm text-gray-700">
                  {produto.info.map((info, index) => (
                    <p key={index}>{info}</p>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-4 flex justify-between">
              <button
                onClick={() => toggleDropdown(produto.id)}
                className="rounded-full bg-green-500 px-4 py-2 text-white"
              >
                Avalie
              </button>
              <button
                className="text-sm text-gray-500"
                onClick={() => openCommentsModal(produto.id)}
              >
                Exibir comentários
              </button>
            </div>

            {dropdownOpen === produto.id && (
              <div className="mt-4 flex items-center space-x-2 rounded-lg bg-[#F1F8E9] p-2">
                <input
                  type="text"
                  value={commentText}
                  onChange={(e) => setCommentText(e.target.value)}
                  placeholder="Escreva seu comentário..."
                  className="w-full rounded-md border border-gray-300 p-2"
                />
                <button
                  onClick={() => handleCommentSubmit(produto.id)}
                  className="rounded-full bg-green-500 px-4 py-2 text-white"
                >
                  Comentar
                </button>
              </div>
            )}
          </div>
        ))}
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-500 bg-opacity-50">
          <div className="w-full max-w-md rounded-lg bg-white p-6">
            {comments.length > 0 ? (
              comments.map((comment, index) => (
                <div key={index} className="mb-2 flex items-center space-x-2">
                  <span className="font-semibold">{comment.user_name}:</span>
                  <p>{comment.comment_text}</p>
                </div>
              ))
            ) : (
              <p>Não há comentários ainda.</p>
            )}
            <button
              onClick={closeCommentsModal}
              className="mt-4 rounded-full bg-red-500 px-4 py-2 text-white"
            >
              Fechar
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
