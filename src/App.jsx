import { useState } from 'react';

import Header from '/src/components/Header.jsx';
import InputGroup from '/src/components/InputGroup.jsx';
import IngredientContainer from '/src/components/IngredientContainer.jsx';

function App() {

  const [ingredients, setIngredients] = useState([]);

  function handleAddIngredient(ingredient) {
    let newIngredient = document.getElementById('ingredient_input').value;
    document.getElementById('ingredient_input').value = "";
    let newIngredients = [...ingredients, newIngredient];
    setIngredients(newIngredients);
  }

  return (
    <div className='bg-white w-1/4 border pb-8'>
      <Header />
      <div className='px-8'>
        <InputGroup handleAddIngredient={handleAddIngredient}/>
        <IngredientContainer  ingredients={ingredients} />
      </div>
    </div>
  )
  
}

export default App
