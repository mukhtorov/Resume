import styled from 'styled-components'
import img from "./pho.jpg"


export const Body = styled.div`
 padding: 37px 57px 27px 10px;
`
export const Title = styled.div`
position: relative;
font-family: Roboto;
font-style: normal;
font-weight: bold;
font-size: 16px;
line-height: 19px;

color: #000000;;

`

export const Subtitle = styled.div`
margin: 7px 0 0px 0;
font-family: Roboto;
font-style: normal;
font-weight: bold;
font-size: 12px;
line-height: 14px;

color: #FFFFFF;
`
export const Line = styled.div`
width: 343px;
height: 0px;

margin: 0px 0 7px 0;
border: 1px solid #C8C7C7;
`
export const Header = styled.div`
flex-wrap: wrap;
font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 11px;
line-height: 13px;
margin: 0 15px 10px 0;
width: 70%;

color: #000000;
`
export const Img = styled.div`
/* position: absolute; */
width: 55px;
height: 71px;

background: url(${img});
background-size: cover;
background-repeat: no-repeat;
border: 1px solid #000000;
box-sizing: border-box;
border-radius: 9px;
transform: matrix(1, 0, 0, 1, 0, 0);
top:9px;
right: 25px;

`

// forFlex
export const Flex1 = styled.div`

`
export const Flex2 = styled.div`
 display:flex;

`