import React from 'react';
import { Box, Image, Text, Badge } from '@chakra-ui/react';

interface Product {
  productId: string;
  name: string;
  price: number;
  currency: string;
  isInStock: boolean;
  image: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p="5">
      <Image src={product.image} alt={product.name} boxSize="200px" objectFit="cover" mx="auto" />

      <Box p="6">
        <Box display="flex" alignItems="baseline">
          {product.isInStock ? (
            <Badge borderRadius="full" px="2" colorScheme="green">
              Em estoque
            </Badge>
          ) : (
            <Badge borderRadius="full" px="2" colorScheme="red">
              Fora de estoque
            </Badge>
          )}
        </Box>

        <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight">
          {product.name}
        </Box>

        <Box>
          {product.price} {product.currency}
          <Box as="span" color="gray.600" fontSize="sm">
            / unidade
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ProductCard;
