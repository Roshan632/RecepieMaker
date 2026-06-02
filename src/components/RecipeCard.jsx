export default function RecipeCard({ meal, onSelect }) {
  return (
    <div className="border rounded overflow-hidden shadow-sm hover:shadow-md cursor-pointer" onClick={() => onSelect(meal.idMeal)}>
      <img src={meal.strMealThumb} alt={meal.strMeal} className="w-full h-44 object-cover" />
      <div className="p-3">
        <h3 className="font-semibold">{meal.strMeal}</h3>
        <p className="text-sm text-gray-600 mt-1">{meal.strArea || ''} • {meal.strCategory || ''}</p>
      </div>
    </div>
  )
}
