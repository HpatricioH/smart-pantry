import { House } from 'lucide-react';
import { Plus } from 'lucide-react';
import { ArrowDown } from 'lucide-react';
import { ChefHat } from 'lucide-react';

export const footerItems = [
  {
    id: '1',
    name:'home',
    link: '/',
    icon: House,
    bgColor: 'bg-nav-home',
  },
  {
    id: '2',
    name:'recipes',
    link: '/recipes',
    icon: ChefHat,
    bgColor: 'bg-nav-recipes',
  },
  {
    id: '3',
    name:'pantry',
    link: '/categories',
    icon: ArrowDown,
    bgColor: 'bg-nav-pantry',
  },
]