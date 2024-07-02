import styled from "styled-components"

export const ContainerButtons = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 20px;
    gap: 20px;
    margin: 0 auto;
    margin-bottom: 20px;
`

export const SaveButton = styled.button`
    width: 120px;
    height: 45px;
    padding: 12px;
    align-items: center;
    border-radius: 50px;
    border-style: none;
    background-color: #000000;
    color: #fff;
    cursor: pointer;

    &:hover {
       background-color: #24100B;
    }
`

export const CancelButton = styled.button`
    width: 120px;
    height: 45px;
    padding: 12px;
    align-items: center;
    border-radius: 50px;
    border-style: none;
    background-color: #000000;
    color: #fff;
    cursor: pointer;

    &:hover {
       background-color: #24100B;
    }
`