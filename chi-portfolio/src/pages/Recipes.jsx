import recipes from "../data/recipes";
import RecipeCard from "../components/RecipeCard";

export default function Recipes() {
  return (
    <div className="min-h-screen bg-cream text-frostbite p-8">
      <h1 className="text-3xl font-semibold mb-8">Recipes</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
}
