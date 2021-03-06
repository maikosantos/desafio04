import styled from "styled-components";

export const ContainerTotal = styled.div`
    height: 80px;
    width: 980px;
    margin: 20px 100px;
    text-align: right;
    display: flex;
    justify-content: flex-end;

    div {
        &:first-child {
            font-size: 18px;
            color: #999999;
            font-weight: bold;
            padding: 10px 60px 0 20px;
        }

        &:last-child {
            font-size: 30px;
            color: #37bea9;
            font-weight: bold;
            line-height: 38px;
        }
    }
`;

export const ContainerItems = styled.table`
    height: 100%;
    width: 980px;
    margin: 20px 230px;
    text-align: right;
    border: solid 1px #eeeeee;

    thead th {
        font-size: 16px;
        color: #999999;
        font-weight: bold;
        padding: 5px 10px;

        &:last-child {
            text-align: right;
        }
    }
`;

export const RowsItem = styled.tr`
    height: 80px;
    text-align: right;
    align-content: flex-start;

    td {
        border-top: 1px solid #eeeeee;
        font-size: 13px;
        padding: 0 10px;
        line-height: 40px;

        &:first-child {
            width: 80px;
            text-align: right;
        }

        &:last-child {
            text-align: right;
        }

        button {
            background: transparent;
            border: 0;
            margin: 0 15px;
        }

        input {
            width: 50px;
            text-align: center;
        }

        span {
            color: #37bea9;
            font-weight: bold;
            font-size: 24px;
        }
    }

    &:hover td {
        background: #eeeeee;
    }
`;

export const DivProduct = styled.div`
    height: 70px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    strong {
        color: #333333;
        font-size: 18px;
        display: flex;
        justify-content: flex-end;
    }

    small {
        color: #c0c0c0;
        font-size: 14px;
        margin: 0;
        display: flex;
        justify-content: flex-start;
        align-self: flex-start;
    }
`;

export const DivImage = styled.div`
    height: 100%;
    display: flex;

    img {
        height: 80px;
        width: 55px;
        margin: 40px 0;
    }
`;
