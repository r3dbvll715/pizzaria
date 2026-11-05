export type Category = 
  | 'Todas'
  | 'Pizzas Clássicas'
  | 'Pizzas Especiais'
  | 'Calzones'
  | 'Entradas'
  | 'Sobremesas'
  | 'Bebidas';

export type PizzaSize = 'Média (30cm)' | 'Familiar (38cm)';

export interface Topping {
  id: string;
  name: string;
  price: number;
}

export interface MenuItem {
  id: string;
  name: string;
  italianName?: string;
  category: 'Pizzas Clássicas' | 'Pizzas Especiais' | 'Calzones' | 'Entradas' | 'Sobremesas' | 'Bebidas';
  description: string;
  ingredients: string[];
  price: number;
  priceFamiliar?: number;
  image: string;
  tags?: ('Vegetariana' | 'Picante' | 'DOP' | 'Chef' | 'Mais Pedida')[];
  availableSizes?: PizzaSize[];
}

export interface CartItem {
  id: string; // unique item instance id
  menuItem: MenuItem;
  size?: PizzaSize;
  extraToppings: Topping[];
  notes?: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
}

export interface OrderForm {
  type: 'delivery' | 'takeaway';
  customerName: string;
  phone: string;
  address?: string;
  nif?: string;
  notes?: string;
  paymentMethod: 'MB WAY' | 'Multibanco' | 'Cartão de Crédito' | 'Dinheiro na Entrega';
}

export interface ReservationForm {
  name: string;
  phone: string;
  email: string;
  date: string;
  time: string;
  guests: number;
  notes?: string;
}

