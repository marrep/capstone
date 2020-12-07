import React from "react";
import { convertToEuro, getCartImage } from "../../services/helpers";
import styled from "styled-components";
import BookmarkIcon from "../bookmark/BookmarkIcon";

export default function CartItemInformation({
  cartItem,
  products,
  bookmarks,
  toggleBookmark,
}) {
  return (
    <CartItemWrapper>
      <CartItemWrapperLeft>
        <img src={getCartImage(products, cartItem.id)} alt="" />
      </CartItemWrapperLeft>
      <CartItemWrapperCenter>
        <CartItemPrice>{convertToEuro(cartItem.price)}</CartItemPrice>
        <CartItemTitle>{cartItem.title}</CartItemTitle>
        <CartItemSeller>Versand durch {cartItem.seller}</CartItemSeller>
      </CartItemWrapperCenter>
      <CartItemWrapperRight>
        <BookmarkIcon
          id={cartItem.id}
          bookmarks={bookmarks}
          toggleBookmark={toggleBookmark}
        />
      </CartItemWrapperRight>
    </CartItemWrapper>
  );
}

export const CartItemWrapper = styled.div`
  font-family: Lato;
  width: 100%;
  text-decoration: none;
  overflow: hidden;
  flex-direction: row;
  display: flex;
`;

export const CartItemWrapperLeft = styled.div`
  width: 30%;
  padding: 10px;
  text-decoration: none;
  overflow: hidden;
  justify-content: center;
  flex-direction: column;
  display: flex;
  align-items: top;

  img {
    width: auto;
    overflow: hidden;
    max-width: 100%;
    max-height: 100px;
    margin-right: auto;
    margin-left: auto;
    height: auto;
    display: block;
  }
`;

export const CartItemWrapperCenter = styled.div`
  text-align: left;
  width: 50%;
  justify-content: center;
  flex-direction: column;
  display: flex;
  align-items: left;
`;

export const CartItemWrapperRight = styled.div`
  width: 20%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  display: flex;
`;

export const CartItemPrice = styled.span`
  text-align: left;
  display: block;
  font-size: 18px;
  color: #e43122;
`;

export const CartItemSeller = styled.span`
  text-align: left;
  display: block;
  font-size: 12px;
  color: #575757;
`;

export const CartItemTitle = styled.span`
  text-align: left;
  display: block;
  font-size: 14px;
  color: #134085;
`;