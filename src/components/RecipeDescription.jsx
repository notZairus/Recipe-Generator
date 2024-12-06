

export default function RecipeDescription({ recipe }) {
  console.log(recipe);

  let ingredients = recipe.ingredients.map(ingredient => <li key={ingredient} className="text-sm list-disc list-inside pl-2 text-gray-600">{ingredient}</li>);
  let instructions = recipe.instructions.map(instruction => <li key={instruction} className="text-sm list-disc list-inside pl-2 text-gray-600">{instruction}</li>);
  
  return (
    <section className="mt-8">
      <h1 className="font-semibold text-lg">{recipe.recipe_name}</h1>
      <p className="text-xs text-gray-500 mt-1">Based on your available ingredients, I would recommend making a {recipe.recipe_name}. Here's the recipe:</p>
      <h2 className="font-semibold mt-6">Ingredients: </h2>
      <ul className="mt-2">
        { ingredients }
      </ul>
      <h2 className="font-semibold mt-6">Instructions: </h2>
      <ul className="mt-2">
        { instructions }
      </ul>
    </section>

  )
}