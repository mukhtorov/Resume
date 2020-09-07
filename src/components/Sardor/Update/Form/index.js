import React from 'react'
import { Container, Title, Button, Icon, DeleteIcon, Share, Line, Item, ItemWrapper, EditIcon } from './style'
const Form = ({ goToStep }) => {
  return (
    <Container>
      <Title>Here is your resume!</Title>
      <Button>DOWNLOAD</Button>
      <Share>Share it online!</Share>
      <Line />
      <ItemWrapper onClick={() => goToStep(2)} >
        <Item>
          Personal Information
      </Item>
        <Icon>
          <DeleteIcon size={20} />
          <EditIcon size={20} />
        </Icon>
      </ItemWrapper>
      <ItemWrapper onClick={() => goToStep(3)}>
        <Item>
          Contact Information
      </Item>
        <Icon>
          <DeleteIcon size={20} />
          <EditIcon size={20} />
        </Icon>
      </ItemWrapper>
      <ItemWrapper onClick={() => goToStep(4)}>
        <Item>
          Skills
      </Item>
        <Icon>
          <DeleteIcon size={20} />
          <EditIcon size={20} />
        </Icon>
      </ItemWrapper>
      <ItemWrapper onClick={() => goToStep(5)}>
        <Item>
          Language
      </Item>
        <Icon>
          <DeleteIcon size={20} />
          <EditIcon size={20} />
        </Icon>
      </ItemWrapper>
      <ItemWrapper onClick={() => goToStep(6)}>
        <Item>
          Education
      </Item>
        <Icon>
          <DeleteIcon size={20} />
          <EditIcon size={20} />
        </Icon>
      </ItemWrapper>
      <ItemWrapper onClick={() => goToStep(7)} >
        <Item>
          Experience
      </Item>
        <Icon>
          <DeleteIcon size={20} />
          <EditIcon size={20} />
        </Icon>
      </ItemWrapper>
      <ItemWrapper onClick={() => goToStep(8)} >
        <Item>
          Projects
      </Item>
        <Icon>
          <DeleteIcon size={20} />
          <EditIcon size={20} />
        </Icon>
      </ItemWrapper>
    </Container>
  )
}

export default Form