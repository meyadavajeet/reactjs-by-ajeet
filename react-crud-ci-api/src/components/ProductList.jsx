import { Button, Card, Grid, Icon, Paper, Table, TableBody, TableCell, TableFooter, TableHead, TableRow, Typography } from '@material-ui/core';
import { Add } from '@material-ui/icons';
import React, { Component } from 'react';

class ProductList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            products: []
        }
    }//end of constructor

    componentDidMount() {
        const apiUrl = 'http://localhost/ci-api-for-react/reactapi/products';

        fetch(apiUrl)
            .then(res => res.json())
            .then((result) => {
                this.setState({
                    products: result
                })
            }, (error) => {
                this.setState({ error });
            }
            )

    }

    render() {
        const { error, products } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>
        }
        return (
            <>
                <Grid container>
                    <Grid item sm={2} align="center">
                        <Button
                            color="primary"
                            variant="contained"
                            size="large"
                            startIcon={<Add />}
                            endIcon={<Icon>send</Icon>}
                        >
                            Add product
                            </Button>
                    </Grid>
                    <Grid item sm={8}>
                        <Paper elevation={3} >
                            <Typography variant="h4" align="center" >Product List from Codeigniter  API</Typography>

                        </Paper>
                    </Grid>
                    <Grid item sm={2}></Grid>
                </Grid>
                <br />
                <Grid container >
                    <Grid item sm={2}></Grid>
                    <Grid item sm={8}>

                        <Card>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>#ID</TableCell>
                                        <TableCell>Product Name</TableCell>
                                        <TableCell>SKU</TableCell>
                                        <TableCell>Price</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableFooter>
                                    <TableRow>
                                        <TableCell>#ID</TableCell>
                                        <TableCell>Product Name</TableCell>
                                        <TableCell>SKU</TableCell>
                                        <TableCell>Price</TableCell>
                                    </TableRow>
                                </TableFooter>
                                <TableBody>
                                    {
                                        products.map((product) => (
                                            <TableRow>
                                                <TableCell>{product.id}</TableCell>
                                                <TableCell>{product.product_name}</TableCell>
                                                <TableCell>{product.sku}</TableCell>
                                                <TableCell>{product.price}</TableCell>
                                            </TableRow>
                                        ))
                                    }
                                </TableBody>
                            </Table>
                        </Card>
                    </Grid>
                    <Grid item sm={2}></Grid>
                </Grid>
            </>
        )
    }
}

export default ProductList;