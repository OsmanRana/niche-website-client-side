import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Grid } from '@mui/material';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
    const { productName, description, image, price, _id } = product;
    
    return (
        <Grid item xs={12} md={4}>
            <Card sx={{ maxWidth: 345, p: 3 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        image={image}
                        alt=""
                    />
                    <CardContent>
                        <Typography sx={{ textAlign: 'left', color: 'primary.main', mb: 3 }} gutterBottom variant="h5" component="div">
                            {productName.slice(0, 40)}...
                        </Typography>
                        <hr />
                        <Typography sx={{ textAlign: 'left', color: 'text.secondary', my: 3 }} variant="body2" color="text.secondary">
                            {description.slice(0, 200)}...
                        </Typography>
                        <hr />
                        <Typography sx={{ textAlign: 'center', fontWeight: 'bold', color: 'red', my: 3 }} gutterBottom variant="h5" component="div">
                            Price: ${price}.00
                        </Typography>
                        <hr />
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Link style={{textDecoration: 'none', width: '100%'}} to={`/purchasePage/${_id}`}><Button sx={{ width: '100%' }} variant="contained">Buy Now</Button></Link>
                </CardActions>
            </Card>
        </Grid>
    );
};

export default Product;