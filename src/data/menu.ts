import { MenuItem, Topping } from '../types';

export const EXTRA_TOPPINGS: Topping[] = [
  { id: 't-mozzarella', name: 'Mozzarella di Bufala extra', price: 2.50 },
  { id: 't-parma', name: 'Presunto de Parma DOP', price: 3.00 },
  { id: 't-trufa', name: 'Azeite de Trufa Branca', price: 2.00 },
  { id: 't-gorgonzola', name: 'Gorgonzola Cremoso', price: 2.00 },
  { id: 't-cogumelos', name: 'Cogumelos Portobello frescos', price: 1.50 },
  { id: 't-nduja', name: 'Nduja Picante da Calábria', price: 2.50 },
  { id: 't-azeitonas', name: 'Azeitonas Pretas Kalamata', price: 1.00 },
  { id: 't-manjericao', name: 'Manjericão Fresco do Horto', price: 0.80 },
];

export const MENU_ITEMS: MenuItem[] = [
  // Pizzas Clássicas
  {
    id: 'margherita-verace',
    name: 'Margherita Verace DOP',
    italianName: 'Pizza Margherita Napoletana',
    category: 'Pizzas Clássicas',
    description: 'A rainha das pizzas napolitanas. Molho de tomate San Marzano DOP, Mozzarella di Bufala Campana, manjericão fresco e azeite virgem extra biológico.',
    ingredients: ['Tomate San Marzano DOP', 'Mozzarella di Bufala', 'Manjericão fresco', 'Azeite virgem extra'],
    price: 11.50,
    priceFamiliar: 16.50,
    image: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?auto=format&fit=crop&w=800&q=80',
    tags: ['DOP', 'Vegetariana', 'Mais Pedida'],
    availableSizes: ['Média (30cm)', 'Familiar (38cm)']
  },
  {
    id: 'diavola-calabria',
    name: 'Diavola Calábria',
    italianName: 'Pizza alla Diavola con Spianata',
    category: 'Pizzas Clássicas',
    description: 'Tomate San Marzano, mozzarella fior di latte, salame picante da Calábria, pimenta calabresa e orégãos frescos.',
    ingredients: ['Tomate San Marzano', 'Fior di latte', 'Salame picante Calábria', 'Pimenta calabresa'],
    price: 13.00,
    priceFamiliar: 18.50,
    image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=800&q=80',
    tags: ['Picante', 'Mais Pedida'],
    availableSizes: ['Média (30cm)', 'Familiar (38cm)']
  },
  {
    id: 'quattro-formaggi',
    name: 'Quattro Formaggi Cremosa',
    italianName: 'Pizza ai Quattro Formaggi',
    category: 'Pizzas Clássicas',
    description: 'Base branca com Mozzarella fior di latte, Gorgonzola DOP dolce, Parmigiano Reggiano 24 meses e Ricotta artesanal aromatizada.',
    ingredients: ['Fior di latte', 'Gorgonzola DOP', 'Parmigiano Reggiano 24m', 'Ricotta fresca'],
    price: 13.50,
    priceFamiliar: 19.00,
    image: 'https://images.unsplash.com/photo-1573821663912-569905455b1c?auto=format&fit=crop&w=800&q=80',
    tags: ['Vegetariana', 'DOP'],
    availableSizes: ['Média (30cm)', 'Familiar (38cm)']
  },
  {
    id: 'capricciosa',
    name: 'Capricciosa Tradizionale',
    italianName: 'Pizza Capricciosa Romana',
    category: 'Pizzas Clássicas',
    description: 'Tomate San Marzano, mozzarella, fiambre rústico italiano, cogumelos castanhos salteados, corações de alcachofra e azeitonas pretas.',
    ingredients: ['Tomate San Marzano', 'Mozzarella', 'Fiambre rústico', 'Cogumelos', 'Alcachofra', 'Azeitonas'],
    price: 14.00,
    priceFamiliar: 19.50,
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80',
    availableSizes: ['Média (30cm)', 'Familiar (38cm)']
  },

  // Pizzas Especiais / Gourmet
  {
    id: 'tartufo-burrata',
    name: 'Tartufo & Burrata Pugliese',
    italianName: 'Pizza con Crema di Tartufo e Burrata',
    category: 'Pizzas Especiais',
    description: 'Creme de trufa negra, mozzarella fior di latte, cogumelos porcini frescos, uma burrata inteira de Puglia cremosa e lascas de trufa.',
    ingredients: ['Creme de trufa negra', 'Burrata de Puglia', 'Cogumelos porcini', 'Azeite trufado'],
    price: 17.50,
    priceFamiliar: 23.50,
    image: 'https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?auto=format&fit=crop&w=800&q=80',
    tags: ['Chef', 'DOP', 'Mais Pedida'],
    availableSizes: ['Média (30cm)', 'Familiar (38cm)']
  },
  {
    id: 'parma-rucola',
    name: 'Prosciutto di Parma & Rúcula',
    italianName: 'Pizza Prosciutto di Parma 24 Mesi',
    category: 'Pizzas Especiais',
    description: 'Molho de tomate San Marzano, mozzarella, presunto de Parma curado 24 meses adicionado após o forno, rúcula selvagem fresca e lascas de Parmigiano.',
    ingredients: ['Tomate San Marzano', 'Mozzarella', 'Presunto de Parma 24m', 'Rúcula selvagem', 'Parmigiano Reggiano'],
    price: 16.00,
    priceFamiliar: 22.00,
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=80',
    tags: ['DOP', 'Chef'],
    availableSizes: ['Média (30cm)', 'Familiar (38cm)']
  },
  {
    id: 'nduja-miele',
    name: 'Nduja Piccante & Mel Picante',
    italianName: 'Pizza Nduja Calabrese e Miele Piccante',
    category: 'Pizzas Especiais',
    description: 'Nduja artesanal da Calábria, queijo Stracciatella fresco, tomate San Marzano e fio de mel de urze infundido com malagueta.',
    ingredients: ['Nduja da Calábria', 'Stracciatella fresca', 'Mel picante artesanal', 'Tomate San Marzano'],
    price: 15.50,
    priceFamiliar: 21.00,
    image: 'https://images.unsplash.com/photo-1541745537411-b8046dc6d66c?auto=format&fit=crop&w=800&q=80',
    tags: ['Picante', 'Chef'],
    availableSizes: ['Média (30cm)', 'Familiar (38cm)']
  },

  // Calzones
  {
    id: 'calzone-napoletano',
    name: 'Calzone Classico Napoletano',
    italianName: 'Calzone Ripieno al Forno',
    category: 'Calzones',
    description: 'Massa dobrada e assada em forno de lenha, recheada com ricotta cremosa, mozzarella, salame Napoli, molho de tomate e pimenta preta.',
    ingredients: ['Ricotta fresca', 'Mozzarella', 'Salame Napoli', 'Tomate San Marzano', 'Manjericão'],
    price: 13.50,
    image: 'https://images.unsplash.com/photo-1536964549204-cce9eab227bd?auto=format&fit=crop&w=800&q=80',
    tags: ['Mais Pedida']
  },
  {
    id: 'calzone-vegetariano',
    name: 'Calzone Ortolana',
    italianName: 'Calzone con Verdure Grigliate',
    category: 'Calzones',
    description: 'Recheado com beringela grelhada, curgete, pimentos assados a lenha, cogumelos frescos, ricotta e pesto de manjericão genovês.',
    ingredients: ['Legumes grelhados a lenha', 'Ricotta', 'Pesto genovês', 'Mozzarella'],
    price: 13.00,
    image: 'https://images.unsplash.com/photo-1627626775846-122b778965ae?auto=format&fit=crop&w=800&q=80',
    tags: ['Vegetariana']
  },

  // Entradas
  {
    id: 'burrata-pugliese',
    name: 'Burrata di Puglia com Pesto',
    italianName: 'Burrata Artigianale con Pomodorini',
    category: 'Entradas',
    description: 'Burrata fresca de 200g servida com tomates cherry confitados em azeite virgem extra, pesto de manjericão e foccacia quente feita na hora.',
    ingredients: ['Burrata de Puglia 200g', 'Tomate cherry confitado', 'Pesto artesanal', 'Focaccia a lenha'],
    price: 9.50,
    image: 'https://images.unsplash.com/photo-1592417817098-8f3d6910985c?auto=format&fit=crop&w=800&q=80',
    tags: ['Vegetariana', 'DOP', 'Mais Pedida']
  },
  {
    id: 'bruschetta-pomodoro',
    name: 'Bruschetta al Pomodoro & Aglio',
    italianName: 'Tris di Bruschette al Forno',
    category: 'Entradas',
    description: 'Três fatias de pão rústico de fermentação lenta tostadas a lenha com tomate picado marinado em alho, manjericão e azeite DOP.',
    ingredients: ['Pão rústico de fermentação lenta', 'Tomate fresco', 'Alho', 'Manjericão', 'Azeite DOP'],
    price: 6.00,
    image: 'https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?auto=format&fit=crop&w=800&q=80',
    tags: ['Vegetariana']
  },

  // Sobremesas
  {
    id: 'tiramisu-della-nonna',
    name: 'Tiramisù Tradizionale della Nonna',
    italianName: 'Vero Tiramisù al Mascarpone',
    category: 'Sobremesas',
    description: 'Receita autêntica italiana com biscoitos savoiardi embebidos em café espresso illy, creme fofo de mascarpone fresco e cacau puro amargo.',
    ingredients: ['Mascarpone fresco', 'Café espresso illy', 'Savoiardi italianos', 'Cacau amargo'],
    price: 5.50,
    image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=800&q=80',
    tags: ['Mais Pedida', 'Chef']
  },
  {
    id: 'calzone-nutella',
    name: 'Calzoncino alla Nutella & Pistachio',
    italianName: 'Mini Calzone caldo con Nutella',
    category: 'Sobremesas',
    description: 'Mini calzone quente assado a lenha recheado com Nutella cremosa, pedaços de avelã tostada e polvilhado com pistácio de Bronte.',
    ingredients: ['Massa de pizza a lenha', 'Nutella', 'Pistácio de Bronte', 'Açúcar em pó'],
    price: 6.50,
    image: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=800&q=80',
    tags: ['Chef']
  },

  // Bebidas
  {
    id: 'birra-moretti',
    name: 'Cerveja Birra Moretti 33cl',
    category: 'Bebidas',
    description: 'Cerveja italiana autêntica de baixa fermentação, sabor fresco e notas maltadas.',
    ingredients: ['Malte italiano', 'Lúpulo selecionado'],
    price: 3.20,
    image: 'https://images.unsplash.com/photo-1608270191599-231a473a216f?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'san-pellegrino',
    name: 'Água com Gás San Pellegrino 50cl',
    category: 'Bebidas',
    description: 'Água mineral natural gaseificada das termas de San Pellegrino Terme.',
    ingredients: ['Água mineral italiana'],
    price: 2.50,
    image: 'https://images.unsplash.com/photo-1527661591475-527312dd65f5?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'vinho-chianti',
    name: 'Vinho Tinto Chianti DOCG 75cl',
    category: 'Bebidas',
    description: 'Vinho tinto toscano seco, aroma floral e taninos aveludados ideais para harmonizar com pizzas.',
    ingredients: ['Uvas Sangiovese da Toscana'],
    price: 18.00,
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=800&q=80'
  }
];

export const PIZZERIA_INFO = {
  name: 'Bella Napoli',
  tagline: 'Pizzeria Artigianale & Forno a Legna',
  phone: '+351 220 123 456',
  whatsapp: '+351 912 345 678',
  address: 'Rua de Santa Catarina, 412, Porto, Portugal',
  openingHours: 'Terça a Domingo: 12h00 - 15h00 | 19h00 - 23h30 (Segunda: Encerrado)',
  deliveryFee: 2.50,
  freeDeliveryThreshold: 20.00,
  averagePrepTime: '25-35 min'
};

