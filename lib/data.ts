import {
  BedJPG,
  BigBed,
  Mirror,
  Property1,
  Property2,
  Property3,
  Property4,
  Review1,
  Review2,
  Post1,
  Post2,
  Post3,
  Post4,
  Emilia,
  Micheal,
  William,
  Lee,
  Office,
  Phone,
  Chat,
} from "@/assets";

export const Links = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Services",
    link: "/services",
  },
  {
    name: "About",
    link: "/about",
  },
  {
    name: "Properties",
    link: "/careers",
  },
  {
    name: "Blog",
    link: "/blog",
  },
  {
    name: "Contact Us",
    link: "/contact",
  },
];

export const NavLinks = [
  {
    name: "Services",
    link: "/services",
  },
  {
    name: "About",
    link: "/about",
  },
  {
    name: "Properties",
    link: "/properties",
  },
  {
    name: "Blog",
    link: "/blog",
  },
];

export const Sliderimages = [BedJPG, BigBed, Mirror];

export const services = [
  {
    title: "PROPERTY VALUATION",
    description:
      "Get an accurate valuation of your property with our expert team.",
  },
  {
    title: "PROPERTY MANAGEMENT",
    description:
      "We offer full-service property management to help you maximize your investment.",
  },
  {
    title: "INVESTMENT OPPORTUNITIES",
    description:
      "Our team can help you identify and invest in profitable real estate opportunities.",
  },
];

export const properties = [
  {
    name: "Luxury Condo",
    amount: "5750000",
    address: "456, Park Avenue, New York, NY",
    bedrooms: 3,
    bathrooms: 2,
    image: Property1,
    space: 2200,
    description:
      "Located in the heart of Manhattan, this luxury condo features 3 bedrooms, 2 bathrooms, and 2,200 sqft of living space. With floor-to-ceiling windows, the apartment is filled with natural light and offers breathtaking views of the city skyline. The open-concept living and dining area is perfect for entertaining, while the gourmet kitchen features top-of-the-line appliances and a large island. The spacious master suite boasts a luxurious marble bathroom and a walk-in closet. Building amenities include a fitness center, spa, and 24-hour concierge service.",
    otherImages: [
      Property2,
      Property3,
      Property4,
      Property2,
      Property3,
      Property4,
    ],
  },
  {
    name: "Mountain Retreat",
    amount: "7900000",
    address: "789 Aspen Ridge Road, Aspen CO",
    bedrooms: 3,
    bathrooms: 2,
    image: Property2,
    space: 2200,
    description:
      "Located in the heart of Manhattan, this luxury condo features 3 bedrooms, 2 bathrooms, and 2,200 sqft of living space. With floor-to-ceiling windows, the apartment is filled with natural light and offers breathtaking views of the city skyline. The open-concept living and dining area is perfect for entertaining, while the gourmet kitchen features top-of-the-line appliances and a large island. The spacious master suite boasts a luxurious marble bathroom and a walk-in closet. Building amenities include a fitness center, spa, and 24-hour concierge service.",
    otherImages: [
      Property1,
      Property3,
      Property4,
      Property1,
      Property3,
      Property4,
    ],
  },
  {
    name: "Downtown Penthouse",
    amount: "3250000",
    address: "1010 Brickell Avenue, Miami, FL",
    bedrooms: 5,
    bathrooms: 6,
    image: Property3,
    space: 6000,
    description:
      "Located in the heart of Manhattan, this luxury condo features 3 bedrooms, 2 bathrooms, and 2,200 sqft of living space. With floor-to-ceiling windows, the apartment is filled with natural light and offers breathtaking views of the city skyline. The open-concept living and dining area is perfect for entertaining, while the gourmet kitchen features top-of-the-line appliances and a large island. The spacious master suite boasts a luxurious marble bathroom and a walk-in closet. Building amenities include a fitness center, spa, and 24-hour concierge service.",
    otherImages: [
      Property1,
      Property2,
      Property4,
      Property1,
      Property2,
      Property4,
    ],
  },
  {
    name: "Oceanfront Estate",
    amount: "12500000",
    address: "123 View Ocean Drive Malibu, CA",
    bedrooms: 6,
    bathrooms: 4,
    image: Property4,
    space: 8500,
    description:
      "Located in the heart of Manhattan, this luxury condo features 3 bedrooms, 2 bathrooms, and 2,200 sqft of living space. With floor-to-ceiling windows, the apartment is filled with natural light and offers breathtaking views of the city skyline. The open-concept living and dining area is perfect for entertaining, while the gourmet kitchen features top-of-the-line appliances and a large island. The spacious master suite boasts a luxurious marble bathroom and a walk-in closet. Building amenities include a fitness center, spa, and 24-hour concierge service.",
    otherImages: [
      Property1,
      Property2,
      Property3,
      Property1,
      Property2,
      Property3,
    ],
  },
];

export const reviews = [
  {
    name: "John Smith",
    review:
      "Working with Realty was a pleasure from start to finish. Their team is knowledgeable, professional, and dedicated to helping you find the perfect property. Highly recommend!",
    image: Review1,
  },
  {
    name: "Jane Doe",
    review:
      "I couldn't be happier with the service I received from Realty. They made the buying process smooth and stress-free, and I couldn't be happier with my new home. Thank you!",
    image: Review2,
  },
];

export const blogPosts = [
  {
    id: 1,
    title: "Creating a cozy living room and tricks",
    description:
      "Make your living room the perfect place to relax and entertain with our tips for creating a cozy place",
    image: Post1,
    tags: ["Home Decor", "Living Room"],
  },
  {
    id: 2,
    title: "Add a Pop of Colour with a Statement Armchair",
    description:
      "Brighten up any space with a bold yellow armchair and add a pop of colour to your decor with our expert advice",
    image: Post2,
    tags: ["Home Decor", "Furniture"],
  },
  {
    id: 3,
    title: "Sleek and Modern: A virtual tour of a contemporary home",
    description:
      "Take a virtual tour of your modern stunning home, inisde and out and experience the slick style and innovative features for yourself",
    image: Post3,
    tags: ["Home Tours", "Real State"],
  },
  {
    id: 4,
    title: "Revamp your kitchen: Simple Upgrades for a new look",
    description:
      "Transform your kitchen without breaking the bank with our easy upgrades and give your space a fresh new look.",
    image: Post4,
    tags: ["Home Upgrades", "Kitchen"],
  },
];

export const FooterLink = [
  {
    title: "template",
    link1: {
      name: "Company",
      link: "/company",
    },
    link2: {
      name: "Services",
      link: "/services",
    },
    link3: {
      name: "Properties",
      link: "/properties",
    },
    link4: {
      name: "Blog",
      link: "/blog",
    },
    link5: {
      name: "Contact Us",
      link: "/contact",
    },
  },
  {
    title: "info",
    link1: {
      name: "Style Guide",
      link: "/style",
    },
    link2: {
      name: "license",
      link: "/license",
    },
    link3: {
      name: "changelog",
      link: "/properties",
    },
    link4: {
      name: "404",
      link: "/blog",
    },
    link5: {
      name: "Protected",
      link: "/contact",
    },
  },
  {
    title: "social",
    link1: {
      name: "Instagram",
      link: "/style",
    },
    link2: {
      name: "Facebook",
      link: "/license",
    },
    link3: {
      name: "Twitter",
      link: "/properties",
    },
    link4: {
      name: "LinkedIn",
      link: "/blog",
    },
  },
];

export const team = [
  {
    image: Emilia,
    name: "Emily Rodriguez",
    position: "Sales Manager",
    instagramLink: "https://instagram.com",
    twitterLink: "https://twitter.com",
    facebookLink: "https://facebook.com",
  },
  {
    image: Micheal,
    name: "Michael Johnson",
    position: "CEO",
    instagramLink: "https://instagram.com",
    twitterLink: "https://twitter.com",
    facebookLink: "https://facebook.com",
  },
  {
    image: William,
    name: "William Brown",
    position: "Senior Real Estate Agent",
    instagramLink: "https://instagram.com",
    twitterLink: "https://twitter.com",
    facebookLink: "https://facebook.com",
  },
  {
    image: Lee,
    name: "Samantha Lee",
    position: "Administrative Assistant",
    instagramLink: "https://instagram.com",
    twitterLink: "https://twitter.com",
    facebookLink: "https://facebook.com",
  },
];

export const contact = [
  { img: Chat, name: "Email", val: "info@example.com" },
  { img: Phone, name: "Phone", val: "+12 345 678 9900" },
  { img: Office, name: "Office", val: "1234 Harrison Avenue, New York NY" },
];

export const tags = [
  "home tours",
  "living room",
  "furniture",
  "kitchen",
  "home upgrades",
  "real estates",
  "home decor",
];
