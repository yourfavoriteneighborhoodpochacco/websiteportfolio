export default function RecipeCard({ recipe }) {
  return (
    <div className="w-72 p-5 bg-white/80 border border-frostbite/20 rounded-sm shadow-sm">
      <h3 className="text-lg font-semibold mb-1 text-frostbite">
        {recipe.title}
      </h3>

      <p className="text-sm italic text-frostbite/70 mb-3">
        {recipe.op}
      </p>

      <div className="mb-3">
        <h4 className="text-sm font-semibold mb-1">Ingredients</h4>
        <ul className="list-disc list-inside text-sm text-frostbite/80">
          {recipe.ingredients.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="text-sm font-semibold mb-1">Instructions</h4>
        <ol className="list-decimal list-inside text-sm text-frostbite/80">
          {recipe.instructions.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ol>
      </div>
    </div>
  );
}
