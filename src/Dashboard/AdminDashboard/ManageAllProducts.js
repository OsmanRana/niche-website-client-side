
import React from 'react';
import useProductCollection from '../../hooks/useProductCollection';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, Container, Typography, Box, CircularProgress } from '@mui/material';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));




const ManageAllProducts = () => {
    const { products } = useProductCollection();
    const handleDeleteProduct = id => {

        const proceed = window.confirm('Are sure? You want to delete?')
        if (proceed) {

            const url = `https://mighty-bastion-98054.herokuapp.com/products/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Product Deleted successfully');
                        window.location.reload();
                    }
                });
        };

    }


    return (
        <Container>
            <Box sx={{ borderRadius: 5, my: 3, boxShadow: 3 }}>
                <Typography sx={{ color: 'info.main', py: 3 }} variant="h3" gutterBottom component="div">
                Manage all Products: {products?.length}
                </Typography>
            </Box>
            {
                !products.length && <CircularProgress />
            }
            <TableContainer component={Paper}>
                <Table aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Product Name</StyledTableCell>
                            <StyledTableCell align="right">Available Quantity</StyledTableCell>
                            <StyledTableCell align="right">Price</StyledTableCell>
                            <StyledTableCell align="right">Delete Product</StyledTableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {products.map((product) => (
                            <StyledTableRow key={product._id}>
                                <StyledTableCell component="th" scope="row">
                                    {product.productName}
                                </StyledTableCell>
                                <StyledTableCell align="right">{product.availableQuantity}</StyledTableCell>
                                <StyledTableCell align="right">{product.price}</StyledTableCell>
                                <StyledTableCell align="right"><Button onClick={() => handleDeleteProduct(product._id)} variant="contained" sx={{ bgcolor: 'error.main' }}>Delete</Button></StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

        </Container>
    );
};

export default ManageAllProducts;