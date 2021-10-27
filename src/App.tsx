import React from 'react';
import { Route, Switch, Redirect, BrowserRouter as Router } from "react-router-dom";
import Layout from './hoc/Layout';
import * as page from './Pages'
import * as path from './Shared/Paths'
import {Divider} from 'semantic-ui-react'
import {Content} from './Components/Content/Content.styled'

function App() {

  let routes = (
    <Router>
    <Layout/>
    <Divider/>
    <Content>
    <Switch>
        <Route path={path.HomePath} exact component={page.HomePage} />
        <Route path={path.ContactPath} exact component={page.ContactPage}/>
        <Redirect to="/" />
    </Switch>
    </Content>
    </Router>
  )
  
  return <>
  
    {routes}
  </>;
}

export default App;
