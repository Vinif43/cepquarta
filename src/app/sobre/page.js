import React from 'react'
import { IoReloadOutline } from 'react-icons/io5'

export default function page() {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-light-primary text-white font-bold">
      <div className="flex flex-col justify-center text-light-secondary lg:text-light-primary items-center md:w-80 lg:w-1/2  lg:bg-light-secondary">
        <h1 className="animate-pulse"> Sobre </h1>
        <p> Este é um exemplo de página sobre. </p>
        <IoReloadOutline className="animate-spin" />
      </div>
    </div>
  )
}
