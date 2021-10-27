import * as React from 'react';
import { Link } from 'react-router-dom';
import {Button} from 'semantic-ui-react'
import {StyledContactButton} from './ContactButton.styled'
import * as path from '../../Shared/Paths'

const ContactButton = () => {
    return <StyledContactButton><Button as={Link}
      to={path.ContactPath}
      color='green' 
      size='small'
      >Contact Us</Button></StyledContactButton>
}

export default ContactButton;