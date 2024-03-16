import React, {useState} from 'react';
import ReactDOM  from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import Header from './Header.js';
import Bakery from './Bakery.js';
import Cocktails from './Cocktails.js';
import Burgers from './Burgers.js';
import Desserts from './Desserts.js';
import Cart from './Cart.js';
import { CartProvider } from './CartContext';
import { SearchProvider, useSearch } from './SearchContext.js';
import Search from './Search.js';
import SearchResults from './SearchResults.js'

export default function App () {

 return (
  <BrowserRouter >
  <SearchProvider>
  <CartProvider>
    <Routes>
    <Route path="/" element={ <Header />} >
      <Route index element={<Bakery />} />
      <Route path='/burgers' element={<Burgers />} />
      <Route path='/desserts' element={< Desserts/>} />
      <Route path='/cocktails' element={<Cocktails />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/search" element={<SearchResults />} />
      </Route>
  </Routes>
  </CartProvider>
  </SearchProvider>
  </BrowserRouter>
 );
}

ReactDOM.render(<App />, document.getElementById('root'));