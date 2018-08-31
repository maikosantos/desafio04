import styled from "styled-components";

export const Container = styled.header`
    background: inherit;
    width: 980px;
    height: 54px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 50px 230px 20px;
    text-decoration: none;
`;

export const Logo = styled.div`
    a {
        color: #ff9696;
        font-weight: 900;
        text-decoration: none;
        line-height: 32px;
    }
`;

export const Carrinho = styled.div`
    width: 155px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #999999;

    img {
        color: #999999;
    }
`;
