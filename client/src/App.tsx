
import Header from './components/Header'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Compiler from './pages/Compiler'
import PageNotFound from './pages/PageNotFound'
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from './components/ui/sonner'


function App() {
  return (
    <>
      <Toaster position='bottom-right' theme='dark'/>
          <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
          <Header/>
      <Routes>
        <Route path='/' element={ <Home/>} />
        <Route path='/compiler' element={ <Compiler/>} />
        <Route path='/compiler/:urlId' element={ <Compiler/>} />
        <Route path='*' element={ <PageNotFound/>} />
    </Routes>
    </ThemeProvider>
     
    </>
  )
}

export default App
