import React, { createContext, useContext, useState } from 'react';

//Этот контекст будет предоставлять информацию о состоянии 
//корзины и функции для взаимодействия с ней.
const CartContext = createContext();

//Мы экспортируем пользовательский хук useCart, 
//который использует хук useContext, чтобы получить текущее значение контекста корзины.
export const useCart = () => useContext(CartContext);

//Мы экспортируем компонент-провайдер CartProvider, который принимает 
//в качестве аргумента children (дочерние элементы), чтобы обернуть ими свой контент. 
//Этот компонент будет обеспечивать доступ к контексту корзины своим дочерним компонентам.
export const CartProvider = ({ children }) => {
  
//Мы используем хук useState для создания состояния cartItems, 
//который будет содержать элементы в корзине. Изначально корзина пуста.
  const [cartItems, setCartItems] = useState([]);

  //Мы определяем функцию addToCart, которая принимает элемент item и добавляет его в корзину 
  //путем обновления состояния cartItems с помощью функции setCartItems. Мы используем 
  //расширение массива ([...cartItems, item]), чтобы добавить новый элемент в конец массива.
  const onAddToCart = (item) => {
    const itemId = Math.random().toString(36).substr(2,9);
    console.log(item.name, itemId)
      // Check if the item is already in the cart
  const existingItemIndex = cartItems.findIndex((cartItem) => cartItem.name === item.name);

  if (existingItemIndex !== -1) {
    // If the item already exists in the cart, update its quantity
    const updatedCartItems = [...cartItems];
    updatedCartItems[existingItemIndex].quantity += 1;
    setCartItems(updatedCartItems);
  } else {
    // If the item is not in the cart, add it with a quantity of 1
    setCartItems([...cartItems, { ...item, id: itemId, quantity: 1 }]);
  }

  };
//Мы определяем функцию removeFromCart, которая принимает идентификатор элемента itemId 
//и удаляет элемент из корзины путем фильтрации массива cartItems. Мы используем 
//метод filter, чтобы создать новый массив, исключив элемент с заданным itemId.
  const removeFromCart = (itemId) => {
    setCartItems(cartItems.filter(item => item.id !== itemId));
  };

  const incrementItem =(itemId) => {
    setCartItems(cartItems.map(item => {
        if (item.id === itemId) {
            return { ...item, quantity: item.quantity + 1 };
        }
        return item;
    })); 
  }

  const decrementItem = (itemId) => {
    setCartItems(cartItems.map(item => {
        if (item.id === itemId && item.quantity > 1) {
            return { ...item, quantity: item.quantity - 1 };
        }
        return item;
    }));
}

  // Получаем количество товара в корзине по его id
  const getQuantityInCart = (itemName) => {
    const cartItem = cartItems.find((item) => item.name === itemName);
    return cartItem ? cartItem.quantity : 0;
  };
  
//Мы определяем функцию getTotalCost, которая вычисляет общую стоимость 
//всех элементов в корзине. Мы используем метод reduce, чтобы пройти по всем элементам корзины
//и посчитать общую стоимость, умножая цену каждого элемента на его количество и суммируя результаты.
  const getTotalCost = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const getTotalQuantity = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider value={{ cartItems, onAddToCart, removeFromCart, getTotalCost, getTotalQuantity, incrementItem, decrementItem, clearCart, getQuantityInCart }}>
      {children}
    </CartContext.Provider>
  );
};