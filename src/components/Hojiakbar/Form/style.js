import styled from 'styled-components'
import {Contacts} from '@styled-icons/remix-line/Contacts'
import {Edit} from '@styled-icons/entypo/Edit'
import {Target} from '@styled-icons/open-iconic/Target'
import {ShoppingBagOutline} from '@styled-icons/evaicons-outline/ShoppingBagOutline'
import {Delete} from '@styled-icons/material-outlined/Delete'
import {Education} from '@styled-icons/zondicons/Education'
import {Menu2} from '@styled-icons/evaicons-solid/Menu2'
import {Globe2} from '@styled-icons/bootstrap/Globe2'
import {AddCircleOutline} from '@styled-icons/material/AddCircleOutline'

export const Add = styled(AddCircleOutline)`
width:20px;
color:#26a0f4;
padding-right:20px;

`
export const Globus = styled(Globe2)`
width:20px;
color:#26a0f4;
padding-right:20px;
`

export const Menu = styled(Menu2)`
width:20px;
color:#26a0f4;
padding-right:20px;

`
export const Educ = styled(Education)`
width:20px;
color:#26a0f4;
padding-right:20px;
`


export const Bag = styled(ShoppingBagOutline)`
width:20px;
color: #26a0f4;
padding-right:20px;
`

export const Del = styled(Delete)`
width:20px;
color:red;
/* margin-left: auto; */
margin-right:10px;
&:hover{
    color:orange;
}
`
export const Tar = styled(Target)`
width:20px;
color:#26a0f4;
padding-right: 20px;
`

export const Ed = styled(Edit)`
width:20px;
color:rgb(109, 114, 117);
&:hover{
    color: yellow;
}


`



export const Con = styled(Contacts)`
width:20px;
color: #26a0f4;
padding-right: 20px;
`


export const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`

export const Title = styled.div`
font-family: Arial;
font-weight: 600;
font-size: 20px;
text-align: left;
color: #1E1E2D;

// border-right: 1px solid #1E1E2D;
margin-bottom: 10px;
`
export const Button = styled.div`
width:200px;
font-family: Arial;
font-weight: 600;
font-size: 20px;
color: white;
background: red;
border-radius: 8px;
cursor: pointer;
height: fit-content;
padding: 13px 0 ;
display: flex;
justify-content: center;
margin: 13px 0;
`
export const Share = styled.div`
font-family: Arial;
font-weight: 600;
font-size: 14px;
color: #26a0f4;
`

export const Line = styled.div`
border: 1px solid #7E8299;
width:100%;
height: 0px;
margin: 20px;
`

export const ItemWrapper = styled.div`
display: flex;
padding: 15px 10px;
width: 350px;
border-radius: 8px;
margin-bottom:15px;
box-shadow: rgb(217, 221, 224) 0px 0px 4px 0px;
cursor: pointer;
&:hover{
    box-shadow: #989898 0px 0px 4px 0px;
}

`
export const ItemWrapper1 = styled.div`
display: flex;
padding: 15px 10px;
width: 350px;
border-radius: 8px;
border: 1px dashed #26a0f4;
margin-bottom:15px;
color:#26a0f4;
box-shadow: rgb(217, 221, 224) 0px 0px 4px 0px;
cursor: pointer;
&:hover{
    box-shadow: #989898 0px 0px 4px 0px;
}

`

export const Item = styled.div`

`
export const Icon = styled.div`
margin-left: auto;
/* margin-right:10px; */
`