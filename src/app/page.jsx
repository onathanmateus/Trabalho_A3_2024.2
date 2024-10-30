'use client'
import React from 'react'

import { Input } from '@nextui-org/react'

import { VscEye, VscEyeClosed } from 'react-icons/vsc'

export default function Login() {
  const [isVisible, setIsVisible] = React.useState(false)

  const toggleVisibility = () => setIsVisible(!isVisible)

  return (
    <div className="m-0 flex h-screen w-screen items-center justify-center p-0">
      <div className="flex flex-col gap-2 rounded-lg border-1 p-2 sm:m-0 md:mx-52 md:w-1/2">
        <Input
          type="email"
          label="Email"
          variant="bordered"
          isRequired
          className="h-full w-full"
        />
        <Input
          type={isVisible ? 'text' : 'password'}
          label="Password"
          variant="bordered"
          isRequired
          className="h-full w-full"
          endContent={
            <button
              className="focus:outline-none"
              type="button"
              onClick={toggleVisibility}
              aria-label="toggle password visibility"
            >
              {isVisible ? (
                <VscEye className="pointer-events-none text-2xl text-default-400" />
              ) : (
                <VscEyeClosed className="pointer-events-none text-2xl text-default-400" />
              )}
            </button>
          }
        />
      </div>
    </div>
  )
}
