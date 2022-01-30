import bcrypt from 'bcryptjs'

export const products = [
  {
    _id: '1',
    name: 'Nike Mercurial Superfly',
    category: 'Nike',
    image: '/images/product1.png',
    price: 320,
    countInStock: 10,
    rating: 4.5,
    numReviews: 10,
    description: 'high quality product',
  },
  {
    _id: '2',
    name: 'Adidas Boot',
    category: 'Adidas',
    image: '/images/product2.png',
    price: 300,
    countInStock: 20,
    rating: 4,
    numReviews: 12,
    description: 'high quality product',
  },
  {
    _id: '3',
    name: 'Puma boot',
    category: 'Puma',
    image: '/images/product4.png',
    price: 260,
    countInStock: 0,
    rating: 3.5,
    numReviews: 5,
    description: 'high quality product',
  },
]

export const users = [
  {
    name: 'Pariwesh',
    email: 'admin@example.com',
    password: bcrypt.hashSync('1234', 8),
    isAdmin: true,
  },
  {
    name: 'Ronaldo',
    email: 'user@example.com',
    password: bcrypt.hashSync('1234', 8),
    isAdmin: false,
  },
]
