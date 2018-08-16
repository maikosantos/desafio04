import styled from "styled-components";

export const ContainerProducts = styled.div`
    height: 100%;
    width: 980px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 20px;
    grid-row-gap: 20px;
    margin: 20px 230px;
`;

export const DivImage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #ffffff;
    width: 480px;
    height: 400px;
    border: solid 1px #eeeeee;
    border-radius: 3px;
    text-decoration: none;

    img {
        height: 300px;
        width: 207px;
        margin: 40px 0;
    }
`;

export const DivInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    background: #ffffff;
    width: 480px;
    height: 400px;
    text-decoration: none;

    strong {
        color: #333333;
        font-size: 28px;
    }

    small {
        color: #c0c0c0;
        font-size: 14px;
        margin-top: 5px;
    }

    h1 {
        color: #37bea9;
        font-size: 24px;
        font-weight: bold;
        margin-top: 45px;
        letter-spacing: 1.11px;
    }

    a {
        height: 50px;
        width: 480px;
        background: #37bea9;
        margin-top: 15px;
        text-decoration: none;
        text-align: center;
        padding-top: 16px;

        span {
            color: #ffffff;
            font-size: 16px;
            font-weight: bold;
            letter-spacing: 1.11px;
            align-self: center;
        }
    }
`;
