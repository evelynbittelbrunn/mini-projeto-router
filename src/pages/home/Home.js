import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Produtos from '../produtos/Produtos'
import Contato from '../contato/Contato'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import  '../../App.css';
import Produto from '../produto/Produto'

const Home = () => {
  return (
    <div className='app'>
        <BrowserRouter>
            <Header />
            <div className='content'>
                <Routes>
                    <Route path='/' element={<Produtos />} />
                    <Route path='produto/:id' element={<Produto />} />
                    <Route path='contato' element={<Contato />} />
                </Routes>
            </div>
            <Footer />
        </BrowserRouter>
            
    </div>
  )
}

export default Home