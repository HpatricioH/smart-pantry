import { House } from 'lucide-react';
import { UserRound } from 'lucide-react';

export function Navbar() {
  return (
    <nav
      className="flex items-center justify-between p-4 bg-light-bg text-text-secondary"
      style={{ position: 'fixed', top: 0, width: '100%' }}
    >
      <House />
      <UserRound />
    </nav>
  )
}