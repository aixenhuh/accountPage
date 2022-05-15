import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Main from './components/Main';
import Product from "./components/Products";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main />}>메인</Route>
            <Route path="/input" element={<Product />}>입력</Route>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
