import React from 'react';
import Styled from 'styled-components';

const FooterWrap = Styled.div`
    height: 91px;
    color: #CEA0E3;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Footer = () => {
    return (
        <FooterWrap>
            Copyright&copy; 2021. BE SOPT Web part. All rights Reserved.
        </FooterWrap>
    );
};

export default Footer;