# 🍕 Bella Napoli — Pizzeria Artigianale & Forno a Lenha

Aplicação web moderna e responsiva para a **Bella Napoli**, uma pizzaria artesanal napolitana com forno a lenha tradicional a 480°C.

Desenvolvida com **React 18**, **TypeScript**, **Vite**, **Tailwind CSS**, **Lucide Icons** e **Canvas Confetti**.

---

## 🍕 Funcionalidades

- **Ementa Interativa**:
  - Filtro por categorias (*Pizzas Clássicas, Pizzas Especiais, Calzones, Entradas, Sobremesas, Bebidas*).
  - Pesquisa dinâmica por nome, ingrediente ou estilo.
  - Filtros dietéticos (*Vegetariana, Picante, Ingredientes DOP, Escolha do Chef*).
- **Personalização de Pizzas**:
  - Escolha de tamanho: *Média (30cm)* ou *Familiar (38cm)* com cálculo de preço em tempo real.
  - Ingredientes extra selecionáveis (*Mozzarella di Bufala, Presunto de Parma, Azeite Trufado, etc.*).
  - Campo para notas personalizadas ao pizzaiolo.
- **Carrinho de Compras Interativo**:
  - Barra de progresso para entrega grátis (desbloqueada a partir de 20€).
  - Ajuste de quantidades, remoção de itens e cálculo detalhado de subtotal e taxa de entrega.
  - Persistência automática do carrinho no `localStorage`.
- **Checkout Completo**:
  - Opção entre **Entrega ao Domicílio** ou **Takeaway / Recolha no Restaurante**.
  - Métodos de pagamento portugueses: **MB WAY**, **Multibanco**, **Cartão de Crédito** e **Dinheiro na Entrega** (com troco).
  - Ecrã de confirmação com animação de confetes, código de encomenda e tempo estimado.
- **Reserva de Mesas**:
  - Modal com seleção de data, hora, número de pessoas e pedidos especiais.
- **História & Forno a Lenha**:
  - Apresentação da maturação lenta 72h, farinha Caputo 00 e ingredientes DOP.
- **Horários & Contactos**:
  - Morada no Porto, ligação telefónica direta e botão de WhatsApp.

---

## 🚀 Instalação e Execução

### 1. Instalar Dependências

```bash
cd /Users/marcosgil/Documents/sites/pizzaria
npm install
```

### 2. Iniciar Servidor de Desenvolvimento

```bash
npm run dev
```

Abre em [http://localhost:5174](http://localhost:5174).

### 3. Build de Produção

```bash
npm run build
```

---

## 📄 Licença

MIT

