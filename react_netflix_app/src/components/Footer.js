import React from 'react'

import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterContainer>
        <FooterContent>
            <FooterLinkContainer>
                <FooterLinkTitle>
                    넷플릭스 대한민국
                </FooterLinkTitle>

                <FooterLinkContent>
                    <FooterLink href="https://help.netflix.com/ko/node/412">자막 및 음성</FooterLink>
                    <FooterLink href="https://help.netflix.com/ko/">화면 해설</FooterLink>
                    <FooterLink href="https://help.netflix.com/ko/">고객 센터</FooterLink>
                    <FooterLink href="https://help.netflix.com/ko/">기프트카드</FooterLink>
                </FooterLinkContent>

                <FooterLinkContent>
                    <FooterLink href="https://help.netflix.com/ko/node/412">미디어 센터</FooterLink>
                    <FooterLink href="https://help.netflix.com/ko/">투자 정보(IR)</FooterLink>
                    <FooterLink href="https://help.netflix.com/ko/">입사 정보</FooterLink>
                    <FooterLink href="https://help.netflix.com/ko/">이용 약관</FooterLink>
                </FooterLinkContent>

                <FooterLinkContent>
                    <FooterLink href="https://help.netflix.com/ko/node/412">개인정보</FooterLink>
                    <FooterLink href="https://help.netflix.com/ko/">법적 고지</FooterLink>
                    <FooterLink href="https://help.netflix.com/ko/">쿠키 설정</FooterLink>
                    <FooterLink href="https://help.netflix.com/ko/">회사 정보</FooterLink>
                </FooterLinkContent>

                <FooterLinkContent>
                    <FooterLink href="https://help.netflix.com/ko/node/412">문의하기</FooterLink>
                </FooterLinkContent>

                <FooterCompanyWrap>
                    <FooterCompanyInfo>넷플릭스서비시스코리아 유한회사 통신판매업신고번호: 제2018-서울종로-0426호 전화번호: 080-001-9587</FooterCompanyInfo>
                    <FooterCompanyInfo>대표: 레지널드 숀 톰프슨</FooterCompanyInfo>
                    <FooterCompanyInfo>이메일 주소: korea@netflix.com</FooterCompanyInfo>
                    <FooterCompanyInfo>주소: 대한민국 서울특별시 종로구 우정국로 26, 센트로폴리스 A동 20층 우편번호 03161</FooterCompanyInfo>
                    <FooterCompanyInfo>사업자등록번호: 165-87-00119</FooterCompanyInfo>
                    <FooterCompanyInfo>클라우드 호스팅: Amazon Web Services Inc.</FooterCompanyInfo>
                    <FooterCompanyInfo>공정거래위원회 웹사이트</FooterCompanyInfo>
                </FooterCompanyWrap>

                <FooterDescContainer>
                    <FooterDescRights>
                        Netflix Rights Reserved.
                    </FooterDescRights>
                </FooterDescContainer>
            </FooterLinkContainer>
        </FooterContent>
    </FooterContainer>
  )
}

const FooterContainer = styled.div`
    display: flex;
    justify-content: center;
    align-itmes: cetner;
    padding: 40px 0;
    border-top: 1px solid rgb(25,25,25);
    width: 100%;
    position: relative;
    z-index: 100;

    @media (max-width: 769px) {
        padding: 20px 20px;
        padding-bottom: 30px;
    }
`;

const FooterContent = styled.div``;

const FooterLinkContainer = styled.div`
    width: 980px;

    @media (max-width: 768px) {
        width: 100%;
    }
`;

const FooterLinkTitle = styled.h1`
    color: gray;
    font-size: 17px;
`;

const FooterLinkContent = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-top: 16px;

    @media (max-width: 768px) {
        margin-top: 12px;
    }
`;

const FooterLink = styled.a`
    color: gray;
    font-size: 14px;
    width: 110px;
    text-decoration: none;

    &:hover {
        text-decoration: underline;
    }

    @media (max-width: 768px) {
        margin-bottom: 16px;
    }
`;

const FooterDescContainer = styled.div`
    margon-top: 30px;
    @media (max-width: 768px) {
        margin-top: 20px;
    } 
`;

const FooterDescRights = styled.h2`
    color: white;
    font-size: 14px;
    text-align: center;
`;

const FooterCompanyWrap = styled.div`
    width: 980px;
    margin: 20px 0;

    @media (max-width: 768px) {
        width: 100%;
    }
`;

const FooterCompanyInfo = styled.p`
    font-size : 11px;
    color : gray;
`;

export default Footer