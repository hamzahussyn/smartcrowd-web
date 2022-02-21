import React, { useState, useEffect, useReducer } from 'react';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { removeItemFromCart, updateCartItems } from '../../actions/cart';

const Cart = (props) => {
  const [cart, setCart] = useState(props.cart);
  const [updatedItems, setUpdatedItems] = useState([]);
  const [updateError, setUpdateError] = useState(null);
  const [buttonClicked, setButtonClicked] = useState(false);
  const publicUrl = process.env.PUBLIC_URL + '/';

  useEffect(() => {
    if (props.cart) {
      setCart(props.cart);
    }
  }, [props.cart]);

  const handleChange = (event) => {
    setUpdateError('');
    let propertyid = parseInt(event.target.getAttribute('propertyid'));
    let { cartItems } = cart;
    let index = cartItems.findIndex((elem) => elem.Property.id === propertyid);

    let itemObject = cartItems[index];
    itemObject.units = parseInt(event.target.value) || 0;

    let deleteAndUpdateArray = cartItems.splice(index, 1, itemObject);
    setCart((prev) => {
      return { ...prev, cartItems };
    });

    if (!updatedItems.includes(propertyid)) {
      setUpdatedItems((prev) => [...prev, propertyid]);
    }
  };

  const updateCart = async (event) => {
    let updateRequestBodyArray = new Array();

    for (let i = 0; i < updatedItems.length; i++) {
      let obj = cart.cartItems.find(
        (item) => item.Property.id === parseInt(updatedItems[i])
      );

      if (obj.units < 1 || obj.units > obj.Property.Unit.unitsRemaining) {
        setUpdateError('Incorrect token amount, cart could not be updated.');
        return;
      }

      let updateRequestBodyObject = new Object();
      updateRequestBodyObject.units = obj.units;
      updateRequestBodyObject.propertyId = obj.Property.id;

      updateRequestBodyArray.push(updateRequestBodyObject);
    }

    let response = await updateCartItems(updateRequestBodyArray);
    if (response) {
      setButtonClicked(true);
    }
  };

  const removeFromCart = (event) => {
    let propertyid = parseInt(event.target.getAttribute('propertyid'));

    let requestBody = new Object();
    requestBody.propertyId = propertyid;
    removeItemFromCart(requestBody).then((response) => setButtonClicked(true));
  };

  const cartItem = (cartItem, index) => {
    return (
      <tr key={index}>
        <td
          propertyid={`${cartItem.Property.id}`}
          className="cart-product-remove"
          onClick={removeFromCart}
        >
          Remove Item
        </td>
        <td className="cart-product-image">
          <Link to={`property/${cartItem.Property.id}`}>
            <img
              src={require(`../../sample-images/thumbnails/property_${cartItem.Property.id}.jpeg`)}
            />
          </Link>
        </td>
        <td className="cart-product-info">
          <h4>
            <Link to="/product-details">{`${cartItem.Property.name}`}</Link>
          </h4>
        </td>
        <td className="cart-product-price">
          ${`${cartItem.Property.Unit.priceUsd}`}
        </td>
        <td className="cart-product-quantity">
          <label>Tokens Left: {cartItem.Property.Unit.unitsRemaining}</label>
          <div className="cart-plus-minus">
            <input
              propertyid={`${cartItem.Property.id}`}
              type="number"
              min={1}
              max={cartItem.Property.Unit.unitsRemaining}
              defaultValue={cartItem.units}
              name="qtybutton"
              className="cart-plus-minus-box"
              onChange={(event) => handleChange(event)}
            />
          </div>
        </td>
        <td className="cart-product-subtotal">
          ${`${cartItem.units * cartItem.Property.Unit.priceUsd}`}
        </td>
      </tr>
    );
  };

  const cartItemList = () => {
    return cart?.cartItems?.length
      ? cart.cartItems.map((item, index) => cartItem(item, index))
      : null;
  };

  return (
    <div className="liton__shoping-cart-area mb-120">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="shoping-cart-inner">
              <div className="shoping-cart-table table-responsive">
                <table className="table">
                  <tbody>
                    {cartItemList()}
                    <tr className="cart-coupon-row">
                      <td colSpan={6}>
                        {/* <div className="cart-coupon">
                          <input
                            type="text"
                            name="cart-coupon"
                            placeholder="Coupon code"
                          />
                          <button
                            type="submit"
                            className="btn theme-btn-2 btn-effect-2"
                          >
                            Apply Coupon
                          </button>
                        </div> */}
                      </td>
                      <td>
                        <button
                          type="submit"
                          className="btn theme-btn-1 btn-effect-1"
                          onClick={updateCart}
                        >
                          Update Cart
                        </button>
                        {updateError?.length ? (
                          <p className="error-message mt-2">{updateError}</p>
                        ) : null}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="shoping-cart-total mt-50">
                <h4>Cart Totals</h4>
                <table className="table">
                  <tbody>
                    <tr>
                      <td>Cart Subtotal</td>
                      <td>$618.00</td>
                    </tr>
                    <tr>
                      <td>Shipping and Handing</td>
                      <td>$15.00</td>
                    </tr>
                    <tr>
                      <td>Vat</td>
                      <td>$00.00</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Order Total</strong>
                      </td>
                      <td>
                        <strong>$633.00</strong>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div className="btn-wrapper text-right go-top">
                  <Link to="/checkout" className="theme-btn-1 btn btn-effect-1">
                    Proceed to checkout
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {buttonClicked && <Redirect to="/cart" />}
      </div>
    </div>
  );
};

export default Cart;
