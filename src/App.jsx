import './assets/css/style.scss'
import { Home } from './Views/Home.jsx'
import { Header } from './Components/Header.jsx'
import { Footer } from './Components/Footer.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
   <>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
   </>
  );
}

export default App;
