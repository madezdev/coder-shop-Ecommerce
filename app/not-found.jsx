import React from 'react'
import Image from 'next/image'

export default function NotFound() {
  return (
    <div className='flex justify-center items-center max-h-screen h-[calc(100vh-320px)]'>
        <Image src='/noFound.svg' width={500} height={500} alt='Page not found'/>   
    </div>
  )
}
