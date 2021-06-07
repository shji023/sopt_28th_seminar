import React from "react";
import { withRouter } from "react-router-dom";
import Styled from "styled-components";

const CardWrap = Styled.div`
  width: 785px;
  height: 600px;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  textarea {
    width: 642px;
    height: 219px;
    background-color: #EFEFEF;
    font-size: 18px;
    resize: none;
    font-family: Roboto;
    border: none;
    padding: 14px;
    box-sizing: border-box;
    &:focus {
      outline: none;
    }
    &::placeholder {
      color: #C4C4C4;
    }
  }
`;

const Card = ({ data, match }) => {
  const isReadOnly = match.path === "/diary/:id" ? true : false;
  const { title, date, image, weather, tags, summary, text } = data;
  return (
    <CardWrap>
      <p>{title}</p>
      <p>{date}</p>
      <img src={image} width="200px" alt="" />
      <p>{weather}</p>
      <p>{tags}</p>
      <p>{summary}</p>
      <p>{text}</p>
    </CardWrap>
  );
};

export default withRouter(Card);
