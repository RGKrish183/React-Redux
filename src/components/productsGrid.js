import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as productsActions from '../actions/productsActions';

const CustomTableCell = withStyles(theme => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const styles = theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto',
    },
    table: {
        minWidth: 700,
    },
    row: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.background.default,
        },
    },
});

class ProductGridComponent extends React.Component {
    constructor(props){
        super(props);
    }
    productData = [
        {
            "postId": 1,
            "id": 1,
            "name": "id labore ex et quam laborum",
            "email": "Eliseo@gardner.biz",
            "body": "laudantium enim quasi est "
        },
        {
            "postId": 1,
            "id": 2,
            "name": "quo vero reiciendis velit similique earum",
            "email": "Jayne_Kuhic@sydney.com",
            "body": "est natus enim nihil est "
        },
        {
            "postId": 1,
            "id": 3,
            "name": "odio adipisci rerum aut animi",
            "email": "Nikita@garfield.biz",
            "body": "quia molestiae reprehenderit quasi"
        },
        {
            "postId": 1,
            "id": 4,
            "name": "alias odio sit",
            "email": "Lew@alysha.tv",
            "body": "non et noccaecati deserunt quas "
        },
        {
            "postId": 1,
            "id": 5,
            "name": "vero eaque aliquid doloribus et culpa",
            "email": "Hayden@althea.biz",
            "body": "harum non quasi et"
        }
    ];

    render() {
        // console.log("tested")
         console.log('this.props.cart22222');
         console.log(this.props.carts);

        const { classes } = this.props;
        return (
            <div className="ProductGridComponent">
                <p>ProductGridComponent - 2</p>
                <Paper className={classes.root}>
                    <Table className={classes.table}>
                        <TableHead>
                            <TableRow>
                                <CustomTableCell>Name</CustomTableCell>
                                <CustomTableCell>Email</CustomTableCell>
                                <CustomTableCell>Body</CustomTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.productData.map(row => (
                                <TableRow className={classes.row} key={row.id}>
                                    <CustomTableCell component="th" scope="row">
                                        {row.name}
                                    </CustomTableCell>
                                    <CustomTableCell>{row.email}</CustomTableCell>
                                    <CustomTableCell>{row.body}</CustomTableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </Paper>
            </div>
        );
    }
}

// export default withStyles(styles)((ProductGridComponent));


function mapStateToProps(state) {
    console.log("ts");
    console.log(state.productsReducersFromAction)
    return {
        carts: state.productsReducersFromAction
    };
}
function mapDispatchToProps(dispatch) {
    return {
        actionsRole: bindActionCreators(productsActions, dispatch)
    }
}

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(ProductGridComponent));