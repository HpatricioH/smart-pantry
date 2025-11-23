import { RecipeCardsContainer } from "../../components/RecipeCardContainer/RecipeCardContainer";
import { SearchBar } from "../../components/SearchBar/SearchBar";

export default function RecipesPage() {
  return (
    <main className="relative z-20 mx-auto w-full max-w-6xl min-h-screen p-4 pb-32 gap-16 sm:p-20 sm:pb-32">
      <div className="flex flex-col gap-4 w-full mt-10 sm:mt-0">
        <h2 className="text-4xl font-bold text-gray-900">Recipes</h2>
        {/* TODO: FIX THIS */}
        <SearchBar />
        <RecipeCardsContainer />
      </div>
    </main>
  );
}