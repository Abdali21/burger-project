export interface OpenNavProps {
  openNav: () => void;
}

export interface CloseNavProps {
  closeNav: () => void;
  showNav: boolean;
}

export interface BurgerCardProps {
  title: string;
  image: string;
  reviews: string;
  price: string;
}

export interface TeamProps {
  image:string;
  name:string;
  position:string
}
