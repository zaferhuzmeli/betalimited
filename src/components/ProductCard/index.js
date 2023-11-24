// components/ProductCard.js
import { Card, CardMedia, CardContent, Typography, Button } from '@material-ui/core';

function ProductCard({ product }) {
  return (
    <Card>
      <CardMedia
        image={product.image}
        title={product.name}
      />
      <CardContent>
        <Typography variant="h5">{product.name}</Typography>
        <Typography variant="body2">{product.price}</Typography>
        <Button variant="contained" color="primary">Sepete Ekle</Button>
      </CardContent>
    </Card>
  );
}

export default ProductCard;
