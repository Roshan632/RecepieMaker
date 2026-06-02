export default function RecipeDetail({ meal, onClose }) {
  if (!meal) return null

  // Collect ingredients
  const ingredients = []
  for (let i = 1; i <= 20; i++) {
    const ing = meal[`strIngredient${i}`]
    const measure = meal[`strMeasure${i}`]
    if (ing && ing.trim()) ingredients.push(`${measure ? measure + ' ' : ''}${ing}`)
  }

  return (
    <div className="fixed inset-0 bg-black/40 flex items-start justify-center p-6 z-30">
      <div className="bg-white max-w-3xl w-full rounded shadow-lg overflow-auto max-h-[90vh]">
        <div className="p-4 border-b flex justify-between items-start">
          <h2 className="text-2xl font-bold">{meal.strMeal}</h2>
          <button onClick={onClose} className="text-sm text-gray-600">Close</button>
        </div>
        <div className="p-4 grid md:grid-cols-3 gap-4">
          <div className="md:col-span-1">
            <img src={meal.strMealThumb} alt="" className="w-full rounded" />
            <p className="mt-2 text-sm text-gray-600">{meal.strCategory} • {meal.strArea}</p>
            <h4 className="mt-4 font-semibold">Ingredients</h4>
            <ul className="list-disc list-inside mt-2 text-sm">
              {ingredients.map((it, idx) => <li key={idx}>{it}</li>)}
            </ul>
          </div>
          <div className="md:col-span-2">
            <h4 className="font-semibold">Instructions</h4>
            <ol className="list-decimal list-inside mt-2 text-sm text-gray-800  mb-4 font-medium">
              {meal.strInstructions.split('\n').filter(line => line.trim()).map((line, idx) => (
                <li key={idx} className="mb-2">{line.trim()}</li>
              ))}
            </ol>
            {/* <p className="mt-2 whitespace-pre-line text-sm text-gray-800">{meal.strInstructions}</p> */}
          </div>
        </div>
      </div>
    </div>
  )
}
