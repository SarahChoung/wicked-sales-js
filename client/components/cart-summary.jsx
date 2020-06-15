import React from 'react';
import CartSummaryItem from './cart-summary-item';

export default class CartSummary extends React.Component {

  render() {
    const cartList = this.props.cart;
    let listCartItems;
    if (cartList.length > 0) {
      listCartItems = cartList.map(cartItem => {
        return (
          <CartSummaryItem
            key={cartItem.cartItemId}
            name={cartItem.name}
            price={cartItem.price}
            shortDescription={cartItem.shortDescription}
            image={cartItem.image}
          />
        );
      });
    } else {
      listCartItems = <p>Your cart is empty</p>;
    }

    return (
      <div>
        <button
          className="btn btn-link pl-0"> &lt; Back to catalog
        </button>
        <h3>My Cart</h3>
        <div>
          {listCartItems}
        </div>
      </div>
    );

  }
}