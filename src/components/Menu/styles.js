import styled from "styled-components";

export const Container = styled.header`
    background: #ff9696;
    width: 980px;
    height: 54px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin: 20px 230px;
`;

export const Nav = styled.ul`
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin: 10px 0 0;

    li {
        display: flex;
        align-items: center;
        padding: 15px;

        a {
            color: #ffffff;
            text-decoration: none;
            font-size: 16px;

            text-transform: uppercase;
            line-height: 20px;
            font-weight: bold;
            opacity: 0.6;

            &:hover {
                color: #ffffff;
                opacity: unset;
            }
        }
    }
`;
