import styled, { css } from 'styled-components'
import Sardor from '../../../assets/sardor.jpg'

export const GeneralTitle = css`
font-family: Roboto;
font-style: normal;
font-weight: bold;
font-size: 14px;
line-height: 16px;
`

export const Container = styled.div`
display: flex;
flex-direction: column;
padding: 10px 25px 22px 10px;
background: white;
height: 695px;
box-shadow: 0px 6px 12px rgba(73, 75, 116, 0.16);
overflow: hidden;
box-sizing: border-box;
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
display: flex;
align-items: flex-end;
height: fit-content;
`

Header.Left = styled.div`
display: flex;
flex-direction: column;
padding-right: 60px;
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
margin-left: auto;
background-image: url(${Sardor});
background-repeat: no-repeat;
background-size: cover;
min-width: 55px;
height: 71px;
box-sizing: border-box;
border-radius: 9px;
box-shadow: rgb(217, 221, 224) 0px 0px 4px 0px;
`
export const Line = styled.div`
border: 1px solid #C8C7C7;
margin: 5px 0 10px 0;
`