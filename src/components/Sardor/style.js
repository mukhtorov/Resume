import styled from 'styled-components'

export const Wrapper = styled.div`
display: flex;
flex-direction: column;
width: 100%;
box-sizing: border-box;
background: #fff;
overflow: hidden;
height: 100vh;
`

export const Container = styled.div`
display: flex;
width: 100%;
height: fit-content;
background: #FFFFFF;
overflow: hidden;
box-sizing: border-box;
box-shadow: 0px 6px 12px rgba(73, 75, 116, 0.16);
`

export const Left = styled.div`
display: flex;
background: rgb(248, 249, 250);
flex:1;
padding: 30px 60px; 
box-sizing: border-box;
overflow-y: scroll;
height: 90vh;
`

export const Right = styled.div`
display: flex;
justify-content: center;
background: white;
flex:1;
height: 75vh;
padding: 30px 60px; 
overflow-y: scroll;

`

export const FormContainer = styled.div`
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
box-sizing: border-box;
`
export const LangContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;
`



export const Div = styled.div`
width: 90%;
height: 40px;
background: yellowgreen;
margin: 10px;
`