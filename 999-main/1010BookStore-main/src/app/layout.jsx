'use client'

import Footer from '@/app/components/footer'
import Header from '@/app/components/header'
import MyContext from '@/app/contextUser'
import ShopingCartContext from './contextCart'
import React, { useState } from 'react'

const RootLayout = ({children}) => {
  
  const [userName,setUserName] = useState(null)
  const value = {userName,setUserName}

  const [cartItems,setCartItems] = useState([])
  const CartValue = {cartItems,setCartItems}

  return (
    <MyContext.Provider value={value}>
      <ShopingCartContext.Provider value={CartValue}>
        <html>
        <body note={cartItems}>
            <Header />
                {children}
            <Footer />    
        </body>
        </html>
        </ShopingCartContext.Provider>
    </MyContext.Provider>
  )
}

export default RootLayout