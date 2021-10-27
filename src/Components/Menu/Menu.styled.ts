import styled from 'styled-components';
import {Menu} from 'semantic-ui-react'

export const StyledMenu = styled(Menu)`
&&& {
    background-color: red;
    font-weight: bold;
}
`
interface StyledContactButtonProps {
    show: boolean
}
export const StyledContactButton = styled.div<StyledContactButtonProps>`
position: fixed;
bottom: 1rem;
left: 1rem;
z-index: 5;
visibility: ${(props: StyledContactButtonProps) => props.show ? "visible" : "hidden"};
animation: updown 2s ease infinite;

@keyframes updown {
  0% {
    transform: translateY(-12%);
  }

  50% {
    transform: translateY(6%);
  }

  100% {
    transform: translateY(-12%);
  }
}
`