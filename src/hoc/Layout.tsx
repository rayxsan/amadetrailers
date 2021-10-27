import React from 'react';
import HeaderMenu from '../Components/Menu/Menu';


interface LayoutProps {
    
}
 
const Layout: React.FunctionComponent<LayoutProps> = (props) => {
    return <>
    <HeaderMenu />
      <div>{props.children}</div>
    </>;
}
 
export default Layout;