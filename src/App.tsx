
import './App.css'
import Header from './components/Header'
import 'bootstrap/dist/css/bootstrap.min.css'

import 'animate.css';
import Footer from './components/Footer'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from './components/Pages/Home';
import Shop from './components/Pages/Shop';
import Product from './components/Pages/Product';
import { FAQQ } from './components/Pages/FAQQ';
import Collections from './components/Pages/Collections';


function App() {


  return (
    <>
    <BrowserRouter>
    <Header />

<Routes>
 <Route path='/' element={<Home />} />
 <Route path='/shop' element={<Shop />} />
 <Route path='/product' element={<Product />} />
 <Route path='/faq' element={<FAQQ />} />
 
 <Route path='/collections' element={<Collections />} />

</Routes>

    <Footer />
    </BrowserRouter>

   

    </>
  )
}

export default App
