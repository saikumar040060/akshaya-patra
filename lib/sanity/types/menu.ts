export interface MenuItem {
    id: string;
    name: string;
    description?: string;
    price: string | number;
    category: string;
    spicyLevel?: number;
    vegetarian?: boolean;
    vegan?: boolean;
    glutenFree?: boolean;
    popular?: boolean;
    chefSpecial?: boolean;
    image?: string;
  }
  
  export interface Category {
    id: string;
    name: string;
    icon: string;
    description?: string;
  }
  
  export interface MenuSection {
    title: string;
    items: MenuItem[];
  }
  
  export type DietaryFilter = 'vegetarian' | 'vegan' | 'glutenFree';