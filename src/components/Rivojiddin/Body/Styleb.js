import styled from 'styled-components'
import Me from '../../../assets/me.jpg'
import Vec from '../../../assets/vecttt.svg'


export const Body = styled.div`
 display: flex;
 flex-direction: column;
 padding: 10px 25px 22px 10px;
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
align-items:flex-end;
height: fit-content;

`
 Header.Left = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 60px;

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
 background-image: url(${Me});
 background-repeat: no-repeat;
 background-size: cover;
 min-width: 55px;
 height: 71px;
 border: 1px solid #000000;
 box-sizing: border-box;
 border-radius: 9px;
 transform: matrix(1, 0, 0, 1, 0, 0);
 margin-left: auto; 
`

export const Line = styled.div`
border: 1px solid #C8C7C7;
margin: 5px 0 10px 0;

`
export const Container = styled.div`
display: flex;
position: relative;




`
Container.Le = styled.div`
width:35%;
align-items: flex-end;
`;

Container.Ri = styled.div`
width: 55%;
margin-left: auto;

`
export const Italic = styled.div`
font-family: Roboto;
font-style: italic;
font-weight: 500;
font-size: 10px;
line-height: 12px;
padding-top: 12px;

color: #000000;

`
export const Bold = styled.div`
font-family: Roboto;
font-style: italic;
font-weight: bold;
font-size: 9px;
line-height: 11px;
padding-top: 12px;

color: #000000;

`
export const ContentS = styled.div`
font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 9px;
line-height: 11px;
padding-right: 25px;

color: #000000;

`
export const LineX = styled.div`
border: 1px solid #C8C7C7;
margin-left: 10px;


`
export const ImgV = styled.div`
background-image: url(${Vec});
position: absolute;
border: 3px solid #000000;
box-sizing: border-box;

`
Container.Bottom = styled.div`
width: 61%;
margin: 5px 0 15px 66px;
`
ContentS.Last = styled.div`
font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 9px;
line-height: 12px;
padding-right: 25px;

color: #000000;
`




// export const Title = styled.div`
// /* position: relative; */
// font-family: Roboto;
// font-style: normal;
// font-weight: bold;
// font-size: 16px;
// line-height: 19px;

// color: #000000;;

// `

// export const Subtitle = styled.div`
// margin: 7px 0 0px 0;
// font-family: Roboto;
// font-style: normal;
// font-weight: bold;
// font-size: 12px;
// line-height: 14px;

// color: #FFFFFF;
// `
// export const Line = styled.div`
// width: 343px;
// height: 0px;

// margin: 0px 0 7px 0;
// border: 1px solid #C8C7C7;
// `
// export const Header = styled.div`
// flex-wrap: wrap;
// font-family: Roboto;
// font-style: normal;
// font-weight: normal;
// font-size: 11px;
// line-height: 13px;
// margin: 0 15px 10px 0;
// width: 70%;

// color: #000000;
// `
// export const Img = styled.div`
// /* position: absolute; */
// width: 100px;
// height: 71px;
// margin-left: auto;

// background: url(${img});
// background-size: cover;
// background-repeat: no-repeat;
// border: 1px solid #000000;
// box-sizing: border-box;
// border-radius: 9px;
// transform: matrix(1, 0, 0, 1, 0, 0);

// `

// // forFlex
// export const Flex1 = styled.div`

// `
// export const Flex2 = styled.div`
// display:flex;

// `