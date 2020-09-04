import React from 'react'
import {Container, Title, Button, Share, Line, Item,Add, ItemWrapper, ItemWrapper1, Globus, Icon, Con, Ed, Del, Tar, Bag, Educ, Menu} from './style'

const Form = () => {
return(
    <Container>
        <Title>Your resume is here !</Title>
        <Button>DOWNLOAD</Button>
        <Share>Share it online !</Share>
        <Line />
        <ItemWrapper>
            <Item><Con/>Contact information</Item>
            <Icon><Ed/></Icon>
        </ItemWrapper>
        <ItemWrapper>
            <Item><Tar /> Objective</Item>
            <Icon><Del /><Ed/></Icon>
        </ItemWrapper>
        <ItemWrapper>
            <Item><Bag/>Exprience</Item>
            <Icon><Del/><Ed/></Icon>
        </ItemWrapper>
        <ItemWrapper>
            <Item><Educ/>Education</Item>
            <Icon><Del/><Ed/></Icon>
        </ItemWrapper>
        <ItemWrapper>
            <Item><Menu/>Skills </Item>
            <Icon><Del/><Ed/></Icon>
        </ItemWrapper>
        <ItemWrapper>
            <Item><Globus/>Languages</Item>
            <Icon><Del/><Ed/></Icon>
        </ItemWrapper>
        <ItemWrapper1>  
        <Item><Add/>Add Another </Item>
        </ItemWrapper1>
        
        
    </Container>
)
}
export default Form