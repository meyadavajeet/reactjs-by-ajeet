import { Button, Card, FormControl, Grid, Icon, Input, InputLabel, Paper, TextField } from '@material-ui/core';
import React, { Component } from 'react';

class AddProduct extends Component {
    render() {

        return (
            <>
                <Grid container>
                    <Grid item sm={12}>
                        <Paper>
                            <Card>
                                <form>
                                    <FormControl>
                                        <InputLabel>FullName</InputLabel>
                                        <Input />
                                    </FormControl>
                                    <FormControl>
                                        <InputLabel>SKU</InputLabel>
                                        <Input />
                                    </FormControl> <FormControl>
                                        <InputLabel>Price</InputLabel>
                                        <Input />
                                    </FormControl>
                                    <br/>
                                    <Button
                                        type="submit"
                                        variant="outlined"
                                        color="secondary"
                                        endIcon={<Icon>save</Icon>}
                                    >
                                        Save Product
                                    </Button>
                                </form>

                            </Card>
                        </Paper>
                    </Grid>
                   
                </Grid>

            </>
        );
    }
}

export default AddProduct;