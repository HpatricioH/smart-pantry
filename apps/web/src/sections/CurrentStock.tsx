import { CurrentStockCards } from '../app/components/Current Stock Cards/CurrentStockCards';
import { SearchContainer } from '../app/components/SearchBar/SearchContainer';

export async function CurrentStock({
  query,
  sort
}: {
  query: string,
  sort: string
}) {
  return (
    <section>
      <div className='mb-2'>
        <SearchContainer />
      </div>
      <CurrentStockCards query={query} sort={sort} />
    </section>
  )
}