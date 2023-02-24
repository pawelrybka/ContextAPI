import './App.css'
import React from 'react'
import ContextProvider from './components/ContextProvider/ContextProvider'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Main from './components/Main/Main'
import ButtonSection from './components/ButtonSection/ButtonSection'

function App () {
  return (
    <ContextProvider>
      <Header/>
      <Main/>
      <ButtonSection/>
      <Footer/> 
    </ContextProvider>
  )
}

export default App

