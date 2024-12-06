
export default function IngredientContainer({ ingredients, generateRecipe }) {

  if (ingredients.length == 0) {
    return;
  }

  let ingredientElement = ingredients.map((ingredient) => <li>{ingredient}</li>);

  return (
     <div className="mt-5">
        <h1 className="font-semibold text-lg">Ingredients on hand: </h1>
        <ul className="list-disc list-inside text-xs flex flex-col gap-2 mt-2 pl-2 text-gray-500 mb-6">
          {ingredientElement}
        </ul>
        {ingredients.length > 3 && <div className="bg-gray-100 min-h-12 rounded-xl p-4 px-6 flex items-center">
          <div>
            <h3 className="m-0 text-sm font-semibold">Ready for a recipe?</h3>
            <p className="text-xs text-gray-500">Generate a recipe from your list of ingredients</p>
          </div>
          
          <button onClick={generateRecipe} className="bg-red-500 rounded text-white text-xs h-7 w-24">Get a recipe</button>
        </div>}
     </div>
  )
}