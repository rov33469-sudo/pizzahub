// Mock data for Rony’s Pizza Hub (frontend-only)
// NOTE: This is mocked data for UI-only preview. No backend integration yet.

export const BRAND = {
  name: "Rony’s Pizza Hub",
  tagline: "Crafting Happiness, One Slice at a Time!",
  since: 2015,
  phone: "+91 90000 12345",
  whatsapp: "+91 90000 12345",
  instagram: "@ronys.pizza.hub",
  address: "XYZ Street, Andheri West, Mumbai",
};

export const IMAGES = {
  heroChef: "https://images.unsplash.com/photo-1572552635104-daf938e0aa1f",
  heroFire: "https://images.unsplash.com/photo-1622880833523-7cf1c0bd4296",
  pizzaClose1: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002",
  pizzaClose2: "https://images.unsplash.com/photo-1598023696416-0193a0bcd302",
  garlicBread: "https://images.unsplash.com/photo-1573140401552-3fab0b24306f",
  tiramisu: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9",
};

export const CATEGORIES = [
  { key: "classic", label: "Classic Pizzas" },
  { key: "specials", label: "Specials" },
  { key: "sides", label: "Sides" },
  { key: "drinks", label: "Drinks" },
  { key: "desserts", label: "Desserts" },
];

export const MENU = {
  classic: [
    { id: "m1", name: "Margherita", price: 299, img: IMAGES.pizzaClose1, desc: "San Marzano tomatoes, fior di latte, basil." },
    { id: "m2", name: "Farmhouse", price: 349, img: IMAGES.pizzaClose2, desc: "Onions, capsicum, mushrooms, sweet corn." },
    { id: "m3", name: "Pepperoni", price: 399, img: IMAGES.pizzaClose2, desc: "Spicy pepperoni, mozzarella, oregano." },
  ],
  specials: [
    { id: "s1", name: "Truffle Funghi", price: 499, img: IMAGES.pizzaClose1, desc: "Wild mushrooms, truffle oil, parmesan." },
    { id: "s2", name: "Bombay Heat", price: 459, img: IMAGES.pizzaClose2, desc: "Tandoori chicken, jalapeño, chilli oil." },
  ],
  sides: [
    { id: "sd1", name: "Garlic Bread Basket", price: 159, img: IMAGES.garlicBread, desc: "Buttery, herby, perfectly toasted." },
    { id: "sd2", name: "Cheesy Dip", price: 79, img: IMAGES.pizzaClose1, desc: "Silky, indulgent cheese dip." },
  ],
  drinks: [
    { id: "d1", name: "Homemade Lemonade", price: 99, img: IMAGES.pizzaClose1, desc: "Fresh, zesty and cool." },
    { id: "d2", name: "Iced Tea (Peach)", price: 129, img: IMAGES.pizzaClose2, desc: "Lightly sweet, aromatic." },
  ],
  desserts: [
    { id: "ds1", name: "Classic Tiramisu", price: 249, img: IMAGES.tiramisu, desc: "Cocoa, mascarpone, espresso." },
  ],
};

export const GROWTH = {
  stats: [
    { label: "Happy Customers", value: 1200, suffix: "+" },
    { label: "Top Rated on FoodZone", value: 4.9, suffix: "⭐" },
    { label: "Pizza Varieties", value: 32, suffix: "+" },
    { label: "Cheese Melted / year", value: 2, suffix: " tons" },
  ],
  sales: [
    { year: 2019, value: 120 },
    { year: 2020, value: 150 },
    { year: 2021, value: 210 },
    { year: 2022, value: 280 },
    { year: 2023, value: 360 },
    { year: 2024, value: 450 },
    { year: 2025, value: 560 },
  ],
};

export const REVIEWS = [
  {
    id: "r1",
    name: "Ananya M.",
    rating: 5,
    text: "Best wood-fired crust in Mumbai. The truffle funghi blew my mind!",
    avatar: "https://i.pravatar.cc/100?img=12",
  },
  {
    id: "r2",
    name: "Rahul S.",
    rating: 5,
    text: "Super fresh ingredients and warm service. Totally recommend!",
    avatar: "https://i.pravatar.cc/100?img=5",
  },
  {
    id: "r3",
    name: "Sana K.",
    rating: 4,
    text: "Margherita is perfection. Simple and so flavorful.",
    avatar: "https://i.pravatar.cc/100?img=8",
  },
  {
    id: "r4",
    name: "Karan P.",
    rating: 5,
    text: "Ordered for a party, everyone loved the Bombay Heat!",
    avatar: "https://i.pravatar.cc/100?img=18",
  },
];

export const TODAY_SPECIAL = {
  name: "Wood-Fired Burrata Margherita",
  price: 529,
  desc: "Silky burrata on blistered San Marzano base, basil oil drizzle.",
  img: IMAGES.pizzaClose1,
};

export const MUSIC = {
  enable: true,
  // Royalty-free soft Italian instrumental sample (public demo link). Can be replaced later.
  url: "https://cdn.pixabay.com/download/audio/2021/08/08/audio_6c8435c3a7.mp3?filename=memories-113172.mp3",
};
