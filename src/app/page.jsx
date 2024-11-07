'use client'

import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

import { FiEye, FiEyeOff } from 'react-icons/fi'
import { MdOutlineMailOutline } from 'react-icons/md'
import { IoPersonOutline } from 'react-icons/io5'
import { Button, Input } from '@nextui-org/react'

import feeds2 from '../../public/feeds2.png'

export default function Login() {
  const [isVisible, setIsVisible] = React.useState(false)
  const [isLogin, setIsLogin] = React.useState(false)
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [name, setName] = React.useState('')
  const [message, setMessage] = React.useState('')
  const [messageType, setMessageType] = React.useState('')

  const toggleVisibility = () => setIsVisible(!isVisible)
  const toggleMode = () => setIsLogin(!isLogin)
  const router = useRouter()

  const handleLogin = async () => {
    try {
      const response = await fetch(
        'http://localhost:8080/usuario/buscarPorJSON',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, password }),
        },
      )

      const data = await response.json()

      if (response.ok) {
        console.log('Login realizado com sucesso:', data)
        setMessage('Login realizado com sucesso!')
        setMessageType('success')
        setTimeout(() => setMessage(''), 3000)
        router.push('/home')
      } else {
        console.error('Erro ao fazer login:', data.message)
        setMessage('Erro ao fazer login, tente novamente')
        setMessageType('error')
        setTimeout(() => setMessage(''), 3000)
      }
    } catch (error) {
      console.error('Erro na requisição de login:', error)
      setMessage('Erro ao fazer login, tente novamente')
      setMessageType('error')
      setTimeout(() => setMessage(''), 3000)
    }
  }

  const handleSignup = async () => {
    try {
      const response = await fetch('http://localhost:8080/usuario', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password }),
      })

      console.log('resposta do servidor: ', response)

      if (response.ok) {
        console.log('Cadastro realizado com sucesso')
        setMessage('Cadastro realizado com sucesso!')
        setMessageType('success')

        localStorage.setItem('userEmail', email)
        localStorage.setItem('password', password)
        localStorage.setItem('name', name)
        setTimeout(() => setMessage(''), 3000)
        toggleMode()
      } else {
        console.error('Erro ao cadastrar:', response.statusText)
        setMessage('Erro ao cadastrar usuário, tente novamente')
        setMessageType('error')
        setTimeout(() => setMessage(''), 3000)
      }
    } catch (error) {
      console.error('Erro na requisição de cadastro:', error)
      setMessage('Erro ao cadastrar usuário, tente novamente')
      setMessageType('error')
      setTimeout(() => setMessage(''), 3000)
    }
  }

  const handleSubmit = () => {
    if (isLogin) {
      handleLogin()
    } else {
      handleSignup()
    }
  }

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-horizontal-split md:bg-diagonal-split">
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
                onChange={(e) => setName(e.target.value)}
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
              onChange={(e) => setEmail(e.target.value)}
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
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              size="md"
              radius="lg"
              className="w-1/3 bg-[#96ff96]"
              onClick={handleSubmit}
            >
              {isLogin ? 'Entrar' : 'Cadastrar'}
            </Button>
            {message && (
              <div className="mt-1 flex w-full justify-center">
                <div
                  className={`max-w-xs rounded-lg p-4 text-center text-white ${
                    messageType === 'success' ? 'bg-green-500' : 'bg-red-500'
                  }`}
                >
                  <p>{message}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
