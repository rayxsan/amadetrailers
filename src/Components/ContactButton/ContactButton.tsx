import * as React from 'react';
import {Button} from 'semantic-ui-react'
import {StyledContactButton} from './ContactButton.styled'

const ContactButton = () => {
    return <StyledContactButton><Button color='green' size='small'>Contact Us</Button></StyledContactButton>
}

export default ContactButton;