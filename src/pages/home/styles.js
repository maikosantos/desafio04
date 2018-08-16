import styled from "styled-components";

export const ContainerProducts = styled.div`
    height: 100%;
    width: 980px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-column-gap: 20px;
    grid-row-gap: 20px;
    margin: 20px 230px;

    a {
        display: flex;
        flex-direction: column;
        align-items: center;
        border-radius: 3px;
        background: #ffffff;
        width: 230px;
        height: 340px;
        border: solid 1px #eeeeee;
        text-decoration: none;

        img {
            height: 180px;
            width: 124px;
            margin: 20px 0;
        }

        strong {
            color: #333333;
            font-size: 18px;
        }

        small {
            color: #c0c0c0;
            font-size: 14px;
            margin-top: 10px;
        }

        h1 {
            color: #37bea9;
            font-size: 24px;
            font-weight: bold;
            margin-top: 15px;
            letter-spacing: 1.11px;
        }
    }
`;
