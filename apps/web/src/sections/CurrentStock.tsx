import { ChevronRight } from 'lucide-react';
import { CurrentStockCards } from '../app/components/Current Stock Cards/CurrentStockCards';
import Link from 'next/link';
import { SearchContainer } from '../app/components/SearchBar/SearchContainer';

export function CurrentStock() {
  return (
    <section>
      <div className="mb-4">
        <SearchContainer />
      </div>
      <CurrentStockCards />
    </section>
  )
}