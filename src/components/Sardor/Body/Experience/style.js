import styled from 'styled-components'
import { GeneralTitle } from '../style'

export const Title = styled.div`
${GeneralTitle};
margin-bottom: 5px;
`

export const Container = styled.div`
display: flex;
flex-direction: column;
height: auto;
max-height: 241px;
width: 100%;
border-bottom: 1px solid #C8C7C7;
margin-bottom: 20px;
`
export const Wrapper = styled.div`
display: flex;
flex-direction: column;
`
export const Fregment = styled.div`
display: flex;
  margin-bottom: 20px;
`

export const Left = styled.div`
display: flex;
flex-direction: column;
flex: 3;
`

export const Right = styled.div`
display: flex;
flex-direction: column;
padding-left: 10px;
flex: 5;
border-left: 1px dashed #7E8299;
`

export const Content = styled.div`
font-family: Roboto;
font-style: italic;
font-weight: 600;
font-size: 12px;
line-height: 12px;

color: #000000;
`
export const Status = styled.div`
font-family: Roboto;
font-style: italic;
font-weight: bold;
font-size: 16px;
line-height: 12px;

color: #000000;

`

export const Description = styled.div`
font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 12px;
line-height: 11px;

color: #000000;
`