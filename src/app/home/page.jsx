'use client'
import React from 'react'
import Image from 'next/image'


export default function Home() {
  return (
    <><div className="m-0 flex h-screen w-screen items-center justify-center bg-[#EAF9E4] p-0">
      
      <div className="flex justify-center mt-4 mb-8">
      <Image src={'/feeds2.png'} alt="Logo" width={350} height={350} priority />
</div>
<div className="flex items-center justify-center flex-grow">

</div>
<div className="flex justify-center mt-4 mb-8">
      <Image src={'/Iphone.png'} alt="Logo" width={350} height={350} priority />
      <div className="w-2/3 pl-8 flex flex-col">
      <h2 className="font-bold text-xl mb-4">Nome do Produto</h2>
          <p className="text-lg text-green-600 mb-4">$99,90</p>
          <p className="mb-2">Informação Adicional 1</p>
          <p className="mb-2">Informação Adicional 2</p>
          <p className="mb-2">Informação Adicional 3</p>
      </div>


</div>

      </div></>

  )
}
