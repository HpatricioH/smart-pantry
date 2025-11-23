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
    <main className="relative z-20 mx-auto w-full max-w-6xl min-h-screen p-4 pb-32 gap-16 sm:p-20 sm:pb-32">
      <div className="flex flex-col gap-4 w-fulls mt-10 sm:mt-0">
        <h2 className="text-4xl font-bold text-text-primary">Pantry Categories</h2>
        <SearchContainer />
        <div className='flex justify-between gap-2'>
        </div>
        <CategoriesCards query={query} />
      </div>
    </main>
  );
}