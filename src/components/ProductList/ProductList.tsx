import React from 'react';
import { SimpleGrid, Box } from '@chakra-ui/react';
import ProductCard from '../ProductCard/ProductCard';

interface Product {
  productId: string;
  name: string;
  price: number;
  currency: string;
  isInStock: boolean;
  image: string;
}

const products: Product[] = [
  {
    productId: '1',
    name: 'Produto A',
    price: 100,
    currency: 'BRL',
    isInStock: true,
    image: 'https://via.placeholder.com/200'
  },
  {
    productId: '2',
    name: 'Produto B',
    price: 200,
    currency: 'BRL',
    isInStock: false,
    image: 'https://via.placeholder.com/200'
  },
  {
    productId: '3',
    name: 'Produto C',
    price: 150,
    currency: 'BRL',
    isInStock: true,
    image: 'https://via.placeholder.com/200'
  },
  
];

const ProductList: React.FC = () => {
  return (
    <Box p="5">
      <SimpleGrid columns={[1, null, 3]} spacing="5">
        {products.map(product => (
          <ProductCard key={product.productId} product={product} />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default ProductList;
