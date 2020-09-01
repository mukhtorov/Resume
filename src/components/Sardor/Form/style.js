import styled from 'styled-components'

export const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`

export const Title = styled.div`
font-family: Arial, Helvetica, sans-serif;
font-weight: 600;
font-size: 20px;
color: #1E1E2D;
margin-bottom: 10px;
`

export const Button = styled.div`
width: 200px;
font-family: Arial, Helvetica, sans-serif;
font-weight: 600;
font-size: 20px;
color:white;
background: red;
border-radius: 8px;
cursor: pointer;
height: fit-content;
padding: 13px 0;
display: flex;
justify-content: center;
margin: 13px 0;
`

export const Share = styled.div`
font-family: Arial, Helvetica, sans-serif;
font-weight: 600;
font-size: 14px;
color: #26a0f4;
`

export const Line = styled.div`
width: 100%;
border: 1px solid #7E8299;
margin: 20px;
`

export const ItemWrapper = styled.div`
display: flex;
width: 350px;
padding: 15px 10px;
border-radius: 8px;
margin-bottom: 15px;
box-shadow: rgb(217, 221, 224) 0px 0px 4px 0px;
cursor: pointer;

&:hover{
  box-shadow: #989898 0px 0px 4px 0px;
}

`

export const Item = styled.div`



`

export const Icon = styled.div`
margin-left:auto;
`