import React, { useState, useEffect, createContext } from 'react';
import './App.scss';
import Main from '@components/pages/Main';

export const Context = createContext();

function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);    
  const [value, setValue] = useState(''); 
  const [filtered, setFiltered] = useState(items);

  useEffect(() => {
    fetch("https://62def4949c47ff309e7f3904.mockapi.io/Coctails")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },         
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])  

  useEffect(() => {
    setFiltered(items)
  }, [items])

  useEffect(() => {
    const filteredCoctails = [...items].filter (item => item.name.toLowerCase().includes(value.toLowerCase()))
    setFiltered(filteredCoctails)
  }, [value])

   
  function categoryAll() {    
    setFiltered(items)  
  }

  function categoryNew() {
    const New = [...items].filter(item => item.date === 'new')
    setFiltered(New)
  }

  function categorySweet() {
    const Sweet = [...items].filter(item => item.sweet === 'yes')
    setFiltered(Sweet)
  }
  function categoryTop() {
    const Top = [...items].filter(item => item.rating >= 4)
    setFiltered(Top)
  }
  function categoryStrong() {
    const Strong = [...items].filter(item => item.alcohol >= 25)
    setFiltered(Strong)
  }  

  return (        
    <Context.Provider value={{error, isLoaded, filtered, setValue, categoryAll, categoryNew, categorySweet, categoryTop, categoryStrong}}>
      <Main />
    </Context.Provider>      
  );
}

export default App;