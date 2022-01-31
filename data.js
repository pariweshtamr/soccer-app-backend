import bcrypt from 'bcryptjs'

export const products = [
  {
    name: 'Nike Mercurial Superfly 8 Elite FG',
    brand: 'Nike',
    category: 'Outdoor',
    image: '/images/product1.jpg',
    price: 330,
    countInStock: 10,
    rating: 4.5,
    numReviews: 10,
    description:
      'Unlock the blueprint for speed with the Nike Mercurial Superfly 8 Elite FG. Colour-blocking at the sides and forefoot highlights key areas for precise dribbling, passing and shooting. The innovative plate provides instant responsiveness for quicker cuts at high speeds.',
  },
  {
    name: 'Nike Mercurial Vapor 14 Academy IC',
    brand: 'Nike',
    category: 'Indoor',
    image: '/images/product2.jpg',
    price: 130,
    countInStock: 20,
    rating: 3.5,
    numReviews: 5,
    description:
      'Unlock the blueprint for speed with the Nike Mercurial Vapor 14 Academy IC. Colour-blocking at the sides and forefoot highlights key areas for precise dribbling, passing and shooting. Plus, a grippy texture throughout the upper lets you take total control of the game.',
  },
  {
    name: 'Nike Mercurial Superfly 8 Elite KM FG',
    brand: 'Nike',
    category: 'Outdoor',
    image: '/images/product3.jpg',
    price: 350,
    countInStock: 30,
    rating: 3.5,
    numReviews: 5,
    description: `Embody Kylian Mbappé's relentless pace with fiery design details.A Flyknit upper wraps your foot in lightweight fabric that moves with you when it's time to turn up the heat.`,
  },
  {
    name: 'Nike Mercurial Superfly 8 Academy TF',
    brand: 'Nike',
    category: 'Indoor',
    image: '/images/product4.jpg',
    price: 140,
    countInStock: 9,
    rating: 3.5,
    numReviews: 5,
    description:
      'Designed for turf, the Nike Mercurial Superfly 8 Academy TF features a unique design that brings together the essential components of speed to deliver optimal touch and traction.',
  },
  {
    name: 'Nike Mercurial Superfly 8 Pro AG',
    brand: 'Nike',
    category: 'Outdoor',
    image: '/images/product5.jpg',
    price: 220,
    countInStock: 0,
    rating: 3.5,
    numReviews: 5,
    description:
      'The Nike Mercurial Superfly 8 Pro AG features a new look with specialised components to let you play your fastest from start to finish.A stretchy collar provides extra support, and the innovative plate provides instant responsiveness for quicker cuts at high speeds.',
  },
  {
    name: 'Nike Lunar Gato II IC',
    brand: 'Nike',
    category: 'Indoor',
    image: '/images/product7.jpg',
    price: 160,
    countInStock: 50,
    rating: 3.5,
    numReviews: 5,
    description:
      'The Nike Lunar Gato II is ideal for the small-sided game. Soft leather at the forefoot has a smooth, natural feel for precision strikes. Lunarlon cushioning feels springy and responsive, while the rubber tread gives you traction for quick cuts on indoor surfaces.',
  },

  {
    name: 'Nike Mercurial Vapor 14 Pro FG',
    brand: 'Nike',
    category: 'Outdoor',
    image: '/images/product9.jpg',
    price: 200,
    countInStock: 32,
    rating: 3.5,
    numReviews: 5,
    description:
      'The Nike Mercurial Vapor 14 Pro FG features a new look with specialised components to let you play your fastest from start to finish.A cushioned insole gives you non-stop comfort, and the innovative plate provides instant responsiveness for quicker cuts at high speeds.',
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
