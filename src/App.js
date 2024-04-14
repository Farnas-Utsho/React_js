
import './App.css';
import Header from './pages/Header';

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import { BrowserRouter, Route, Routes } from "react-router-dom"



function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path='/' element={< Home />}> </Route>
        
        <Route path='/About' element={< About />}> </Route>

        <Route path='/Contact' element={< Contact />}></Route>

      </Routes>


    </BrowserRouter>
    // <div className="App">
    //   {/* <h1 className ="FirstClass" > 
    //     Hello lets go
    //   </h1> */}
    //   <Header />
    //   <Home />
    //   <About />
    //   <Contact/>

    // </div>
  );
}

export default App;