import styled from 'styled-components'

export const Wrapper = styled.div`
display:flex;
justify-content: space-evenly;
`


export const Container = styled.div`
display:flex;
flex-direction:row;
width: 545px;
width: 545px;
height: 695px;

background: #FFFFFF;
border: 1px solid #000000;
box-sizing: border-box;
filter: drop-shadow(0px 6px 12px rgba(73, 75, 116, 0.04));
box-shadow: 0px 6px 12px rgba(73, 75, 116, 0.16);
`
Container.Form = styled.div`
display:flex;
flex-direction: column;
`

export const Side = styled.div`

`

export const Input = styled.input`
width: 100%;
height:43px;
border-radius: 8px;
background: #f8f8f8;
border:none;
font-size: 22px;
padding-left: 15px;
margin: 10px;


`