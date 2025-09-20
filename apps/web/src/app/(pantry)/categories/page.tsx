import { CategoriesCards } from '../../components/CategoriesCards/CategoriesCards';
import { SearchContainer } from '../../components/SearchBar/SearchContainer';

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{
    query: string;
  }>
}) {
  const { query } = await searchParams

  return (
    <main className="min-h-screen p-4 pb-32 gap-16 sm:p-20 sm:pb-32">
      <div className="flex flex-col gap-4 mt-12 w-full max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-text-primary">Pantry Categories</h2>
        <SearchContainer />
        <div className='flex justify-between gap-2'>
        </div>
        <CategoriesCards query={query} />
      </div>
    </main>
  );
}