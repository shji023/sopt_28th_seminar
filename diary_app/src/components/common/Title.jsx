import React from 'react';
import { withRouter } from 'react-router-dom';
import Styled from 'styled-components'; 

const TitleWrap = Styled.div`
    width: 1200px;
    height: 92px;
    font-size: 36px;
    font-weight: bold;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

const Title = ({location}) => {
    const title = location.pathname === '/' ? "이번 달 일기" : "오늘의 일기";
    return (
      <TitleWrap>
        {title}
      </TitleWrap>
    );
};

export default withRouter(Title);