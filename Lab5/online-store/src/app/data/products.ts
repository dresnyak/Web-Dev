import { Product } from '../models/product.model';

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: 'Apple iPhone 15 128GB',
    description: 'Смартфон Apple iPhone 15 с 6.1-дюймовым дисплеем Super Retina XDR, чипом A16 Bionic и системой камер 48 МП. Стильный дизайн и мощная производительность.',
    price: 389990,
    rating: 4.8,
    image: 'images/1/iphone15.jpg',
    images: [
      'images/1/iphone15.jpg',
      'images/1/iphone15 1.png',
      'images/1/iphone15 2.jpg'
    ],
    link: 'https://kaspi.kz/shop/p/apple-iphone-15-128gb-chernyi-113140218/',
    likes: 0,
    categoryId: 1
  },
  {
    id: 2,
    name: 'Samsung Galaxy S24 Ultra 256GB',
    description: 'Флагманский смартфон Samsung Galaxy S24 Ultra с процессором Snapdragon 8 Gen 3, камерой 200 МП и встроенным стилусом S Pen для максимальной продуктивности.',
    price: 599990,
    rating: 4.9,
    image: 'images/2/s24.jpg',
    images: [
      'images/2/s24.jpg',
      'images/2/s24 1.webp',
      'images/2/s24 2.jpg'
    ],
    link: 'https://kaspi.kz/shop/p/samsung-galaxy-s24-ultra-12-gb-256-gb-seryi-116291418/',
    likes: 0,
    categoryId: 1
  },
  {
    id: 13,
    name: 'Xiaomi Redmi Note 13 Pro 8/256GB',
    description: 'Смартфон Xiaomi Redmi Note 13 Pro с 6.67-дюймовым AMOLED дисплеем 120 Гц, камерой 200 МП и быстрой зарядкой 67W. Отличное соотношение цены и качества.',
    price: 149990,
    rating: 4.6,
    image: 'images/placeholder.svg',
    images: ['images/placeholder.svg'],
    link: 'https://kaspi.kz/shop/p/xiaomi-redmi-note-13-pro-8-gb-256-gb-chernyi-115934056/',
    likes: 0,
    categoryId: 1
  },
  {
    id: 14,
    name: 'Apple iPhone 14 128GB',
    description: 'Смартфон Apple iPhone 14 с чипом A15 Bionic, 6.1-дюймовым дисплеем Super Retina XDR, системой камер 12 МП и функцией обнаружения аварий.',
    price: 319990,
    rating: 4.8,
    image: 'images/placeholder.svg',
    images: ['images/placeholder.svg'],
    link: 'https://kaspi.kz/shop/p/apple-iphone-14-128gb-chernyi-106044944/',
    likes: 0,
    categoryId: 1
  },
  {
    id: 15,
    name: 'Samsung Galaxy A55 5G 8/128GB',
    description: 'Смартфон Samsung Galaxy A55 с 6.6-дюймовым Super AMOLED дисплеем, защитой IP67 от воды и пыли и аккумулятором 5000 мАч для продолжительной работы.',
    price: 189990,
    rating: 4.5,
    image: 'images/placeholder.svg',
    images: ['images/placeholder.svg'],
    link: 'https://kaspi.kz/shop/p/samsung-galaxy-a55-8-gb-128-gb-chernyi-117478862/',
    likes: 0,
    categoryId: 1
  },
  {
    id: 3,
    name: 'Apple MacBook Air 13 M2 256GB',
    description: 'Ультратонкий ноутбук Apple MacBook Air с чипом M2, 13.6-дюймовым дисплеем Liquid Retina и до 18 часов автономной работы. Идеален для работы и учёбы.',
    price: 549990,
    rating: 4.9,
    image: 'images/3/macbook air.jpg',
    images: [
      'images/3/macbook air.jpg',
      'images/3/macbook air 1.webp',
      'images/3/macbook air 2.jpg'
    ],
    link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-3-m2-8-gb-256-gb-ssd-midnight-106635992/',
    likes: 0,
    categoryId: 2
  },
  {
    id: 8,
    name: 'Apple iPad Air M1 64GB Wi-Fi',
    description: 'Планшет Apple iPad Air с чипом M1, 10.9-дюймовым дисплеем Liquid Retina и поддержкой Apple Pencil 2. Мощность для креативных задач и развлечений.',
    price: 299990,
    rating: 4.8,
    image: 'images/8/ipad air.jpg',
    images: [
      'images/8/ipad air.jpg',
      'images/8/ipad air 1.jpg',
      'images/8/ipad air 2.jpg'
    ],
    link: 'https://kaspi.kz/shop/p/apple-ipad-air-2022-10-9-64-gb-wi-fi-seryj-cosmos-103824358/',
    likes: 0,
    categoryId: 2
  },
  {
    id: 16,
    name: 'Lenovo IdeaPad 3 15ITL6',
    description: 'Ноутбук Lenovo IdeaPad 3 с процессором Intel Core i5, 15.6-дюймовым дисплеем Full HD, 8 ГБ оперативной памяти и SSD 512 ГБ для повседневных задач.',
    price: 279990,
    rating: 4.4,
    image: 'images/placeholder.svg',
    images: ['images/placeholder.svg'],
    link: 'https://kaspi.kz/shop/p/lenovo-ideapad-3-15itl6-82h8-15-6-106192854/',
    likes: 0,
    categoryId: 2
  },
  {
    id: 17,
    name: 'ASUS VivoBook 15 X1500EA',
    description: 'Ноутбук ASUS VivoBook 15 с процессором Intel Core i3, 15.6-дюймовым экраном Full HD, NanoEdge дизайном и эргономичной клавиатурой. Лёгкий и портативный.',
    price: 249990,
    rating: 4.3,
    image: 'images/placeholder.svg',
    images: ['images/placeholder.svg'],
    link: 'https://kaspi.kz/shop/p/asus-vivobook-15-x1500ea-15-6-106076466/',
    likes: 0,
    categoryId: 2
  },
  {
    id: 18,
    name: 'Samsung Galaxy Tab S9 FE 128GB',
    description: 'Планшет Samsung Galaxy Tab S9 FE с 10.9-дюймовым дисплеем, поддержкой S Pen, защитой IP68 и процессором Exynos 1380 для работы и развлечений.',
    price: 249990,
    rating: 4.6,
    image: 'images/placeholder.svg',
    images: ['images/placeholder.svg'],
    link: 'https://kaspi.kz/shop/p/samsung-galaxy-tab-s9-fe-wi-fi-6-gb-128-gb-seryj-116178598/',
    likes: 0,
    categoryId: 2
  },
  {
    id: 5,
    name: 'Apple AirPods Pro 2',
    description: 'Беспроводные наушники Apple AirPods Pro 2 с активным шумоподавлением, адаптивным звуком и зарядным кейсом USB-C. До 6 часов прослушивания.',
    price: 109990,
    rating: 4.7,
    image: 'images/5/airpods.jpg',
    images: [
      'images/5/airpods.jpg',
      'images/5/airpods 1.jpg',
      'images/5/airpods 2.jpg'
    ],
    link: 'https://kaspi.kz/shop/p/apple-airpods-pro-2-belyi-106042978/',
    likes: 0,
    categoryId: 3
  },
  {
    id: 9,
    name: 'JBL Charge 5',
    description: 'Портативная Bluetooth-колонка JBL Charge 5 с мощным звуком, защитой IP67 от воды и пыли. До 20 часов автономной работы и функция Powerbank.',
    price: 54990,
    rating: 4.7,
    image: 'images/9/jbl charge.jpg',
    images: [
      'images/9/jbl charge.jpg',
      'images/9/jbl charge 1.jpg',
      'images/9/jbl charge 2.jpg'
    ],
    link: 'https://kaspi.kz/shop/p/jbl-charge-5-chernyi-100786498/',
    likes: 0,
    categoryId: 3
  },
  {
    id: 7,
    name: 'Samsung Galaxy Watch 6 Classic 47mm',
    description: 'Умные часы Samsung Galaxy Watch 6 Classic с вращающимся безелем, датчиком BioActive и GPS. Мониторинг здоровья и фитнес-трекинг на вашем запястье.',
    price: 159990,
    rating: 4.5,
    image: 'images/7/watch6.jpg',
    images: [
      'images/7/watch6.jpg',
      'images/7/watch6 1.jpg',
      'images/7/watch6 2.jpg'
    ],
    link: 'https://kaspi.kz/shop/p/samsung-galaxy-watch-6-classic-47mm-chernyi-113349054/',
    likes: 0,
    categoryId: 3
  },
  {
    id: 19,
    name: 'Sony WH-1000XM5',
    description: 'Беспроводные наушники Sony WH-1000XM5 с лучшим в своём классе шумоподавлением, 30-часовой автономностью и невероятно чистым звуком Hi-Res Audio.',
    price: 179990,
    rating: 4.8,
    image: 'images/placeholder.svg',
    images: ['images/placeholder.svg'],
    link: 'https://kaspi.kz/shop/p/sony-wh-1000xm5-chernyi-106853990/',
    likes: 0,
    categoryId: 3
  },
  {
    id: 20,
    name: 'Samsung Galaxy Buds2 Pro',
    description: 'Беспроводные наушники Samsung Galaxy Buds2 Pro с интеллектуальным активным шумоподавлением, звуком Hi-Fi 24 бит и комфортной посадкой для долгого ношения.',
    price: 79990,
    rating: 4.5,
    image: 'images/placeholder.svg',
    images: ['images/placeholder.svg'],
    link: 'https://kaspi.kz/shop/p/samsung-galaxy-buds2-pro-chernyi-106604694/',
    likes: 0,
    categoryId: 3
  },
  {
    id: 4,
    name: 'Sony PlayStation 5',
    description: 'Игровая консоль Sony PlayStation 5 с молниеносной загрузкой благодаря SSD, поддержкой 4K и технологией тактильной обратной связи контроллера DualSense.',
    price: 299990,
    rating: 4.8,
    image: 'images/4/ps5.png',
    images: [
      'images/4/ps5.png',
      'images/4/ps5 1.webp',
      'images/4/ps5 2.jpg'
    ],
    link: 'https://kaspi.kz/shop/p/sony-playstation-5-slim-1-tb-belyi-115396498/',
    likes: 0,
    categoryId: 4
  },
  {
    id: 6,
    name: 'Dyson V15 Detect',
    description: 'Беспроводной пылесос Dyson V15 Detect с лазерной подсветкой пыли и ЖК-экраном для отображения размера частиц. До 60 минут непрерывной работы.',
    price: 349990,
    rating: 4.6,
    image: 'images/6/dyson v5.jpeg',
    images: [
      'images/6/dyson v5.jpeg',
      'images/6/dyson v5 1.webp',
      'images/6/dyson v5 2.png'
    ],
    link: 'https://kaspi.kz/shop/p/dyson-v15-detect-absolute-zheltyi-seryi-106260752/',
    likes: 0,
    categoryId: 4
  },
  {
    id: 10,
    name: 'Xiaomi Robot Vacuum X10+',
    description: 'Робот-пылесос Xiaomi Robot Vacuum X10+ с функцией влажной уборки, автоматической очисткой контейнера и лидарной навигацией LDS для точного построения карты.',
    price: 199990,
    rating: 4.6,
    image: 'images/10/xiaomi roobt.jpg',
    images: [
      'images/10/xiaomi roobt.jpg',
      'images/10/xiaomi robot 1.jpg',
      'images/10/xiaomi robot 2.webp'
    ],
    link: 'https://kaspi.kz/shop/p/xiaomi-robot-vacuum-x10-belyi-113681062/',
    likes: 0,
    categoryId: 4
  },
  {
    id: 12,
    name: 'Samsung 65" QLED 4K QE65Q60C',
    description: 'Телевизор Samsung QLED 65 дюймов с разрешением 4K, квантовым процессором, технологией Dual LED и голосовым управлением. Кинематографическое качество дома.',
    price: 329990,
    rating: 4.7,
    image: 'images/12/samsung qled.jpg',
    images: [
      'images/12/samsung qled.jpg',
      'images/12/samsung qled1.webp',
      'images/12/samsung qled 2.jpg'
    ],
    link: 'https://kaspi.kz/shop/p/samsung-qe65q60cauxce-65-165-sm-chernyi-113197746/',
    likes: 0,
    categoryId: 4
  },
  {
    id: 11,
    name: 'Nike Air Force 1 07',
    description: 'Классические кроссовки Nike Air Force 1 с кожаным верхом, амортизацией Air и прочной резиновой подошвой. Иконический дизайн на каждый день.',
    price: 42990,
    rating: 4.5,
    image: 'images/11/nike air.webp',
    images: [
      'images/11/nike air.webp',
      'images/11/nike air 1.webp',
      'images/11/nike air 2.jpg'
    ],
    link: 'https://kaspi.kz/shop/p/krossovki-nike-air-force-1-07-cw2288-111-40-belyi-101208972/',
    likes: 0,
    categoryId: 4
  }
];
