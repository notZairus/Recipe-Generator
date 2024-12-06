import { useState } from 'react';

import Header from '/src/components/Header.jsx';
import InputGroup from '/src/components/InputGroup.jsx';
import IngredientContainer from '/src/components/IngredientContainer.jsx';

import { getRecipe } from './ai/getRecipe';
import RecipeDescription from './components/RecipeDescription';

function App() {

  const [ingredients, setIngredients] = useState([]);
  const [recipe, setRecipe] = useState(null);

  function handleAddIngredient(ingredient) {
    let newIngredient = document.getElementById('ingredient_input').value;
    document.getElementById('ingredient_input').value = "";
    let newIngredients = [...ingredients, newIngredient];
    setIngredients(newIngredients);
  }

  async function generateRecipe() {
    let recipe = await getRecipe(ingredients);
    setRecipe(recipe);
  }

  return (
    <div className='bg-white w-1/4 border pb-8'>
      <Header />
      <div className='px-8'>
        <InputGroup handleAddIngredient={handleAddIngredient}/>
        <IngredientContainer generateRecipe={generateRecipe}  ingredients={ingredients} />
        {recipe && <RecipeDescription recipe={recipe} />}
      </div>
    </div>
  )
  
}

export default App
