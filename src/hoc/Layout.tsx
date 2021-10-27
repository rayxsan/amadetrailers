import React from 'react';
import MainMenu from '../Components/Menu/Menu';
import ContactButton from '../Components/ContactButton/ContactButton'

interface LayoutProps {
    
}
 
const Layout: React.FunctionComponent<LayoutProps> = (props) => {
    return <>
    <MainMenu />
      <ContactButton/>
      <div>{props.children}</div>
    </>;
}
 
export default Layout;