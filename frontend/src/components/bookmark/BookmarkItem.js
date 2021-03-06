import { useHistory } from "react-router-dom";
import close from "../../assets/icons/close.svg";
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components/macro";

BookmarkItem.propTypes = {
  id: PropTypes.number,
  toggleBookmark: PropTypes.func.isRequired,
  image: PropTypes.string.isRequired,
};

export default function BookmarkItem({ image, toggleBookmark, id }) {
  const history = useHistory();

  return (
    <MainWrapper>
      <LeftWrapper>
        <img src={image} alt="" />
      </LeftWrapper>
      <CenterWrapper>
        <BuyButton onClick={() => history.push(`/products/${id}`)}>
          Jetzt kaufen
        </BuyButton>
      </CenterWrapper>
      <RightWrapper>
        <img
          src={close}
          alt=""
          data-testid="deleteButton"
          onClick={() => toggleBookmark(id)}
        />
      </RightWrapper>
    </MainWrapper>
  );
}

const MainWrapper = styled.div`
  border-bottom: 1px solid #dadbdc;
  display: flex;
  flex-direction: row;
  overflow: hidden;
  text-decoration: none;
  width: 100%;
`;

const LeftWrapper = styled.div`
  overflow: hidden;
  padding: 10px;
  text-decoration: none;
  width: 30%;

  img {
    display: block;
    height: auto;
    margin-left: auto;
    margin-right: auto;
    max-height: 100px;
    max-width: 100%;
    overflow: hidden;
    width: auto;
  }
`;

const CenterWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  text-decoration: none;
  width: 50%;
`;

const RightWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 20%;
`;

const BuyButton = styled.button`
  background-color: #f6ba41;
  border-radius: 30px;
  border: none;
  color: #ffffff;
  display: block;
  margin-left: 0;
  margin-right: 0;
  padding: 0.5em 2.5em;
  text-transform: uppercase;
  width: 80%;
`;
