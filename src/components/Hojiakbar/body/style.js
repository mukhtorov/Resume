import styled from 'styled-components'
import Xojiakbar from '../../../assets/Xojiakbar.jpg'
export const Container = styled.div`
display:flex;
padding:10px 25px 22px 10px;
flex-direction:column;
background: white;
box-shadow: 0px 6px 12px rgba(73,75,116, 0.16);
padding-bottom:20px;
box-sizing: border-box;
height: 695px;
`

export const Title = styled.div`
font-family: Roboto;
font-style: normal;
font-weight: bold;
font-size: 16px;
line-height: 19px;

color: #000000;
`
export const Header = styled.div`
display:flex;
flex-direction:column;
align-items:flex-end;
height:fit-content;

`

Header.Left = styled.div`
display:flex;
flex-direction:column;
`

Header.Right = styled.div`

`
export const Content = styled.div`
font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 11px;
line-height: 13px;

color: #000000;
`
export const Img = styled.div`
background-image: url(${Xojiakbar});
background-repeat: no-repeat;
background-size: cover;
min-width: 55px;
height: 71px;
border: 1px solid #000000;
box-sizing: border-box;
border-radius: 9px;
`

export const Line = styled.div`
border:1px solid #C8C7C7;
margin:5px 0 10px 0;
`