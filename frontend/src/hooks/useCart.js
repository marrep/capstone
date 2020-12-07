import { useState } from "react";

export default function useCart() {
  const [cart, setCart] = useState({
    items: [],
    totalPrice: 0,
    totalShipping: 0,
    date: new Intl.DateTimeFormat("en-US").format(new Date()),
    customerid: 2,
  });

  return {
    cart,
    addToCart,
    increaseAmount,
    removeFromCart,
  };

  function addToCart(product, selectedOffer) {
    let newItemsArray = cart.items;
    const foundIndex = newItemsArray.findIndex(
      (elem) => elem.id === product.id
    );
    const foundOffer = newItemsArray.some(
      (elem) => elem.id === product.id && elem.seller === selectedOffer.seller
    );
    if (!foundOffer) {
      newItemsArray.push({
        id: product.id,
        title: product.title,
        price: selectedOffer.price,
        amount: 1,
        shippingPrice: selectedOffer.shippingPrice,
        seller: selectedOffer.seller,
      });
    } else {
      newItemsArray[foundIndex].amount += 1;
    }

    setCart({
      ...cart,
      items: newItemsArray,
      totalPrice: cart.totalPrice + selectedOffer.price,
      totalShipping: !foundOffer
        ? cart.totalShipping + selectedOffer.shippingPrice
        : cart.totalShipping,
    });
  }

  function increaseAmount(cartItem, cart) {
    const index = cart.items.findIndex(
      (elem) => elem.id === cartItem.id && elem.seller === cartItem.seller
    );
    setCart({
      ...(cart.items[index].amount += 1),
      ...(cart.totalPrice += cartItem.price),
    });
  }

  function removeFromCart(cartItem, cart) {
    const index = cart.items.findIndex(
      (elem) => elem.id === cartItem.id && elem.seller === cartItem.seller
    );
    const newList = cart.items.filter((item) => item.id !== cartItem.id);
    cart.items[index].amount < 1
      ? setCart({
          ...(cart.items = newList),
        })
      : setCart({
          ...(cart.items[index].amount -= 1),
          ...(cart.totalPrice -= cartItem.price),
        });
  }
}
