import React from 'react';
import ProductSearchComponent from './productsSearch';
import ProductGridComponent from './productsGrid';

class ProductListComponent extends React.Component {
    render() {
        return (
            <div className="ProductListComponent">
                <ProductSearchComponent />
                <ProductGridComponent />
            </div>
        );
    }
}


export default ProductListComponent;
