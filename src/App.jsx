import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './Componets/Common/Header/Header'
import Footer from './Componets/Common/Footer/Footer'
import Home from './pages/Home/Home'

function App() {

  return (
    <>  
    <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      <Header />

      <Routes>
          <Route path='/' element={<Home />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App
