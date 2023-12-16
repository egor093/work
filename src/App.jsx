import './App.scss'
import { BrowserRouter as Router, NavLink, Route, Routes } from "react-router-dom";
import Header from './Components/Header/Header';
import Info from './Page/Info/Info';
import Cards from './Page/Cards/Cards';
import Create from './Page/Create/Create';
import cards from './cards.json'
import { useState } from 'react';


function App() {

  const [arr,setArr] = useState(cards);

  return (
    <>
         <Router>
        <header>
          <Header />
        </header>
        <main>
          <Routes>
            <Route path='/' element={<Info />} />
            <Route path='/cards' element={<Cards arr ={arr}/>} />
            <Route path='/create' element={<Create />} />
          </Routes>
        </main>
      </Router>
    </>
  )
}

export default App
