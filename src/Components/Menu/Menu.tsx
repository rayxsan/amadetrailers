import React, {FunctionComponent, useState} from 'react';
import {StyledMenu} from './Menu.styled'

interface MainMenuProps {
    
}
 
const MainMenu: FunctionComponent<MainMenuProps> = (props) => {
    const [activeItem, setActiveItem] = useState("home");

    const handleItemClick = (name: string) => setActiveItem(name)
    return  (
        <StyledMenu color='orange' inverted fixed='top' size='large'>
          <StyledMenu.Item header position='left'>Our Company</StyledMenu.Item>
          <StyledMenu.Item
            name='home'
            active={activeItem === 'home'}
            onClick={() => handleItemClick('home')}
            position='right'
          />
          <StyledMenu.Item
            name='contact us'
            active={activeItem === 'contact us'}
            onClick={() => handleItemClick('contact us')}
          />
          {props.children}
        </StyledMenu>)
}
 
export default MainMenu;