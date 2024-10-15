'use client'

import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'


const Logout = () => {
  const router = useRouter()
  useEffect(()=>{
    setTimeout(()=>{
      router.push('/')
    },4000)
  },[])
  return (
    <div>You have already log out. You will be transfer back to mainpage within 5seconds.</div>
  )
}

export default Logout