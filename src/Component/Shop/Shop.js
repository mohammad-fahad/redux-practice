import React from 'react';
import Product from '../Product/Product';
import {addToCart} from '../../Redux/Actions/CartAction'
import { connect } from 'react-redux';

const Shop = (props) => {    
    const {products, addToCart} = props;
    return (
        <div>
            <h2>This is shop</h2>
            {
            products.map(pd => <Product
                 key={pd.id} 
                product={pd}
                addToCart={addToCart}>                    
                </Product>)
            }
        </div>
    );
};
const mapStateToProps = state => {
    return {         
        products: state.products
    }
}

const mapDispatchToProps = {
    addToCart: addToCart
}

// const connectToStore = connect(mapDispatchToProps, mapDispatchToProps);

// connectToStore(Shop);

export default connect(mapStateToProps, mapDispatchToProps)(Shop);