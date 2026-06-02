import { useState } from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import RecipeCard from '../components/RecipeCard'
import RecipeDetail from '../components/RecipeDetail'
import Footer from '../components/Footer'
import { searchMeals, lookupMeal } from '../utils/api'

export default function Home() {
  const [recipes, setRecipes] = useState([])
  const [loading, setLoading] = useState(false)
  const [selected, setSelected] = useState(null)
  const [error, setError] = useState(null)

  const doSearch = async (q) => {
    setLoading(true)
    setError(null)
    try {
      const res = await searchMeals(q)
      setRecipes(res)
    } catch (err) {
      setError('Failed to fetch')
    } finally {
      setLoading(false)
    }
  }

  const openRecipe = async (id) => {
    setLoading(true)
    try {
      const meal = await lookupMeal(id)
      setSelected(meal)
    } catch (e) {
      setError('Failed to load recipe')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <Navbar onSearch={doSearch} />
      <Hero />

      <main className="max-w-5xl mx-auto px-4 py-8">
        {loading && <div className="text-sm text-gray-600">Loading…</div>}
        {error && <div className="text-sm text-red-600">{error}</div>}

        {!loading && recipes.length === 0 && (
          <div className="text-center text-gray-600">Try searching for a dish or ingredient above.</div>
        )}

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">
          {recipes.map((r) => (
            <RecipeCard key={r.idMeal} meal={r} onSelect={openRecipe} />
          ))}
        </div>
      </main>

      <Footer />

      {selected && <RecipeDetail meal={selected} onClose={() => setSelected(null)} />}
    </div>
  )
}
