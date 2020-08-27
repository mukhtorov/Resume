import styled from 'styled-components'

export const Wrapper = styled.div`
display: flex;
justify-content: space-evenly;

`

export const Container = styled.div`
/* padding: 10px; */
display: flex;
width: 545px;
height: fit-content;
background: #FFFFFF;
border: 1px solid #000000;
box-sizing: border-box;
box-shadow: 0px 6px 12px rgba(73, 75, 116, 0.16);
`

export const Form = styled.div`
/* padding: 10px; */
display: flex;
flex-direction: column;
width: 545px;
height: fit-content;
background: #FFFFFF;
border: 1px solid #000000;
box-sizing: border-box;
box-shadow: 0px 6px 12px rgba(73, 75, 116, 0.16);
`
export const Input = styled.input`
width: 100%;
border-radius: 8px;
background: #f8f8f8;
border: none;
height: 43px;
font-size: 22px;
padding-left: 15px;
margin: 10px;
`
export const LangContainer = styled.div`
display: flex;
justify-content: space-around;
`