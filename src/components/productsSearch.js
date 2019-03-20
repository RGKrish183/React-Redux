import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';


import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as productsActions from '../actions/productsActions';

const styles = theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto',
    },
    button:{
        background: '#e9b330',
        borderRadius: '3px',
        border: 0,
        color: 'black',
        height: '48px',
        padding: '0 30px',
    }
});

class ProductSearchComponent extends React.Component {
    constructor(props){
        super(props);
    }
    state = {
        checkbox_obj : {},
        search:false
    };
    checkboxs = {};
    products = [
        {
            key:"nokia_id",
            value:"Nokia",
            status:false
        },
        {
            key:"samsung_id",
            value:"Samsung",
            status:false
        },
        {
            key:"redmi_id",
            value:"Redmi",
            status:false
        },
        {
            key:"asus_id",
            value:"Asus",
            status:false
        }
    ];
    
    handleChange = (e,key) => {
        this.checkboxs[key] = e.target.checked;
        // console.log(this.checkboxs)
        this.setState({checkbox_obj : this.checkboxs});
    }

    cliker = (e) =>{
        this.props.actionsRole.productsCheckbox(this.state.checkbox_obj);
        this.setState({search : true});
    };

    render() {

        const { classes } = this.props;
        // console.log('this.props.checkbox_obj')
        console.log('this.props.cart111')
        console.log(this.props.cart)
        return (
            <div className="ProductSearchComponent">
                <p>ProductSearchComponent - 1</p>
                {
                    this.products.map((val, index, arr)=>{
                        return <label htmlFor={val.key} key={val.key} >
                        <Checkbox
                            id={val.key}
                            name={val.key}
                            onChange={(e)=>this.handleChange(e,val.key)}
                            value={val.value}
                        /> {val.value} </label>
                    })
                }
                <Button className={classes.button} id="btnclicker"  onClick={(e)=>this.cliker(e)} >
                    SUBMIT
                </Button> 
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        cart: state.productsReducersFromAction
    };
}
function mapDispatchToProps(dispatch) {
    return {
        actionsRole: bindActionCreators(productsActions, dispatch)
    }
}

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(ProductSearchComponent));
