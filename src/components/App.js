import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Menu from './menu'
import Usuarios from './usuarios'
import Publicaciones from './Publicaciones'
import Tareas from './Tareas'
import TareasGuardar from './Tareas/Guardar'

const App = () => (
  <BrowserRouter>
    <Menu />
    <div className='margen'>
      <Route exact path='/' component={Usuarios}></Route>
      <Route exact path='/tareas' component={Tareas}></Route>
      <Route exact path='/publicaciones/:key' component={Publicaciones}></Route>
      <Route exact path='/tareas/guardar' component={TareasGuardar}></Route>
      <Route exact path='/tareas/guardar/:usu_id/:tar_id' component={TareasGuardar}></Route>

    </div>
  </BrowserRouter>
)

export default App