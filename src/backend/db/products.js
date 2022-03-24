import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    title: "Daily Appointment Poket Black Book ",
    subtitle: "TRU RED",
    rating: 4.5,
    price: 360,
    discount: 10,
    discountedPrice: 300,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde dolorem quisquam",
    images: [
      "/assets/products/daily-apointment-pocket-book/daily-apointment-pocket-book-1.webp",
      "/assets/products/daily-apointment-pocket-book/daily-apointment-pocket-book-2.webp",
    ],
    categoryName: "PocketBook",
    size: "small",
    brand: "TRU-RED",
    inStock: true,
    quantity: 10,
    slug: "daily-apointment-pocket-book",
  },
  {
    _id: uuid(),
    title: " Black N' Red Business Notebook",
    subtitle: "Black N' Red",
    rating: 4.0,
    price: 650,
    discount: 10,
    discountedPrice: 630,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde dolorem quisquam",
    images: [
      "/assets/products/black-n-red-business-notebook/black-n-red-business-notebook-1.webp",
      "/assets/products/black-n-red-business-notebook/black-n-red-business-notebook-2.webp",
    ],
    categoryName: "Notebook",
    size: "medium",
    brand: "Black-N-Red",
    inStock: true,
    quantity: 10,
    slug: "black-n-red-business-notebook",
  },
  {
    _id: uuid(),
    title: " Black N' Red Professional Diary (with Spiral)",
    subtitle: "Black N' Red",
    rating: 4.0,
    price: 780,
    discount: 10,
    discountedPrice: 699,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde dolorem quisquam",
    images: [
      "/assets/products/black-n-red-professional-notebook/black-n-red-professional-notebook-1.webp",
      "/assets/products/black-n-red-professional-notebook/black-n-red-professional-notebook-2.webp",
    ],
    categoryName: "Diary",
    size: "medium",
    brand: "Black-N-Red",
    inStock: true,
    quantity: 10,
    slug: "black-n-red-professional-notebook",
  },
  {
    _id: uuid(),
    title: " Black N' Red Professional Notebook",
    subtitle: "Black N' Red",
    rating: 3.5,
    price: 780,
    discount: 10,
    discountedPrice: 699,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde dolorem quisquam",
    images: [
      "/assets/products/black-n-red-professional-notebook-without-spiral/black-n-red-professional-notebook-without-spiral-1.webp",
      "/assets/products/black-n-red-professional-notebook-without-spiral/black-n-red-professional-notebook-without-spiral-2.webp",
    ],
    categoryName: "Notebook",
    size: "medium",
    brand: "Black-N-Red",
    inStock: true,
    quantity: 10,
    slug: "black-n-red-professional-notebook-without-spiral",
  },
  {
    _id: uuid(),
    title: "Cambridge Limited Professional Notebook",
    subtitle: "Cambridge",
    rating: 2.5,
    price: 1299,
    discount: 25,
    discountedPrice: 999,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde dolorem quisquam",
    images: [
      "/assets/products/cambridge-professional-notebook/cambridge-professional-notebook-1.webp",
      "/assets/products/cambridge-professional-notebook/cambridge-professional-notebook-2.webp",
    ],
    categoryName: "Notebook",
    size: "medium",
    brand: "Cambridge",
    inStock: true,
    quantity: 10,
    slug: "cambridge-professional-notebook",
  },
  {
    _id: uuid(),
    title: "JAM Paper Hardcover Notebook with Elastic ",
    subtitle: "JAM Paper",
    rating: 3.5,
    price: 499,
    discount: 10,
    discountedPrice: 449,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde dolorem quisquam",
    images: [
      "/assets/products/jam-paper-hardcover-notebook/jam-paper-hardcover-notebook-1.webp",
      "/assets/products/jam-paper-hardcover-notebook/jam-paper-hardcover-notebook-2.webp",
    ],
    categoryName: "Notebook",
    size: "large",
    brand: "JAM-Paper",
    inStock: true,
    quantity: 10,
    slug: "jam-paper-hardcover-notebook",
  },
  {
    _id: uuid(),
    title: "JAM Paper® Hardcover Notebook with Design ",
    subtitle: "JAM Paper",
    rating: 4,
    price: 599,
    discount: 10,
    discountedPrice: 559,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde dolorem quisquam",
    images: [
      "/assets/products/jam-paper-hardcover-notebook-with-design/jam-paper-hardcover-notebook-with-design-1.webp",
      "/assets/products/jam-paper-hardcover-notebook-with-design/jam-paper-hardcover-notebook-with-design-2.webp",
    ],
    categoryName: "Notebook",
    size: "medium",
    brand: "JAM-Paper",
    inStock: true,
    quantity: 10,
    slug: "jam-paper-hardcover-notebook-with-design",
  },
  {
    _id: uuid(),
    title: "Moleskine Cahier Cardboard Diary",
    subtitle: "Moleskine",
    rating: 5,
    price: 799,
    discount: 10,
    discountedPrice: 699,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde dolorem quisquam",
    images: [
      "/assets/products/moleskine-cahier-cardboard-diary/moleskine-cahier-cardboard-diary-1.webp",
      "/assets/products/moleskine-cahier-cardboard-diary/moleskine-cahier-cardboard-diary-2.webp",
    ],
    categoryName: "Diary",
    size: "large",
    brand: "Moleskine",
    inStock: true,
    quantity: 10,
    slug: "moleskine-cahier-cardboard-diary",
  },
  {
    _id: uuid(),
    title: "Moleskine Evernote Pocket Soft Pocket Book",
    subtitle: "Moleskine",
    rating: 5,
    price: 599,
    discount: 30,
    discountedPrice: 799,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde dolorem quisquam",
    images: [
      "/assets/products/moleskine-evernote-pocket-soft-pocket-book/moleskine-evernote-pocket-soft-pocket-book-1.webp",
      "/assets/products/moleskine-evernote-pocket-soft-pocket-book/moleskine-evernote-pocket-soft-pocket-book-2.webp",
    ],
    categoryName: "PocketBook",
    size: "medium",
    brand: "Moleskine",
    inStock: true,
    quantity: 10,
    slug: "moleskine-evernote-pocket-soft-pocket-book",
  },
  {
    _id: uuid(),
    title: "Moleskine Pocket Subject Professional Pocket Book",
    subtitle: "Moleskine",
    rating: 3.5,
    price: 399,
    discount: 30,
    discountedPrice: 259,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde dolorem quisquam",
    images: [
      "/assets/products/moleskine-pocket-subject-professional-poket-book/moleskine-pocket-subject-professional-poket-book-1.webp",
      "/assets/products/moleskine-pocket-subject-professional-poket-book/moleskine-pocket-subject-professional-poket-book-2.webp",
    ],
    categoryName: "PocketBook",
    size: "small",
    brand: "Moleskine",
    inStock: true,
    quantity: 10,
    slug: "moleskine-pocket-subject-professional-poket-book",
  },
  {
    _id: uuid(),
    title: "Rocketbook Fusion Smart Notebook",
    subtitle: "Rocketbook",
    rating: 3.5,
    price: 1499,
    discount: 5,
    discountedPrice: 1299,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde dolorem quisquam",
    images: [
      "/assets/products/rocketbook-fusion-smart-notebook/rocketbook-fusion-smart-notebook-1.webp",
      "/assets/products/rocketbook-fusion-smart-notebook/rocketbook-fusion-smart-notebook-2.webp",
    ],
    categoryName: "Notebook",
    size: "medium",
    brand: "Rocketbook",
    inStock: true,
    quantity: 10,
    slug: "rocketbook-fusion-smart-notebook",
  },
  {
    _id: uuid(),
    title: "Rocketbook Fusion Smart Notebook (Chocolate)",
    subtitle: "Rocketbook",
    rating: 4.5,
    price: 1599,
    discount: 5,
    discountedPrice: 1399,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde dolorem quisquam",
    images: [
      "/assets/products/rocketbook-fusion-smart-notebook-chocolate/rocketbook-fusion-smart-notebook-chocolate-1.webp",
      "/assets/products/rocketbook-fusion-smart-notebook-chocolate/rocketbook-fusion-smart-notebook-chocolate-2.webp",
    ],
    categoryName: "Notebook",
    size: "medium",
    brand: "Rocketbook",
    inStock: true,
    quantity: 10,
    slug: "rocketbook-fusion-smart-notebook-chocolate",
  },
  {
    _id: uuid(),
    title: "Rocketbook Wave Smart Reusable Notebook",
    subtitle: "Rocketbook",
    rating: 4.5,
    price: 1999,
    discount: 15,
    discountedPrice: 1799,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde dolorem quisquam",
    images: [
      "/assets/products/rocketbook-wave-smart-reusable-notebook/rocketbook-wave-smart-reusable-notebook-1.webp",
      "/assets/products/rocketbook-wave-smart-reusable-notebook/rocketbook-wave-smart-reusable-notebook-2.webp",
    ],
    categoryName: "Notebook",
    size: "large",
    brand: "Rocketbook",
    inStock: true,
    quantity: 10,
    slug: "rocketbook-wave-smart-reusable-notebook",
  },
  {
    _id: uuid(),
    title: "Staples Accel 3-Subject Notebook",
    subtitle: "Staple",
    rating: 4,
    price: 1999,
    discount: 15,
    discountedPrice: 1799,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde dolorem quisquam",
    images: [
      "/assets/products/staples-accel-3-subject-notebook/staples-accel-3-subject-notebook-1.webp",
      "/assets/products/staples-accel-3-subject-notebook/staples-accel-3-subject-notebook-2.webp",
    ],
    categoryName: "SubjectNotebooks",
    size: "large",
    brand: "Staple",
    inStock: true,
    quantity: 10,
    slug: "staples-accel-3-subject-notebook",
  },
  {
    _id: uuid(),
    title: "Staples Hard Journal/Diary",
    subtitle: "Staple",
    rating: 4.5,
    price: 299,
    discount: 15,
    discountedPrice: 249,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde dolorem quisquam",
    images: [
      "/assets/products/staples-hard-journal/staples-hard-journal-1.webp",
      "/assets/products/staples-hard-journal/staples-hard-journal-2.webp",
    ],
    categoryName: "Diary",
    size: "large",
    brand: "Staple",
    inStock: true,
    quantity: 10,
    slug: "staples-hard-journal",
  },
  {
    _id: uuid(),
    title: "TRU RED™ Large Explore Notebook",
    subtitle: "TRU RED",
    rating: 4,
    price: 659,
    discount: 10,
    discountedPrice: 599,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde dolorem quisquam",
    images: [
      "/assets/products/tru-red-large-explore-notebook/tru-red-large-explore-notebook-1.webp",
      "/assets/products/tru-red-large-explore-notebook/tru-red-large-explore-notebook-2.webp",
    ],
    categoryName: "Notebook",
    size: "large",
    brand: "TRU-RED",
    inStock: true,
    quantity: 10,
    slug: "tru-red-large-explore-notebook",
  },
  {
    _id: uuid(),
    title: "TRU RED™ Premium 5-Division Notebook",
    subtitle: "TRU RED",
    rating: 4,
    price: 699,
    discount: 20,
    discountedPrice: 599,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde dolorem quisquam",
    images: [
      "/assets/products/tru-red-premium-5-subject-notebook/tru-red-premium-5-subject-notebook-1.webp",
      "/assets/products/tru-red-premium-5-subject-notebook/tru-red-premium-5-subject-notebook-2.webp",
    ],
    categoryName: "Notebook",
    size: "medium",
    brand: "TRU-RED",
    inStock: true,
    quantity: 10,
    slug: "tru-red-premium-5-subject-notebook",
  },
  {
    _id: uuid(),
    title: "TRU RED™ Small Hard Cover Ruled Diary",
    subtitle: "TRU RED",
    rating: 4,
    price: 899,
    discount: 20,
    discountedPrice: 699,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde dolorem quisquam",
    images: [
      "/assets/products/tru-red-small-hard-cover-ruled-diary/tru-red-small-hard-cover-ruled-diary-1.webp",
      "/assets/products/tru-red-small-hard-cover-ruled-diary/tru-red-small-hard-cover-ruled-diary-2.webp",
    ],
    categoryName: "Diary",
    size: "small",
    brand: "TRU-RED",
    inStock: true,
    quantity: 10,
    slug: "tru-red-small-hard-cover-ruled-diary",
  },
];
