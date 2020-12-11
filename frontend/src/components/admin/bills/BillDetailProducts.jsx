import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { currencyFormat } from "utils/NumberFormat";

const useStyles = makeStyles((theme) => ({
    table: {
        minWidth: 700,
        maxWidth: 1000,
        
    },
    root: {
        margin: 8,
        width: '98%',
    },
}));

const pricePerProduct = (price, quantity, discount) => {
    price = parseInt(price, 10);
    quantity = parseInt(quantity, 10);
    // discount = parseInt(discount, 10);
    console.log("type", price * quantity * (1 - discount / 100));
    return (price * quantity * (1 - discount / 100).toFixed(2));
};

const totalQuantity = (products) => {
    let total = 0;
    products.map((item) => (total += item.quantity));
    return total;
};

const totalPrice = (products) => {
    let total = 0;
    products.map(
        (item) =>
            (total += pricePerProduct(item.price, item.quantity, item.discount))
    );
    return total;
};

function BillDetailProducts(props) {
    const { products } = props;
    const classes = useStyles();

    return (
        <TableContainer component={Paper} className={classes.root}>
            <Table className={classes.table} aria-label="spanning table">
                <TableHead>
                    <TableRow
                        style={{ fontWeight: "bold", backgroundColor: "#ccc" }}
                    >
                        <TableCell align="center" colSpan={5}>
                            <b>Details products</b>
                        </TableCell>
                        <TableCell align="right">
                            <b>Price</b>
                        </TableCell>
                    </TableRow>
                    <TableRow
                        style={{ fontWeight: "bold", backgroundColor: "#ddd" }}
                    >
                        <TableCell>
                            <b>Code</b>
                        </TableCell>
                        <TableCell>
                            <b>Name</b>
                        </TableCell>
                        <TableCell align="right">
                            <b>Quantity</b>
                        </TableCell>
                        <TableCell align="right">
                            <b>Price</b>
                        </TableCell>
                        <TableCell align="right">
                            <b>Discount</b>
                        </TableCell>
                        <TableCell align="right">
                            <b>Sum</b>
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {products.map((row) => (
                        <TableRow key={row.id}>
                            <TableCell>{row.code}</TableCell>
                            <TableCell>{row.name}</TableCell>
                            <TableCell align="right">{row.quantity}</TableCell>
                            <TableCell align="right">{currencyFormat(row.price)}</TableCell>
                            <TableCell align="right">{row.discount}%</TableCell>
                            <TableCell align="right">
                                {currencyFormat(
                                    pricePerProduct(
                                        row.price,
                                        row.quantity,
                                        row.discount
                                    )
                                )}
                            </TableCell>
                        </TableRow>
                    ))}

                    <TableRow>
                        <TableCell rowSpan={4} />
                        <TableCell
                            colSpan={2}
                            style={{ borderBottom: "0px" }}
                        ></TableCell>
                        <TableCell colSpan={2}><b>Total quantity</b></TableCell>
                        <TableCell align="right">
                            {(totalQuantity(products))}
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell colSpan={2}></TableCell>
                        <TableCell colSpan={2}><b>Total price</b></TableCell>
                        <TableCell align="right">
                            {currencyFormat(totalPrice(products))}
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default BillDetailProducts;
