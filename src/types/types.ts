type CartItemProps = {
  id: string;
  name: string;
  price: number;
  quantity: number;
  description?: string;
  image?: string;
};


type Cart = {
  items: CartItemProps[];
  total: number;
}



export type {
  CartItemProps,
  Cart
}