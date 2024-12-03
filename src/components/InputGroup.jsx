

export default function InputGroup({ handleAddIngredient }) {
  console.log(handleAddIngredient);
  return (
    <div className="text-sm flex items-center justify-center gap-2 mt-8">
      <input type="text" id="ingredient_input" className="rounded border border-gray-300 w-2/3 h-6 px-2 outline-none" placeholder="e.g. Oregano"/>
      <button onClick={handleAddIngredient} className="text-white bg-gray-900 px-2 h-6 whitespace-nowrap overflow-hidden text-ellipsis rounded">+ Add Ingredient</button>
    </div>
  )
}