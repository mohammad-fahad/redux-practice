import React from 'react';

const Product = (props) => {
    const {name, id} = props.product;
    const {addToCart, product} = props;
    return (
        <div style={{border: '1px solid green', align: 'center', margin: '10px 30px', padding: '10px'}}>            
            <h5>{product.name}</h5>            
            <button onClick={() => addToCart(id, name)}>Add to cart</button>         
        </div>
    );
};

export default Product;