
import React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, Container, Typography, Box } from '@mui/material';
import useOrderCollection from '../../hooks/useOrderCollection';

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




const ManageAllOrders = () => {

    const { orders } = useOrderCollection();
    const handleDeleteOrder = id => {

        const proceed = window.confirm('Are sure? You want to delete?')
        if (proceed) {

            const url = `https://mighty-bastion-98054.herokuapp.com/orders/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Order Deleted successfully');
                        window.location.reload();
                    }
                });
        };
    };
    const handleStatusUpdate = id => {
        const url = `https://mighty-bastion-98054.herokuapp.com/orders/${id}`
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(orders)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('Order send for shipping')
                    window.location.reload();
                }
                console.log('update', data)
            })
    }


    return (
        <Container>
            <Box sx={{ borderRadius: 5, my: 3, boxShadow: 3 }}>
                <Typography sx={{ color: 'info.main', py: 3 }} variant="h3" gutterBottom component="div">
                    Manage all Orders: {orders?.length}
                </Typography>
            </Box>
            <TableContainer component={Paper}>
                <Table aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell align="left">Product Name</StyledTableCell>
                            <StyledTableCell align="left">Customer Name</StyledTableCell>
                            <StyledTableCell align="left">Customer Email</StyledTableCell>
                            <StyledTableCell align="left">Customer Phone</StyledTableCell>
                            <StyledTableCell align="left">Customer Address</StyledTableCell>
                            <StyledTableCell align="left">Quantity Ordered</StyledTableCell>
                            <StyledTableCell align="left">Total to Pay</StyledTableCell>
                            <StyledTableCell align="left">Delete Order</StyledTableCell>
                            <StyledTableCell align="left">Update Order Status</StyledTableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {orders.map((order) => (
                            <StyledTableRow key={order._id}>
                                <StyledTableCell component="th" scope="row">
                                    {order.productName}
                                </StyledTableCell>
                                <StyledTableCell align="left">{order.customerName}</StyledTableCell>
                                <StyledTableCell align="left">{order.email}</StyledTableCell>
                                <StyledTableCell align="left">{order.phone}</StyledTableCell>
                                <StyledTableCell align="left">{order.address}</StyledTableCell>
                                <StyledTableCell align="left">{order.quantity}</StyledTableCell>
                                <StyledTableCell align="left">{order.price}</StyledTableCell>
                                <StyledTableCell align="left"><Button onClick={() => handleDeleteOrder(order._id)} variant="contained" sx={{ bgcolor: 'error.main' }}>Delete</Button></StyledTableCell>
                                <StyledTableCell align="right"><Button onClick={() => handleStatusUpdate(order._id)} variant="contained" sx={{ bgcolor: 'error.main' }}>{order.orderStatus}</Button></StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

        </Container>
    );
};

export default ManageAllOrders;