import styled from "styled-components"

export const Logo = styled.img`
  width: 80px;
  height: 80px;
  cursor: pointer;
  border-radius: 50%;
`

export const HeaderContainer = styled.header`
   background-color: black;
   height: 100px;
   display: flex;
   align-items: center;
   justify-content: space-between;
   color: aliceblue;
   padding: 20px;
   background-color:#111827;
   color: #000;
   box-shadow: 0 0 8px 0 rgba(255, 255, 255, 0.5);
`

export const HeaderItems = styled.div`
    display: flex;
    gap: 20px;
`

export const Links = styled.a`
    text-decoration: none;
    color: #fff;
    font-weight: bold;
`