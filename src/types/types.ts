
export type Product = {
  id: string;
  name: string;
  description: string;
  image?: string;
  price: number;
  stock?: number;
  bought?: number;
  review?: number;
  category?: string;
};

export type CartProduct = Product & {
  quantity: number;
};

export type Cart = {
  items: CartProduct[];
  total: number;
};

export type BannerSlide = {
  imgSrc: string;
  title: string;
  description: string;
  categories: string[];
};

export type PurchaseSummaryProps = {
  items: CartProduct[];
  total: number;
  onContinue?: () => void;
};

export type CardProps = Product & { specialStyle?: boolean };