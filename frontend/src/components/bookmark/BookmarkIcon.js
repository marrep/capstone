import styled from "styled-components/macro";
import PropTypes from "prop-types";
import BookmarkOn from "../../assets/icons/bookmarkOn.svg";
import BookmarkOff from "../../assets/icons/bookmarkOff.svg";

BookmarkIcon.propTypes = {
  id: PropTypes.number,
  toggleBookmark: PropTypes.func.isRequired,
  bookmarks: PropTypes.array.isRequired,
};

export default function BookmarkIcon({ id, toggleBookmark, bookmarks }) {
  return (
    <Wrapper>
      <Icon
        src={
          bookmarks.some((product) => product.id === id)
            ? BookmarkOn
            : BookmarkOff
        }
        alt=""
        onClick={() => toggleBookmark(id)}
        data-testid="bookmarkIcon"
      />
      <Text>Merken</Text>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  text-decoration: none;
  width: auto;
`;

const Icon = styled.img`
  width: 80% auto;
`;

const Text = styled.span`
  color: #575757;
  display: block;
  font-size: 12px;
  font-weight: 200;
  margin-top: 5px;
  text-decoration: none;
`;
