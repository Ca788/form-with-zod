import styled from "styled-components"

export const HeaderContainer = styled.header`
   background-color: black;
   height: 50px;
   display: flex;
   align-items: center;
   justify-content: space-between;
   justify-items: center;
   color: aliceblue;
   margin: 0 auto;
   padding: 20px;
   z-index: 1000;
   margin-bottom: 40px;
`

export const HeaderItems = styled.div`
    display: flex;
    gap: 20px;
`

export const Links = styled.a`
    text-decoration: none;
    color: aliceblue;
`