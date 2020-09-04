import styled from 'styled-components'

export const Wrapper = styled.div`
display: flex;
flex-direction: column;
width: 100%;
box-sizing: border-box;
background: #fff;
overflow: hidden;
height:100vh;
`

export const Container = styled.div`
display: flex;
width: 100%;
height: fit-content;
background: #FFFFFF;
box-sizing: border-box;
box-shadow: 0px 6px 12px rgba(73, 75, 116, 0.16);

`

export const Left = styled.div`
background: rgb(248, 249, 250);
display:flex;
flex:1;
overflow-y:scroll;
height: 80vh;
padding: 30px 60px; 
`

export const Right = styled.div`
background: white;
display: flex;
flex:1;
overflow-y:scroll;
height:80vh;
padding: 30px 60px; 
justify-content: center;
`
