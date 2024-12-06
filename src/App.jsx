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

  async function generateRecipe()  {
    let recipe = await getRecipe(ingredients);
    setRecipe(recipe);
  }

  return (
    <div className='bg-white lg:w-1/3 border pb-8 rounded-md sm:w-1/2'>
      <Header />
      <main className='px-8'>
        <InputGroup handleAddIngredient={handleAddIngredient}/>
        <IngredientContainer generateRecipe={generateRecipe} ingredients={ingredients} />
        {recipe && <RecipeDescription recipe={recipe} />}
      </main>
    </div>
  )
  
}

export default App
