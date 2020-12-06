import styled from "styled-components";

export const BookmarkItemWrapper = styled.div`
  width: 100%;
  text-decoration: none;
  overflow: hidden;
  flex-direction: row;
  display: flex;
  border-bottom: 1px solid #dadbdc;
`;

export const BookmarkItemWrapperLeft = styled.div`
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

export const BookmarkItemWrapperCenter = styled.div`
  width: 50%;
  text-decoration: none;
  overflow: hidden;
  justify-content: center;
  flex-direction: column;
  display: flex;
  align-items: center;
`;

export const BookmarkItemWrapperRight = styled.div`
  width: 20%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  display: flex;
`;
