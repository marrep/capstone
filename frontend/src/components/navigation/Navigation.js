import React from "react";
import { Link } from "react-router-dom";
import { FooterWrapper } from "./NavigationStyled";
import Bookmark from "../../assets/bookmarkOff.svg";
import Cart from "../../assets/cart.svg";
import Home from "../../assets/home.svg";
import Menu from "../../assets/menu.svg";
import Search from "../../assets/search.svg";

export default function Navigation({ bookmarks, cart }) {
  return (
    <FooterWrapper>
      <Link exact to="/">
        <img src={Home} alt="" />
      </Link>
      <Link exact to="/search">
        <img src={Search} alt="" />
      </Link>
      <Link exact to="/cart">
        <span style={{ display: cart.items.length === 0 ? "none" : "inline" }}>
          {cart.items.length}
        </span>
        <img src={Cart} alt="" />
      </Link>
      <Link exact to="/bookmark">
        <span style={{ display: bookmarks.length === 0 ? "none" : "inline" }}>
          {bookmarks.length}
        </span>
        <img src={Bookmark} alt="" />
      </Link>
      <Link exact to="/menu">
        <img src={Menu} alt="" />
      </Link>
    </FooterWrapper>
  );
}
