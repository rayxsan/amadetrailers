import React, {FunctionComponent, useState} from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import {StyledContactButton} from './Menu.styled'
import * as path from '../../Shared/Paths'
import {Menu, Container, Button} from 'semantic-ui-react'
//import ContactButton from '../ContactButton/ContactButton'

interface MainMenuProps {
  location : any
    
}
 
const HeaderMenu: FunctionComponent<MainMenuProps> = (props: MainMenuProps) => {
    const [activeItem, setActiveItem] = useState(path.HomePath);

    const handleItemClick = (name: string) => setActiveItem(name)

    const menuItems =  
    <Container>
    <Menu.Item header position='left'>Our Company</Menu.Item>
    <Menu.Item
    key='home'
      as={NavLink}
      to={path.HomePath}
      exact
      active={activeItem === path.HomePath}
      onClick={() => handleItemClick(path.HomePath)}
      position='right'
    >Home</Menu.Item>
    <Menu.Item
    key='contactus'
      as={NavLink}
      to={path.ContactPath} 
      active={activeItem === path.ContactPath}
      onClick={() => handleItemClick(path.ContactPath)}
    >Contact Us</Menu.Item>
   </Container>
    return  (
        <>
        <Menu color='orange' inverted fixed='top' size='large'>
          {menuItems}
        </Menu>
        <StyledContactButton  show={activeItem !== path.ContactPath}>
          <Button as={NavLink}
             to={path.ContactPath}
             onClick={() => handleItemClick(path.ContactPath)}
             color='green' 
              size='small'
      >Contact Us</Button></StyledContactButton>
        </>
        )
}
 
export default withRouter(HeaderMenu);