
import { SearchBar } from '../../../components/SearchBar/SearchBar';

export default function LowItems() {
  return (
    <main className="min-h-screen p-4 pb-32 gap-16 sm:p-20 sm:pb-32">
      <div className="flex flex-col gap-4 mt-12 w-full max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900">Low Items</h2>
        <SearchBar />
      </div>
    </main>
  );
}