import './App.css'
import React from 'react'
import MainLayout from './components/MainLayout/MainLayout'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Main from './components/Main/Main'
import ButtonSection from './components/ButtonSection/ButtonSection'

function App () {
  return (
    <MainLayout>
      <Header/>
      <Main/>
      <ButtonSection/>
      <Footer/> 
    </MainLayout>
  )
}

export default App

