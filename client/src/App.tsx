import { useState } from 'react'
import { Button } from './components/ui/button'
import Header from './components/Header'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Compiler from './pages/Compiler'
import PageNotFound from './pages/PageNotFound'
import { ThemeProvider } from "@/components/theme-provider"


function App() {
  return (
    <>
          <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
          <Header/>
      <Routes>
        <Route path='/' element={ <Home/>} />
        <Route path='/compiler' element={ <Compiler/>} />
        <Route path='*' element={ <PageNotFound/>} />
    </Routes>
    </ThemeProvider>
     
    </>
  )
}

export default App
