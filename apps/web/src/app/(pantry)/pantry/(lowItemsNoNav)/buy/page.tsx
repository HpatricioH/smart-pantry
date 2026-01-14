import { SearchContainer } from '../../../../components/SearchBar/SearchContainer';
import { NeedToBuyContainer } from 'apps/web/src/app/components/NeedToBuyContainer/NeedToBuyContainer';

export default async function Buy({
  searchParams,
}: {
  searchParams: Promise<{
    query: string;
  }>
}) {
  const { query } = await searchParams

  return (
    <main className="relative z-20 mx-auto w-full max-w-6xl min-h-screen p-4 pb-32 gap-16 sm:p-20 sm:pb-32">
      <div className="flex flex-col gap-4 w-full mt-10 sm:mt-0">
        <h2 className="text-4xl font-bold text-text-primary">Need To Buy</h2>
        <SearchContainer />
        <NeedToBuyContainer query={query} />
      </div>
    </main>
  );
}