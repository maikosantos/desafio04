import styled from "styled-components";

/*
export const ContainerItem = styled.div`
    height: 100%;
    width: 980px;
    display: flex;
    margin: 20px 230px;
`;*/

export const ContainerItems = styled.table`
    height: 100%;
    width: 980px;
    margin: 20px 230px;
    text-align: right;

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
    }

    &:hover td {
        background: #eeeeee;
    }
`;

export const DivProduct = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 60px;

    strong {
        color: #333333;
        font-size: 18px;
    }

    small {
        color: #c0c0c0;
        font-size: 14px;
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
