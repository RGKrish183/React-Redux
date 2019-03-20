#React Redux

I have attached React Redux setup boilerplate personal working copy, In this project, I have been followed by below commands and setup formats to implement this concept:

This tutorial will show you how we can add Redux to the Create React App starter project. We’ll be using community best practices to structure our application while maintaining simplicity. In the end, the app will be a simple shopping cart that allows us to add items from the shelf.

Let’s get started.

Create a boilerplate project withe the create-react-app command

    create-react-app CRARedux

Install relevant redux modules:

    npm i redux --save
    npm i react-redux --save

go inside the src folder and create a couple of directories and files:

    cd src && mkdir actions components reducers && touch store.jsCopy

The src/store.js file will be the following:

    import { createStore } from 'redux';
    import rootReducer from  './reducers';
    export default(initialState) => {
        return createStore(rootReducer, initialState);
    }

Next we’ll need to create a cart reducer which will accept an add action and update our cart items accordingly, the index reducer will combine all reducers together:

    // src/reducers/cart.js
    export default(state = [], payload) => {
        switch (payload.type) {
            case 'add':
                return [...state, payload.item];
            default:
                return state;
        }
    };

    // src/reducers/index.js
    import cart from './cart';
    import { combineReducers } from 'redux';
    const rootReducer = combineReducers({
        cart
    });
    export default rootReducer;


Next we’ll create a simple add to cart action:

    // src/actions/cart.js
    export const addToCart = (item) => {
      console.log('adding item:', item);
      return {
          type: add,
          item
      };
    }

Great, now we need to hook up our main application entry point, modify the root index.js like so:

    import React from 'react';
    import ReactDOM from 'react-dom';
    import App from './App';
    import './index.css';
    import { Provider } from 'react-redux';
    import Store from './store';

    const StoreInstance = Store();

    ReactDOM.render(
     <Provider store={StoreInstance}>
       <App />
     </Provider>,
     document.getElementById('root')
    );

Now we that have the basic redux data flow set up structurally, we are ready to create our components.

We are going to have two components: a shelf component that displays a list of items on the shelf and a cart component that displays items we currently have in our cart.

    // src/components/shelf.js
    import React, { Component } from 'react';
    class Shelf extends Component {
      constructor(props) {
        super(props);
        this.onAddItemToCart = this.onAddItemToCart.bind(this);
        this.state = {
          shelfItems: [
            'shampoo',
            'chocolate',
            'yogurt'
          ]
        }
      }
      onAddItemToCart(item) {
          this.props.addItem(item);
      }
      render() {
        const shelfItems = this.state.shelfItems.map((item, idx) => {
          return <li key={idx}><button onClick={() => this.onAddItemToCart(item)}>[+]</button>{item}</li>
        });
        return (
          <div>
              <h2>Store Shelf:</h2>
              <ul>
                {shelfItems}
              </ul>
          </div>
        );
      }
    }
    export default Shelf;

The Cart component will be our container component, it will perform the necessary data hookup logic with our store:

    import React, { Component } from 'react';
    import { bindActionCreators } from 'redux';
    import { connect } from 'react-redux';
    import * as cartActions from '../actions/cart';
    import Shelf from './shelf';
    class Cart extends Component {
      constructor(props) {
        super(props);
        this.state = {
        }
      }
      render() {
        const cartList = this.props.cart.map((item, idx) => {
            return <li key={idx}>{item}</li>;
        });
        return (
          <div className="Cart">
            <Shelf addItem={this.props.action.addToCart}/>
            <h2>Shopping Bag</h2>
            <ol>
                {cartList}
            </ol>
          </div>
        );
      }
    }
    function mapStateToProps(state, props) {
        return {
            cart: state.cart
        };
    }
    function mapDispatchToProps(dispatch) {
        return {
            actions: bindActionCreators(cartActions, dispatch)
        }
    }
    export default connect(mapStateToProps, mapDispatchToProps)(Cart);

and finally, we need to update App.js to include our cart container component:

    import Cart from './components/cart';

and modify the App-intro class to:

        <div className="App-intro">
          <Cart />
        </div>

And with that, you now have redux in your starter project, Congrats!

Thanks for Source and From : 

> https://github.com/facebookincubator/create-react-app

> https://www.penta-code.com/how-to-add-redux-to-create-react-app/
