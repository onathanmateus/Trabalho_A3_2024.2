'use client'
import React from 'react'

import { FiEye, FiEyeOff } from 'react-icons/fi'
import { MdOutlineMailOutline } from 'react-icons/md'
import { IoPersonOutline } from 'react-icons/io5'
import { Button, Input } from '@nextui-org/react'

import feeds2 from '../../public/feeds2.png'
import Image from 'next/image'

export default function Login() {
  const [isVisible, setIsVisible] = React.useState(false)
  const [isLogin, setIsLogin] = React.useState(false)

  const toggleVisibility = () => setIsVisible(!isVisible)
  const toggleMode = () => setIsLogin(!isLogin)

  return (
    <div className="bg-horizontal-split md:bg-diagonal-split flex h-screen w-screen items-center justify-center">
      <div className="flex h-[700px] w-full flex-col rounded-lg border-2 border-[#000000] md:w-[80%] md:flex-row">
        <div className="flex h-[40%] w-full flex-col rounded-t-lg border-b bg-[#96ff96] md:h-full md:w-[40%] md:rounded-l-lg md:border-r">
          <div className="flex h-[40%] w-full items-center justify-center">
            <Image
              src={feeds2}
              alt="Logomarca do site"
              width={450}
              height={450}
            />
          </div>
          <div className="mx-1 flex h-[40%] flex-col items-center justify-center space-y-3">
            <h1 className="flex text-lg">
              {isLogin ? 'Novo por aqui?' : 'Você tem um Cadastro?'}
            </h1>
            <p className="flex text-center">
              {isLogin
                ? 'Cadastre-se e faça parte da nossa comunidade!'
                : 'Para se manter conectado conosco faça login com suas informações'}
            </p>
            <Button
              size="md"
              radius="lg"
              className="w-1/3 bg-white"
              onClick={toggleMode}
            >
              {isLogin ? 'Cadastro' : 'Login'}
            </Button>
          </div>
          <div className="flex h-[20%] w-full items-center justify-center">
            <p className="w-[90%] text-center text-xs">
              &copy; <strong>FEEDS</strong> detém todos os direitos autorais
              sobre os seus serviços. qualquer violação será rigorosamente
              monitorada e pode resultar em ações legais.
            </p>
          </div>
        </div>
        <div className="flex h-[60%] w-full flex-col rounded-b-lg bg-[#ffffff] md:h-full md:w-[60%] md:rounded-r-lg">
          <div className="flex h-[20%] w-full items-center justify-center">
            <h1 className="flex text-3xl">
              {isLogin ? 'Entre na sua conta' : 'Criar Conta'}
            </h1>
          </div>
          <div className="flex h-[80%] w-full flex-col items-center justify-center space-y-5 md:space-y-10">
            {!isLogin && (
              <Input
                isRequired
                type="text"
                radius="sm"
                size="lg"
                placeholder="Coloque o seu nome"
                label="Nome"
                startContent={
                  <IoPersonOutline className="pointer-events-none text-xl text-default-900" />
                }
                className="max-w-xs"
              />
            )}
            <Input
              isRequired
              type="email"
              radius="sm"
              size="lg"
              startContent={
                <MdOutlineMailOutline className="pointer-events-none text-xl text-default-900" />
              }
              placeholder="Coloque o seu email"
              label="Email"
              className="max-w-xs"
            />
            <Input
              label="Senha"
              isRequired
              size="lg"
              radius="sm"
              placeholder="Coloque a sua senha"
              endContent={
                <button
                  className="focus:outline-none"
                  type="button"
                  onClick={toggleVisibility}
                  aria-label="toggle password visibility"
                >
                  {isVisible ? (
                    <FiEye className="pointer-events-none text-xl text-default-900" />
                  ) : (
                    <FiEyeOff className="pointer-events-none text-xl text-default-900" />
                  )}
                </button>
              }
              type={isVisible ? 'text' : 'password'}
              className="max-w-xs"
            />
            <Button size="md" radius="lg" className="w-1/3 bg-[#96ff96]">
              {isLogin ? 'Entrar' : 'Cadastrar'}
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
