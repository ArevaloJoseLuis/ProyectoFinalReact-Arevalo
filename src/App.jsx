import {BrowserRouter, Routes, Route} from "react-router-dom"
import './App.css'
import NavBar from './Components/NavBar/NavBar'
import {ItemListContainer} from './Components/ItemListContainer/ItemListContainer'
import {ItemDetailContainer} from './Components/ItemDetailContainer/ItemDetailContainer'

function App() {
  return (
    <BrowserRouter>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer /> }></Route>
          <Route path="/categoria/:id" element={<ItemListContainer/>}> </Route>
          <Route path="/item/:id" element={<ItemDetailContainer/>}> </Route>
          <Route path="*" element={404}></Route>
          
        </Routes>
             
      </div>
    </BrowserRouter>
  )
}
export default App
