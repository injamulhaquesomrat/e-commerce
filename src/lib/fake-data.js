import {
  Apple,
  Cake,
  Candy,
  Grape,
  Ham,
  Lollipop,
  Milk,
  Pizza,
  Salad,
  Soup,
} from "lucide-react";

export const catergoriesItems = [
  {
    id: 1,
    name: "Home",
    link: "/homepage",
  },
  {
    id: 2,
    name: "Organic",
    link: "/orgnaic",
  },
  {
    id: 3,
    name: "Herbs",
    link: "/herbs",
  },
  {
    id: 4,
    name: "Snacks",
    link: "/snacks",
  },
  {
    id: 5,
    name: "Beverages",
    link: "/beverages",
  },
  {
    id: 6,
    name: "Bakeries",
    link: "/bakeries",
  },
  {
    id: 7,
    name: "Canned Foods",
    link: "/canned-foods",
  },
  {
    id: 8,
    name: "Dairy",
    link: "/dairy",
  },
];
export const navItems = [
  {
    id: 1,
    name: "Home",
    link: "/homepage",
  },
  {
    id: 2,
    name: "Stores",
    link: "/stores",
  },
  {
    id: 3,
    name: "Blog",
    link: "/blog",
  },
  {
    id: 4,
    name: "FAQs",
    link: "/faqs",
  },
  {
    id: 5,
    name: "Contact",
    link: "/contact",
  },
  {
    id: 6,
    name: "About Us",
    link: "/about-us",
  },
  {
    id: 7,
    name: "Wishlist",
    link: "/wishlist",
  },
  {
    id: 8,
    name: "Order Tracking",
    link: "/orders/tracking",
  },
];

export const fakeCartData = [
  {
    avatar: "https://github.com/shadcn.png",
    avatarFallback: "CN",
    title: "Product A",
    vendor: "Vendor A",
    price: 20.0,
    buyingQuantity: 1,
    total: 20.0,
  },
  {
    avatar: "https://github.com/johndoe.png",
    avatarFallback: "JD",
    title: "Product B",
    vendor: "Vendor B",
    price: 35.0,
    buyingQuantity: 2,
    total: 70.0,
  },
  {
    avatar: "https://github.com/janedoe.png",
    avatarFallback: "JD",
    title: "Product C",
    vendor: "Vendor C",
    price: 15.0,
    buyingQuantity: 3,
    total: 45.0,
  },
  {
    avatar: "https://github.com/annasmith.png",
    avatarFallback: "AS",
    title: "Product D",
    vendor: "Vendor D",
    price: 50.0,
    buyingQuantity: 1,
    total: 50.0,
  },
  {
    avatar: "https://github.com/boblee.png",
    avatarFallback: "BL",
    title: "Product E",
    vendor: "Vendor E",
    price: 100.0,
    buyingQuantity: 4,
    total: 400.0,
  },
];

export const fakeWishlistData = [
  {
    id: "1",
    avatar: "https://placehold.co/50x50/png", // Avatar placeholder
    avatarFallback: "W", // Fallback letter if the avatar fails
    title: "Wireless Earbuds",
    vendor: "Tech Store",
    price: 99.99,
    stock_status: "In Stock",
  },
  {
    id: "2",
    avatar: "https://placehold.co/50x50/png",
    avatarFallback: "L",
    title: "Laptop Stand",
    vendor: "Office Supplies",
    price: 49.99,
    stock_status: "Low Stock",
  },
  {
    id: "3",
    avatar: "https://placehold.co/50x50/png",
    avatarFallback: "S",
    title: "Smartphone",
    vendor: "Mobile Hub",
    price: 799.99,
    stock_status: "Out of Stock",
  },
];

export const fakeCategoriesData = [
  {
    id: 1,
    icon: Apple,
    title: "Product A",
  },
  {
    id: 2,
    icon: Cake,
    title: "Product B",
  },
  {
    id: 3,
    icon: Lollipop,
    title: "Product C",
  },
  {
    id: 4,
    icon: Milk,
    title: "Product D",
  },
  {
    id: 5,
    icon: Pizza,
    title: "Product E",
  },
  {
    id: 6,
    icon: Grape,
    title: "Product F",
  },
  {
    id: 7,
    icon: Soup,
    title: "Product G",
  },
  {
    id: 8,
    icon: Ham,
    title: "Product H",
  },
  {
    id: 9,
    icon: Salad,
    title: "Product I",
  },
  {
    id: 10,
    icon: Candy,
    title: "Product J",
  },
];

export const dummyFeaturedBrands = [
  {
    id: 1,
    thumbnail: "https://via.placeholder.com/600x400.png?text=Brand+One",
    brandName: "Brand One",
    brandOffer: "Up to 50% off on all items",
  },
  {
    id: 2,
    thumbnail: "https://via.placeholder.com/600x400.png?text=Brand+Two",
    brandName: "Brand Two",
    brandOffer: "Buy 1 Get 1 Free",
  },
  {
    id: 3,
    thumbnail: "https://via.placeholder.com/600x400.png?text=Brand+Three",
    brandName: "Brand Three",
    brandOffer: "30% off on your first purchase",
  },
  {
    id: 4,
    thumbnail: "https://via.placeholder.com/600x400.png?text=Brand+Four",
    brandName: "Brand Four",
    brandOffer: "Up to 40% off on selected items",
  },
  {
    id: 5,
    thumbnail: "https://via.placeholder.com/600x400.png?text=Brand+Five",
    brandName: "Brand Five",
    brandOffer: "Free shipping on orders over $100",
  },
];

export const fakeArticlesData = [
  {
    id: 1,
    headline: "Exploring the Future of AI in Healthcare",
    content:
      "Artificial Intelligence is rapidly changing the healthcare industry, offering new ways to diagnose and treat diseases more effectively. This article explores the various applications and future possibilities of AI in healthcare.",
    published_by: "John Doe",
    subject: "Technology",
    published_date: "2024-09-01",
  },
  {
    id: 2,
    headline: "The Importance of Mental Health Awareness",
    content:
      "Mental health awareness is crucial in today's fast-paced world. This article discusses the importance of mental well-being and offers strategies to maintain mental health through mindfulness and other practices.",
    published_by: "Jane Smith",
    subject: "Health",
    published_date: "2024-08-15",
  },
  {
    id: 3,
    headline: "How Climate Change is Affecting Global Agriculture",
    content:
      "Climate change is having a profound impact on global agriculture. From changing weather patterns to extreme droughts, this article explores how farmers are coping with these challenges and what the future holds.",
    published_by: "Emily Johnson",
    subject: "Environment",
    published_date: "2024-07-22",
  },
  {
    id: 4,
    headline: "The Rise of Remote Work: Pros and Cons",
    content:
      "Remote work has become increasingly popular, especially after the COVID-19 pandemic. This article looks at the benefits and challenges of remote work for both employees and employers.",
    published_by: "Michael Brown",
    subject: "Business",
    published_date: "2024-06-30",
  },
  {
    id: 5,
    headline: "The Evolution of Smartphones in the Last Decade",
    content:
      "Smartphones have become an integral part of modern life. This article traces the evolution of smartphones over the last decade, focusing on key technological advancements and their impact on society.",
    published_by: "Sarah Wilson",
    subject: "Technology",
    published_date: "2024-05-18",
  },
];

export const fakeProductCategory = [
  {
    id: 1,
    category: "Electronics",
    icon: "FiMonitor",
    subcategory: [
      { id: 1.1, name: "Laptops" },
      { id: 1.2, name: "Smartphones" },
      { id: 1.3, name: "Cameras" },
    ],
  },
  {
    id: 2,
    category: "Clothing",
    icon: "FiShoppingBag",
    subcategory: [
      { id: 2.1, name: "Men's Clothing" },
      { id: 2.2, name: "Women's Clothing" },
      { id: 2.3, name: "Kids' Clothing" },
    ],
  },
  {
    id: 3,
    category: "Home Appliances",
    icon: "FiFridge",
    subcategory: [
      { id: 3.1, name: "Refrigerators" },
      { id: 3.2, name: "Washing Machines" },
      { id: 3.3, name: "Microwaves" },
    ],
  },
  {
    id: 4,
    category: "Books",
    icon: "FiBook",
    subcategory: [
      { id: 4.1, name: "Fiction" },
      { id: 4.2, name: "Non-fiction" },
      { id: 4.3, name: "Comics" },
    ],
  },
  {
    id: 5,
    category: "Beauty & Personal Care",
    icon: "FiHeart",
    subcategory: [
      { id: 5.1, name: "Skincare" },
      { id: 5.2, name: "Makeup" },
      { id: 5.3, name: "Haircare" },
    ],
  },
  {
    id: 6,
    category: "Sports & Outdoors",
    icon: "FiActivity",
    subcategory: [
      { id: 6.1, name: "Fitness Equipment" },
      { id: 6.2, name: "Outdoor Gear" },
      { id: 6.3, name: "Team Sports" },
    ],
  },
  {
    id: 7,
    category: "Toys & Games",
    icon: "FiPlay",
    subcategory: [
      { id: 7.1, name: "Action Figures" },
      { id: 7.2, name: "Board Games" },
      { id: 7.3, name: "Puzzles" },
    ],
  },
  {
    id: 8,
    category: "Automotive",
    icon: "FiTruck",
    subcategory: [
      { id: 8.1, name: "Car Accessories" },
      { id: 8.2, name: "Motorcycle Parts" },
      { id: 8.3, name: "Tools & Equipment" },
    ],
  },
  {
    id: 9,
    category: "Furniture",
    icon: "FiChair",
    subcategory: [
      { id: 9.1, name: "Living Room" },
      { id: 9.2, name: "Bedroom" },
      { id: 9.3, name: "Office" },
    ],
  },
  {
    id: 10,
    category: "Music",
    icon: "FiMusic",
    subcategory: [
      { id: 10.1, name: "Instruments" },
      { id: 10.2, name: "Audio Equipment" },
      { id: 10.3, name: "Sheet Music" },
    ],
  },
];
