import React from "react";
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import IncomePage from "./pages/IncomePage";
import ExpensePage from "./pages/ExpensePage";

const App = () => {
  return (


    <BrowserRouter>

<nav>
    <ul>
        <li>
        <Link to="/income">Income</Link>
      </li>
        <li>
          <Link to="/expenses">Expenses</Link>
        </li>
    </ul>
  </nav>


    <Routes>
     
      <Route  path='/income' element={<IncomePage/>}   />
      <Route  path='/expenses' element={<ExpensePage/>}   />
    </Routes>
 </BrowserRouter>



  );
};

export default App;
