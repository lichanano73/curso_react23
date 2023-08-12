import { Route, Routes, BrowserRouter as Router} from 'react-router-dom'
import './assets/css/App.css'
import 'bootstrap/dist/css/bootstrap.css'
import NavBar from './components/template/NavBar'

import Home from './components/Home'
import Productos from './components/productos/Productos'
import ShowProducto from './components/productos/ShowProducto'
import Registro from './components/auth/Registro'
import Login from './components/auth/Login'


function App() {
  return (
    <>
      <Router>
        <NavBar />
        <div className="container">
        <Routes>

          <Route path='/' element={<Home />} />

          <Route path='/productos' element={<Productos />} />
          <Route path='/productos/:id_producto' element={<ShowProducto />} />

          <Route path='/registrar' element={<Registro />} />
          <Route path='/login' element={<Login />} />

        </Routes>
        </div>
      </Router>
    </>
  )
}

export default App
