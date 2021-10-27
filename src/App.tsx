import React from 'react';
import { Route, Switch, Redirect, BrowserRouter as Router } from "react-router-dom";
import * as page from './Pages'
import * as path from './Shared/Paths'
import {Divider} from 'semantic-ui-react'
import {Content} from './Components/Content/Content.styled'
import { Wrapper } from './Components/Wrapper/Wrapper.styled'
import HeaderMenu from './Components/Menu/Menu'
import Footer from './Components/Footer/Footer';

function App() {

  let routes = (
    <Router>
      <Wrapper>
    <HeaderMenu/>
    <Divider/>
    <Content>
    <Switch>
        <Route path={path.HomePath} exact component={page.HomePage} />
        <Route path={path.ContactPath} exact component={page.ContactPage}/>
        <Redirect to="/" />
    </Switch>
    </Content>
    </Wrapper>
    <Footer/>
    </Router>
  )
  
  return <>
    {routes}
  </>;
}

export default App;
