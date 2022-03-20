import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {CocktailProvider} from './context/CocktailContext'

import Navbar from './components/pages/Navbar'
import Footer from './components/pages/Footer'
import Home from './components/pages/Home';
import About from './components/pages/About';
import ClickedCocktail from './components/pages/ClickedCocktail';
import Error from './components/pages/Error';


function App() {
  return (
    <Router>
      <CocktailProvider>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/cocktail/:idDrink' element={<ClickedCocktail />} />
        <Route path='/*' element={<Error />} />
      </Routes>
      <Footer />
      </CocktailProvider>
    </Router>
  );
}

export default App;

















{/*  

import UseRefExample1 from './components/UseRefExample1';
import UseRefExample2 from './components/UseRefExample2';
import UseRefExample3 from './components/UseRefExample3';


<div className="container mt-5">
      <UseRefExample1 />
      <hr />
      <UseRefExample2 />
      <hr />
      <UseRefExample3 />
  </div> */}