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
    name:'add',
    link: '/add-item',
    icon: Plus,
    bgColor: 'bg-nav-add',
  },
  {
    id: '3',
    name:'pantry',
    link: '/pantry',
    icon: ArrowDown,
    bgColor: 'bg-nav-pantry',
  },
  {
    id: '4',
    name:'recipes',
    link: '/recipes',
    icon: ChefHat,
    bgColor: 'bg-nav-recipes',
  },
]