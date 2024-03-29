import bcrypt from 'bcryptjs';
const data = {
  users:[
    {
      name: 'Rossen',
      email: 'admin@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'Hua',
      email: 'user@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    }
  ],
  products: [
    {
      name: 'NIKE 修身上衣',
      slug: 'nike-slim-shirt',
      category: 'Shirts',
      image: '/images/p1.jpg', // 679 x 829
      price: 120,
      countInStock: 10,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 10,
      description: '高質量修身上衣',
    },
    {
      name: 'Adidas 修身上衣',
      slug: 'adidas-slim-shirt',
      category: 'Shirts',
      image: '/images/p2.jpg',
      price: 250,
      countInStock: 20,
      brand: 'Adidas',
      rating: 4.0,
      numReviews: 10,
      description: '高質量修身上衣',
    },
    {
      name: 'Puma 修身上衣',
      slug: 'puma-slim-shirt',
      category: 'Shirts',
      image: '/images/p3.jpg',
      price: 250,
      countInStock: 20,
      brand: 'Puma',
      rating: 4.0,
      numReviews: 10,
      description: '高質量修身上衣',
    },
    {
      name: 'NIKE 修身長褲',
      slug: 'nike-slim-pant',
      category: 'Pants',
      image: '/images/p4.jpg',
      price: 25,
      countInStock: 15,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 14,
      description: '高質量修身休閒褲',
    },
    {
      name: 'Adidas 修身長褲',
      slug: 'adidas-slim-pant',
      category: 'Pants',
      image: '/images/p5.jpg',
      price: 20,
      countInStock: 15,
      brand: 'Adidas',
      rating: 3.5,
      numReviews: 20,
      description: '高質量修身休閒褲',
    },
    {
      name: 'PUMA 修身長褲',
      slug: 'puma-slim-pant',
      category: 'Pants',
      image: '/images/p6.jpg',
      price: 30,
      countInStock: 10,
      brand: 'Puma',
      rating: 3,
      numReviews: 10,
      description: '高質量修身休閒褲',
    },
  ],
};
export default data;